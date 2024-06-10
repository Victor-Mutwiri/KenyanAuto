import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Slider from 'react-slick';
import './CarFilter.css'; // Assuming you have a CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    /* responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ] */
  };

  const makeOptions = makes.map(make => ({ value: make.attributes.Make, label: make.attributes.Make }));
  const modelOptions = models.map(model => ({ value: model.attributes.Model, label: model.attributes.Model }));
  const transmissionOptions = transmissions.map(transmission => ({ value: transmission.attributes.Transmission, label: transmission.attributes.Transmission }));
  const conditionOptions = conditions.map(condition => ({ value: condition.attributes.Condition, label: condition.attributes.Condition }));
  const locationOptions = locations.map(location => ({ value: location.attributes.Location, label: location.attributes.Location }));
  const fuelTypeOptions = fuelTypes.map(fuelType => ({ value: fuelType.attributes.FuelType, label: fuelType.attributes.FuelType }));

  return (
    <>
      <div className="filter-container column-filter">
        <Select
          placeholder="Select Make"
          value={selectedMake}
          onChange={setSelectedMake}
          options={makeOptions}
          isClearable
        />
        <Select
          placeholder="Select Model"
          value={selectedModel}
          onChange={setSelectedModel}
          options={modelOptions}
          isClearable
          isDisabled={!selectedMake}
        />
        <Select
          placeholder="Select Year"
          value={selectedYear}
          onChange={setSelectedYear}
          options={[...new Set(listings.map(listing => listing.attributes.Year))].map(year => ({ value: year, label: year }))}
          isClearable
        />
        <Select
          placeholder="Select Transmission"
          value={selectedTransmissions}
          onChange={setSelectedTransmissions}
          options={transmissionOptions}
          isMulti
          isClearable
        />
        <Select
          placeholder="Select Condition"
          value={selectedConditions}
          onChange={setSelectedConditions}
          options={conditionOptions}
          isMulti
          isClearable
        />
        <Select
          placeholder="Select Location"
          value={selectedLocations}
          onChange={setSelectedLocations}
          options={locationOptions}
          isMulti
          isClearable
        />
        <Select
          placeholder="Select Fuel Type"
          value={selectedFuelTypes}
          onChange={setSelectedFuelTypes}
          options={fuelTypeOptions}
          isMulti
          isClearable
        />
      </div>

      <div className="filter-container carousel-filter">
        <Slider {...carouselSettings}>
          <div>
            <Select
              placeholder="Select Make"
              value={selectedMake}
              onChange={setSelectedMake}
              options={makeOptions}
              isClearable
            />
          </div>
          <div>
            <Select
              placeholder="Select Model"
              value={selectedModel}
              onChange={setSelectedModel}
              options={modelOptions}
              isClearable
              isDisabled={!selectedMake}
            />
          </div>
          <div>
            <Select
              placeholder="Select Year"
              value={selectedYear}
              onChange={setSelectedYear}
              options={[...new Set(listings.map(listing => listing.attributes.Year))].map(year => ({ value: year, label: year }))}
              isClearable
            />
          </div>
          <div>
            <Select
              placeholder="Select Transmission"
              value={selectedTransmissions}
              onChange={setSelectedTransmissions}
              options={transmissionOptions}
              isMulti
              isClearable
            />
          </div>
          <div>
            <Select
              placeholder="Select Condition"
              value={selectedConditions}
              onChange={setSelectedConditions}
              options={conditionOptions}
              isMulti
              isClearable
            />
          </div>
          <div>
            <Select
              placeholder="Select Location"
              value={selectedLocations}
              onChange={setSelectedLocations}
              options={locationOptions}
              isMulti
              isClearable
            />
          </div>
          <div>
            <Select
              placeholder="Select Fuel Type"
              value={selectedFuelTypes}
              onChange={setSelectedFuelTypes}
              options={fuelTypeOptions}
              isMulti
              isClearable
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

VehicleFilter.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilteredListings: PropTypes.func.isRequired,
};

export default VehicleFilter;
