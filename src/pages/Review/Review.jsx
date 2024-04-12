// Review.jsx
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import './Review.css';
import Selectmakeandmodel from '../../components/make&model/Selectmakeandmodel';
import ReviewList from '../../components/Reviewslist/Reviewslist';
import Model from './Model';

export const Review = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [models, setModels] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  const modelsRef = useRef(null);
  const reviewListRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/makes?populate=*`)
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setMakes(response.data.data);
        } else {
          console.error('Error: Response data is not in the expected format');
        }
      })
      .catch((error) => {
        console.error('Error fetching makes:', error);
      });
  }, []);

  const fetchModelsForMake = (make) => {
    const selectedMakeObject = makes.find((m) => m.attributes.Make === make);
    if (selectedMakeObject) {
      setModels(selectedMakeObject.attributes.models.data);
    } else {
      setModels([]);
    }
  };

  const fetchReviewsForModel = async (selectedModel) => {
    try {
      let reviewsForModel = [];
      const response = await axios.get(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/models?populate=*`);
  
      if (response.data && Array.isArray(response.data.data)) {
        const selectedModelObject = response.data.data.find(model => model.attributes.Model === selectedModel);
        if (selectedModelObject) {
          if (selectedModelObject.attributes.reviews && selectedModelObject.attributes.reviews.data) {
            reviewsForModel = selectedModelObject.attributes.reviews.data;
          }
        } else {
          console.error(`Model '${selectedModel}' not found`);
        }
      } else {
        console.error('Error: Response data is not in the expected format');
      }
  
      setReviews(reviewsForModel);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };    

  const handleMakeChange = (event) => {
    const selectedMake = event.target.value;
    setSelectedMake(selectedMake);
    fetchModelsForMake(selectedMake);
  };

  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    setSelectedModel(selectedModel);
  };

  const handleSearch = () => {
    if (!selectedModel) {
      console.error('No model selected');
      return;
    }
    fetchReviewsForModel(selectedModel);

    if (reviewListRef.current) {
      reviewListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  };

  const handleModelClick = (review) => {
    setSelectedReview(review);

    if (modelsRef.current) {
      modelsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='review'>
      <section className='background'>
        <h1>Navigate your Car Journey <br /> with Confidence</h1>
        <Selectmakeandmodel
          makes={makes}
          models={models}
          selectedMake={selectedMake}
          selectedModel={selectedModel}
          onMakeChange={handleMakeChange}
          onModelChange={handleModelChange}
          onSearch={handleSearch}
        />
      </section>
      <h4>Guiding Your Choice</h4>
      <div className='call2action'>
        <p className="sparkle u-hover--sparkle">
          <i className='bx bxs-quote-alt-left'/>
          Looking to buy or sell a car locally <br />
          Contact us at...
          <i className='bx bxs-quote-alt-right'/>
        </p>
        <label htmlFor="#" id='contact'>O746583509</label>
      </div>
      <div ref={reviewListRef}>
        {reviews.length > 0 && <ReviewList reviews={reviews} onSelectReview={handleModelClick} />}
      </div>
      
      {/* Render the Model component with the selected review */}
      <div ref={modelsRef}>
        {selectedReview && <Model selectedReview={selectedReview} onClose={() => setSelectedReview(null)} />}
      </div>
      
    </div>
  );
};
