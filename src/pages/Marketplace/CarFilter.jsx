import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CarFilter.css'; // Assuming you have a CSS file for styling

const VehicleFilter = ({ listings, setFilteredListings }) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');

  useEffect(() => {
    fetch('http://localhost:1337/api/makes?populate=*')
      .then(response => response.json())
      .then(data => {
        const sortedMakes = data.data.sort((a, b) => a.attributes.Make.localeCompare(b.attributes.Make));
        setMakes(sortedMakes);
      })
      .catch(error => console.error('Error fetching makes:', error));

    fetch('http://localhost:1337/api/gearboxes')
      .then(response => response.json())
      .then(data => setTransmissions(data.data))
      .catch(error => console.error('Error fetching transmissions:', error));

    fetch('http://localhost:1337/api/conditions')
      .then(response => response.json())
      .then(data => {
        const sortedConditions = data.data.sort((a, b) => a.attributes.Condition.localeCompare(b.attributes.Condition));
        setConditions(sortedConditions);
      })
      .catch(error => console.error('Error fetching conditions:', error));

    fetch('http://localhost:1337/api/locations')
      .then(response => response.json())
      .then(data => {
        const sortedLocations = data.data.sort((a, b) => a.attributes.Location.localeCompare(b.attributes.Location));
        setLocations(sortedLocations);
      })
      .catch(error => console.error('Error fetching locations:', error));

    fetch('http://localhost:1337/api/fuels')
      .then(response => response.json())
      .then(data => {
        const sortedFuelTypes = data.data.sort((a, b) => a.attributes.FuelType.localeCompare(b.attributes.FuelType));
        setFuelTypes(sortedFuelTypes);
      })
      .catch(error => console.error('Error fetching fuel types:', error));
  }, []);

  useEffect(() => {
    if (selectedMake) {
      const selectedMakeModels = makes.find(make => make.attributes.Make === selectedMake)?.attributes.models.data || [];
      const sortedModels = selectedMakeModels.sort((a, b) => a.attributes.Model.localeCompare(b.attributes.Model));
      setModels(sortedModels);
    } else {
      setModels([]);
    }
  }, [selectedMake, makes]);

  useEffect(() => {
    let filtered = listings;

    if (selectedModel) {
      filtered = filtered.filter(listing => listing.attributes.model.data.attributes.Model === selectedModel);
    }
    if (selectedYear) {
      filtered = filtered.filter(listing => listing.attributes.Year === selectedYear);
    }
    if (selectedTransmission) {
      filtered = filtered.filter(listing => listing.attributes.gearbox.data.attributes.Transmission === selectedTransmission);
    }
    if (selectedCondition) {
      filtered = filtered.filter(listing => listing.attributes.condition.data.attributes.Condition === selectedCondition);
    }
    if (selectedLocation) {
      filtered = filtered.filter(listing => listing.attributes.location.data.attributes.Location === selectedLocation);
    }
    if (selectedFuelType) {
      filtered = filtered.filter(listing => listing.attributes.fuel.data.attributes.FuelType === selectedFuelType);
    }

    setFilteredListings(filtered);
  }, [selectedModel, selectedYear, selectedTransmission, selectedCondition, selectedLocation, selectedFuelType, listings, setFilteredListings]);

  return (
    <div className="vehicle-filter-container">
      <select className="filter-select" onChange={e => setSelectedMake(e.target.value)} value={selectedMake}>
        <option value="">Select Make</option>
        {makes.map(make => (
          <option key={make.id} value={make.attributes.Make}>{make.attributes.Make}</option>
        ))}
      </select>

      <select className="filter-select" onChange={e => setSelectedModel(e.target.value)} value={selectedModel} disabled={!selectedMake}>
        <option value="">Select Model</option>
        {models.map(model => (
          <option key={model.id} value={model.attributes.Model}>{model.attributes.Model}</option>
        ))}
      </select>

      <select className="filter-select" onChange={e => setSelectedYear(e.target.value)} value={selectedYear}>
        <option value="">Select Year</option>
        {listings.map(listing => (
          <option key={listing.id} value={listing.attributes.Year}>{listing.attributes.Year}</option>
        ))}
      </select>

      <select className="filter-select" onChange={e => setSelectedTransmission(e.target.value)} value={selectedTransmission}>
        <option value="">Select Transmission</option>
        {transmissions.map(transmission => (
          <option key={transmission.id} value={transmission.attributes.Transmission}>{transmission.attributes.Transmission}</option>
        ))}
      </select>

      <select className="filter-select" onChange={e => setSelectedCondition(e.target.value)} value={selectedCondition}>
        <option value="">Select Condition</option>
        {conditions.map(condition => (
          <option key={condition.id} value={condition.attributes.Condition}>{condition.attributes.Condition}</option>
        ))}
      </select>

      <select className="filter-select" onChange={e => setSelectedLocation(e.target.value)} value={selectedLocation}>
        <option value="">Select Location</option>
        {locations.map(location => (
          <option key={location.id} value={location.attributes.Location}>{location.attributes.Location}</option>
        ))}
      </select>

      <select className="filter-select" onChange={e => setSelectedFuelType(e.target.value)} value={selectedFuelType}>
        <option value="">Select Fuel Type</option>
        {fuelTypes.map(fuel => (
          <option key={fuel.id} value={fuel.attributes.FuelType}>{fuel.attributes.FuelType}</option>
        ))}
      </select>
    </div>
  );
};

VehicleFilter.propTypes = {
  listings: PropTypes.array.isRequired,
  setFilteredListings: PropTypes.func.isRequired,
};

export default VehicleFilter;
