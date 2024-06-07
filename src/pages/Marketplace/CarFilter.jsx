import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './CarFilter.css'; // Assuming you have a CSS file for styling

const VehicleFilter = ({ listings, setFilteredListings }) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTransmissions, setSelectedTransmissions] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/makes?populate=*`)
      .then(response => response.json())
      .then(data => {
        const sortedMakes = data.data.sort((a, b) => a.attributes.Make.localeCompare(b.attributes.Make));
        setMakes(sortedMakes);
      })
      .catch(error => console.error('Error fetching makes:', error));

    fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/gearboxes`)
      .then(response => response.json())
      .then(data => setTransmissions(data.data))
      .catch(error => console.error('Error fetching transmissions:', error));

    fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/conditions`)
      .then(response => response.json())
      .then(data => {
        const sortedConditions = data.data.sort((a, b) => a.attributes.Condition.localeCompare(b.attributes.Condition));
        setConditions(sortedConditions);
      })
      .catch(error => console.error('Error fetching conditions:', error));

    fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/locations`)
      .then(response => response.json())
      .then(data => {
        const sortedLocations = data.data.sort((a, b) => a.attributes.Location.localeCompare(b.attributes.Location));
        setLocations(sortedLocations);
      })
      .catch(error => console.error('Error fetching locations:', error));

    fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/fuels`)
      .then(response => response.json())
      .then(data => {
        const sortedFuelTypes = data.data.sort((a, b) => a.attributes.FuelType.localeCompare(b.attributes.FuelType));
        setFuelTypes(sortedFuelTypes);
      })
      .catch(error => console.error('Error fetching fuel types:', error));
  }, []);

  useEffect(() => {
    if (selectedMake) {
      const selectedMakeModels = makes.find(make => make.attributes.Make === selectedMake.value)?.attributes.models.data || [];
      const sortedModels = selectedMakeModels.sort((a, b) => a.attributes.Model.localeCompare(b.attributes.Model));
      setModels(sortedModels);
    } else {
      setModels([]);
    }
  }, [selectedMake, makes]);

  useEffect(() => {
    let filtered = listings;

    if (selectedModel) {
      filtered = filtered.filter(listing => listing.attributes.model.data.attributes.Model === selectedModel.value);
    }
    if (selectedYear) {
      filtered = filtered.filter(listing => listing.attributes.Year === selectedYear);
    }
    if (selectedTransmissions.length > 0) {
      const selectedTransmissionValues = selectedTransmissions.map(t => t.value);
      filtered = filtered.filter(listing => selectedTransmissionValues.includes(listing.attributes.gearbox.data.attributes.Transmission));
    }
    if (selectedConditions.length > 0) {
      const selectedConditionValues = selectedConditions.map(c => c.value);
      filtered = filtered.filter(listing => selectedConditionValues.includes(listing.attributes.condition.data.attributes.Condition));
    }
    if (selectedLocations.length > 0) {
      const selectedLocationValues = selectedLocations.map(l => l.value);
      filtered = filtered.filter(listing => selectedLocationValues.includes(listing.attributes.location.data.attributes.Location));
    }
    if (selectedFuelTypes.length > 0) {
      const selectedFuelTypeValues = selectedFuelTypes.map(f => f.value);
      filtered = filtered.filter(listing => selectedFuelTypeValues.includes(listing.attributes.fuel.data.attributes.FuelType));
    }

    setFilteredListings(filtered);
  }, [selectedModel, selectedYear, selectedTransmissions, selectedConditions, selectedLocations, selectedFuelTypes, listings, setFilteredListings]);

  const formatOptions = (data, labelKey) => data.map(item => ({
    value: item.attributes[labelKey],
    label: item.attributes[labelKey]
  }));

  return (
    <div className="vehicle-filter-container">
      <Select
        className="filter-select"
        options={formatOptions(makes, 'Make')}
        onChange={setSelectedMake}
        value={selectedMake}
        placeholder="Select Make"
        isClearable
      />

      <Select
        className="filter-select"
        options={formatOptions(models, 'Model')}
        onChange={setSelectedModel}
        value={selectedModel}
        placeholder="Select Model"
        isClearable
        isDisabled={!selectedMake}
      />

      <Select
        className="filter-select"
        options={listings.map(listing => ({
          value: listing.attributes.Year,
          label: listing.attributes.Year
        }))}
        onChange={option => setSelectedYear(option ? option.value : '')}
        value={selectedYear ? { value: selectedYear, label: selectedYear } : null}
        placeholder="Select Year"
        isClearable
      />

      <Select
        className="filter-select"
        options={formatOptions(transmissions, 'Transmission')}
        onChange={setSelectedTransmissions}
        value={selectedTransmissions}
        placeholder="Select Transmission"
        isMulti
        isClearable
      />

      <Select
        className="filter-select"
        options={formatOptions(conditions, 'Condition')}
        onChange={setSelectedConditions}
        value={selectedConditions}
        placeholder="Select Condition"
        isMulti
        isClearable
      />

      <Select
        className="filter-select"
        options={formatOptions(locations, 'Location')}
        onChange={setSelectedLocations}
        value={selectedLocations}
        placeholder="Select Location"
        isMulti
        isClearable
      />

      <Select
        className="filter-select"
        options={formatOptions(fuelTypes, 'FuelType')}
        onChange={setSelectedFuelTypes}
        value={selectedFuelTypes}
        placeholder="Select Fuel Type"
        isMulti
        isClearable
      />
    </div>
  );
};

VehicleFilter.propTypes = {
  listings: PropTypes.array.isRequired,
  setFilteredListings: PropTypes.func.isRequired,
};

export default VehicleFilter;
