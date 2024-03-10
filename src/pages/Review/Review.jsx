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
  const [carInfo, setCarInfo] = useState(null);

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

  const fetchReviewsForModel = (model) => {
    axios
      .get(`http://localhost:1337/api/models?populate=*&Model=${encodeURIComponent(model)}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          const selectedModelData = response.data.data.find((item) => item.attributes.Model === model);
          if (selectedModelData && selectedModelData.attributes.review && selectedModelData.attributes.review.data) {
            setCarInfo(selectedModelData.attributes.review.data);
          } else {
            console.error('No review found for selected model');
            setCarInfo(null);
          }
        } else {
          console.error('Error: Response data is not in the expected format');
        }
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  };

  const handleMakeChange = (event) => {
    const selectedMake = event.target.value;
    setSelectedMake(selectedMake);
    fetchModelsForMake(selectedMake);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleSearch = () => {
    if (!selectedModel) {
      console.error('No model selected');
      return;
    }
    fetchReviewsForModel(selectedModel);
  };

  const fetchModelsForMake = (make) => {
    const selectedMakeObject = makes.find((m) => m.attributes.Make === make);
    if (selectedMakeObject) {
      setModels(selectedMakeObject.attributes.models.data);
    } else {
      setModels([]);
    }
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
      {/* This bottom section is to display the review for the car selected from the section above.
      There is an api to query the backend to display the review for the vehicle selected */}
      {carInfo && (
      <section className="car">
        <div className="carimage">
          {/* Check if ExteriorShot data is available before accessing it */}
          {carInfo.attributes.ExteriorShot && carInfo.attributes.ExteriorShot.data && (
            <img src={`http://localhost:1337${carInfo.attributes.ExteriorShot.data.formats.thumbnail.url}`} alt="Car" />
          )}
        </div>
        <div className="desc">
          <h3 className='name'>{carInfo.attributes.Vehicle}</h3>
          <h4 className='generation'>{carInfo.attributes.Generation}</h4>
          <p className="overview">{carInfo.attributes.Overview}</p>
          {/* Add a link to the full review page */}
        </div>
      </section>
    )}
    </div>
  );
};
