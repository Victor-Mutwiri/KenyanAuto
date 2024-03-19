import './Buying.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Review/Review.css';
import safety from '../../assets/safety.jpg';
import service from '../../assets/service.jpg';
import firstcar from '../../assets/firstcar.jpg';
import buying from '../../assets/buying.jpg';

export const Buying = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [models, setModels] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/makes?populate=*')
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
      let allReviews = [];
  
      // Function to fetch models recursively for all pages
      const fetchModelsRecursive = async (currentPage) => {
        const response = await axios.get(`http://localhost:1337/api/models?populate=*`, {
          params: {
            page: currentPage,
            pageSize: 10 // Adjust the pageSize as needed
          }
        });
  
        if (response.data && Array.isArray(response.data.data)) {
          // Extract reviews from models on the current page for the selected model
          response.data.data.forEach((model) => {
            if (
              model.attributes.Model === selectedModel &&
              model.attributes.reviews &&
              model.attributes.reviews.data &&
              model.attributes.reviews.data.length > 0
            ) {
              allReviews = allReviews.concat(model.attributes.reviews.data);
            }
          });
  
          // If there are more pages, recursively fetch models for the next page
          if (currentPage < response.data.meta.pagination.pageCount) {
            await fetchModelsRecursive(currentPage + 1);
          }
        } else {
          console.error('Error: Response data is not in the expected format');
        }
      };
  
      // Start fetching models recursively from the first page
      await fetchModelsRecursive(1);
  
      // Update the state with all reviews for the selected model
      setReviews(allReviews);
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
    fetchReviewsForModel(selectedModel);
  };


  const handleSearch = () => {
    if (!selectedModel) {
      console.error('No model selected');
      return;
    }
    // Perform any additional actions needed when searching
  };

  return (
    <div className='review'>
      <section className='background'>
        <h1>Navigate your Car Journey <br /> with Confidence</h1>
        <div className='search'>
          <h3>Discover</h3>
          <div className='search-field'>
            <div className='make'>
              <h4>Make</h4>
              <select name='make' value={selectedMake} onChange={handleMakeChange}>
                <option value=''>Select Make</option>
                {makes.map((make) => (
                  <option key={make.id} value={make.attributes.Make}>
                    {make.attributes.Make}
                  </option>
                ))}
              </select>
            </div>
            <div className='model'>
              <h4>Model</h4>
              <select name='model' value={selectedModel} onChange={handleModelChange} disabled={!selectedMake}>
                <option value=''>Select Model</option>
                {models.map((model) => (
                  <option key={model.id} value={model.attributes.Model}>
                    {model.attributes.Model}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={handleSearch} disabled={!selectedModel}>
              <i className='bx bx-search-alt'> Search</i>
            </button>
          </div>
        </div>
      </section>
      <h3>Guiding Your Choice</h3>
      <div className='images'>
        <img src={buying} alt='buying' />
        <img src={service} alt='service' />
        <img src={firstcar} alt='firstcar' />
        <img src={safety} alt='safety' />
      </div>
      {/* Display reviews for the selected model */}
      {reviews.length > 0 && (
        <section className='car'>
          {reviews.map((review) => (
            <div key={review.id} className='car-review'>
              <div className="car-image">
                {/* Adjust this part according to your review data */}
              </div>
              <div className='desc'>
                <h3>{review.attributes.Vehicle}</h3>
                <h4>{review.attributes.Generation}</h4>
                {/* Add more review attributes here */}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
