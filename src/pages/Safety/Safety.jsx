import { useState, useEffect } from 'react';
import axios from 'axios';

export const Safety = () => {
  // State variables
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [reviews, setReviews] = useState([]);

  // Fetch makes data
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const makesList = ['AlfaRomeo', 'Audi', 'BMW']; // Update with all make names

        // Fetch data for each make
        const makesData = await Promise.all(
          makesList.map(async (make) => {
            const response = await axios.get(`../../data/makes/${make}.json`);
            return response.data;
          })
        );

        // Set the makes data
        setMakes(makesData);
      } catch (error) {
        console.error('Error fetching makes data:', error);
      }
    };

    fetchMakes();
  }, []);

  // Function to fetch models for the selected make
  const fetchModels = (make) => {
    axios.get(`../../data/makes/${make}.json`)
      .then(response => setModels(response.data.models))
      .catch(error => console.error(`Error fetching models for ${make}:`, error));
  };

  // Function to handle make selection
  const handleMakeSelection = (event) => {
    const make = event.target.value;
    setSelectedMake(make);
    setSelectedModel('');
    setSearchEnabled(false);
    fetchModels(make);
  };

  // Function to handle model selection
  const handleModelSelection = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    setSearchEnabled(true);
  };

  // Function to handle search button click
  const handleSearch = () => {
    if (selectedMake && selectedModel) {
      axios.get(`../../data/reviews/${selectedMake}_reviews.json`)
        .then(response => {
          const selectedModelReviews = response.data[selectedModel];
          setReviews(selectedModelReviews);
        })
        .catch(error => console.error('Error fetching reviews data:', error));
    }
  };

  return (
    <div>
      {/* Make selection dropdown */}
      <select value={selectedMake} onChange={handleMakeSelection}>
        <option value="">Select Make</option>
        {makes.map(make => (
          <option key={make.name} value={make.name}>{make.name}</option>
        ))}
      </select>

      {/* Model selection dropdown (enabled when make is selected) */}
      <select value={selectedModel} onChange={handleModelSelection} disabled={!selectedMake}>
        <option value="">Select Model</option>
        {models.map(model => (
          <option key={model.name} value={model.name}>{model.name}</option>
        ))}
      </select>

      {/* Search button (enabled when model is selected) */}
      <button onClick={handleSearch} disabled={!searchEnabled}>Search</button>

      {/* Display reviews */}
      {reviews && (
        <div>
          {Object.keys(reviews).map((generation, index) => (
            <div key={index}>
              <h3>Generation: {generation}</h3>
              <img src={reviews[generation].thumbnail} alt="Thumbnail" />
              {/* Display other review details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


