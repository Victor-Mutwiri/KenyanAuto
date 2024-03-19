import { useState, useEffect } from 'react';
import axios from 'axios';
import './Review.css';
import safety from '../../assets/safety.jpg';
import service from '../../assets/service.jpg';
import firstcar from '../../assets/firstcar.jpg';
import buying from '../../assets/buying.jpg';

export const Review = () => {
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

  const handleMakeChange = (event) => {
    const selectedMake = event.target.value;
    setSelectedMake(selectedMake);
    fetchModelsForMake(selectedMake);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  
  const fetchReviewsForModel = (model) => {
    axios
      .get(`http://localhost:1337/api/reviews?Model=${encodeURIComponent(model)}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setReviews(response.data.data);
        } else {
          console.error('Error: Response data is not in the expected format');
          setReviews([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  };
  

  const handleSearch = () => {
    if (!selectedModel) {
      console.error('No model selected');
      return;
    }
    fetchReviewsForModel(selectedModel);
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
            <button onClick={handleSearch} disabled={!selectedMake || !selectedModel}>
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
      {/* Display all reviews */}
      {reviews.length > 0 && (
        <section className='car'>
          {reviews.map((review) => (
            <div key={review.id} className='car-review'>
              <div className="car-image">
                {review.attributes.ExteriorShot && review.attributes.ExteriorShot.data && (
                  <img src={`http://localhost:1337${review.attributes.ExteriorShot.data.formats.thumbnail.url}`} alt={`Exterior of ${review.attributes.Vehicle}`} />
                )}
              </div>
              <div className='desc'>
                <h3>{review.attributes.Vehicle}</h3>
                <h4>{review.attributes.Generation}</h4>
                <p>{review.attributes.Overview}</p>
                {/* Add more review attributes here */}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
