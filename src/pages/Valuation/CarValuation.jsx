import { useState } from 'react';
import './CarValuation.css'

const CarValuation = () => {
  const [year, setYear] = useState('');
  const [priceBought, setPriceBought] = useState('');
  const [mileageBought, setMileageBought] = useState('');
  const [currentMileage, setCurrentMileage] = useState('');
  const [marketPrices, setMarketPrices] = useState([]);
  const [accident, setAccident] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate average market price
    const averageMarketPrice = marketPrices.reduce((total, price) => total + price, 0) / marketPrices.length;

    // Depreciation rate calculation based on car's age
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year);
    const depreciationRate = 0.05 * age; // Example depreciation rate, you can adjust this based on your needs

    // Calculate valuation
    const valuation = (priceBought / (1 + depreciationRate)) *
                      ((mileageBought - currentMileage) / 10000) * // Assuming total mileage allowed is 100,000
                      (averageMarketPrice / marketPrices.length) *
                      getAccidentFactor(accident) *
                      /* getFeaturesFactor(features); */

    alert(`Valuation of the car: $${valuation.toFixed(2)}`);
  };

  const getAccidentFactor = (accident) => {
    switch (accident) {
      case 'Significant':
        return 0.5; // Adjust as needed
      case 'Mild':
        return 0.8; // Adjust as needed
      default:
        return 1; // No accident
    }
  };

  /* const getFeaturesFactor = (features) => {
    // You can implement logic to calculate features factor based on the additional features
    return 1; // For simplicity, assuming no additional value from features
  }; */

  return (
    <div className='valuation'>
      <h2>Car Valuation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Year of the car:
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </label><br />
        <label>
          Price bought:
          <input type="number" value={priceBought} onChange={(e) => setPriceBought(e.target.value)} required />
        </label><br />
        <label>
          Mileage bought:
          <input type="number" value={mileageBought} onChange={(e) => setMileageBought(e.target.value)} required />
        </label><br />
        <label>
          Current Mileage:
          <input type="number" value={currentMileage} onChange={(e) => setCurrentMileage(e.target.value)} required />
        </label><br />
        <label>
          Current Market Price (Enter at least 4 prices separated by commas):
          <input type="text" value={marketPrices.join(',')} onChange={(e) => setMarketPrices(e.target.value.split(',').map(price => parseFloat(price)))} required />
        </label><br />
        <label>
          Accident History:
          <select value={accident} onChange={(e) => setAccident(e.target.value)}>
            <option value="">Select</option>
            <option value="Significant">Significant</option>
            <option value="Mild">Mild</option>
            <option value="Accident Free">Accident Free</option>
          </select>
        </label><br />
        <label>
          Features or Additions:
          <input type="text" value={features} onChange={(e) => setFeatures(e.target.value)} />
        </label><br />
        <button type="submit">Calculate Valuation</button>
      </form>
    </div>
  );
};

export default CarValuation;
