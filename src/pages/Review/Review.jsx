import { useState, useEffect } from 'react';
import axios from 'axios';
import './Review.css';
import safety from '../../assets/safety.jpg';
import service from '../../assets/service.jpg';
import firstcar from '../../assets/firstcar.jpg';
import buying from '../../assets/buying.jpg';
import Selectmakeandmodel from '../../components/make&model/Selectmakeandmodel';
import ReviewList from '../../components/Reviewslist/Reviewslist';

export const Review = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [models, setModels] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      /* .get('http://localhost:1337/api/makes?populate=*') */
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
  
  /* const fetchReviewsForModel = async (selectedModel) => {
    try {
      let allReviews = [];
  
      // Fetch all models
      const response = await axios.get(`http://localhost:1337/api/models?populate=*`);
  
      if (response.data && Array.isArray(response.data.data)) {
        // Filter models to get the selected model
        const selectedModelObject = response.data.data.find(model => model.attributes.Model === selectedModel);
  
        // Check if the selected model exists
        if (selectedModelObject && selectedModelObject.attributes.reviews &&
            selectedModelObject.attributes.reviews.data &&
            selectedModelObject.attributes.reviews.data.length > 0) {
          // If reviews exist for the selected model, set them to allReviews
          allReviews = selectedModelObject.attributes.reviews.data;
        }
      } else {
        console.error('Error: Response data is not in the expected format');
      }
  
      // Update the state with reviews for the selected model
      setReviews(allReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }; */


  const fetchReviewsForModel = async (selectedModel) => {
    try {
      let reviewsForModel = [];
  
      // Fetch all models
      /* const response = await axios.get(`http://localhost:1337/api/models?populate=*`); */
      
      const response = await axios.get(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/models?populate=*`);
  
      if (response.data && Array.isArray(response.data.data)) {
        // Filter models to get the selected model
        const selectedModelObject = response.data.data.find(model => model.attributes.Model === selectedModel);
  
        if (selectedModelObject) {
          // Check if reviews exist for the selected model
          if (selectedModelObject.attributes.reviews && selectedModelObject.attributes.reviews.data) {
            // Set reviews for the selected model
            reviewsForModel = selectedModelObject.attributes.reviews.data;
          }
        } else {
          console.error(`Model '${selectedModel}' not found`);
        }
      } else {
        console.error('Error: Response data is not in the expected format');
      }
  
      // Update the state with reviews for the selected model
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
    //fetchReviewsForModel(selectedModel);
  };


  const handleSearch = () => {
    if (!selectedModel) {
      console.error('No model selected');
      return;
    }
    // Fetch reviews for the selected model
    fetchReviewsForModel(selectedModel);
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
      <h3>Guiding Your Choice</h3>
      <div className="reviewlist">
        {reviews.length > 0 && <ReviewList reviews={reviews}/>}
      </div>
      <div className='images'>
        <img src={buying} alt='buying' />
        <img src={service} alt='service' />
        <img src={firstcar} alt='firstcar' />
        <img src={safety} alt='safety' />
      </div>
      
    </div>
  );
};
