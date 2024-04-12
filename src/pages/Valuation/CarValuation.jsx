import { useState } from 'react';
import './CarValuation.css'

const CarValuation = () => {
  const [year, setYear] = useState('');
  const [priceBought, setPriceBought] = useState('');
  const [mileageBought, setMileageBought] = useState('');
  const [currentMileage, setCurrentMileage] = useState('');
  const [marketPrice1, setMarketPrice1] = useState('');
  const [marketPrice2, setMarketPrice2] = useState('');
  const [marketPrice3, setMarketPrice3] = useState('');
  const [accident, setAccident] = useState('');
  const [valuation, setValuation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all input values are valid numbers
    if (!year || !priceBought || !mileageBought || !currentMileage || !marketPrice1 || !marketPrice2 || !marketPrice3) {
      alert('Please fill in all fields');
      return;
    }

    // Convert input values to numbers
    const yearNum = parseInt(year);
    const priceBoughtNum = parseFloat(priceBought.replace(/,/g, ''));
    const mileageBoughtNum = parseFloat(mileageBought.replace(/,/g, ''));
    const currentMileageNum = parseFloat(currentMileage.replace(/,/g, ''));
    const marketPrice1Num = parseFloat(marketPrice1.replace(/,/g, ''));
    const marketPrice2Num = parseFloat(marketPrice2.replace(/,/g, ''));
    const marketPrice3Num = parseFloat(marketPrice3.replace(/,/g, ''));

    // Validate market prices
    if (isNaN(marketPrice1Num) || isNaN(marketPrice2Num) || isNaN(marketPrice3Num)) {
      alert('Please enter valid market prices');
      return;
    }

    // Calculate average market price
    const averageMarketPrice = (marketPrice1Num + marketPrice2Num + marketPrice3Num) / 3;

    // Calculate depreciation rate
    const depreciationRate = calculateDepreciationRate(yearNum);

    // Calculate valuation
    const depreciationMileageFactor = 1 - ((currentMileageNum - mileageBoughtNum) / 1000000); // Assuming total mileage allowed is 100,000
    const valuation = (priceBoughtNum / (1 + depreciationRate)) *
                      depreciationMileageFactor *
                      (averageMarketPrice / 3) *
                      getAccidentFactor(accident);

    setValuation(valuation.toFixed(2));
  };

  const calculateDepreciationRate = (year) => {
    // Example: 15% depreciation rate per year for cars older than 5 years
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age <= 5) {
      return age * 0.03; // Example: 3% depreciation rate per year for cars less than or equal to 5 years old
    } else {
      return 0.15; // Example: 15% depreciation rate per year for cars older than 5 years
    }
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
          <input type="text" value={priceBought} onChange={(e) => setPriceBought(e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','))} required />
        </label><br />
        <label>
          Mileage bought:
          <input type="text" value={mileageBought} onChange={(e) => setMileageBought(e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','))} required />
        </label><br />
        <label>
          Current Mileage:
          <input type="text" value={currentMileage} onChange={(e) => setCurrentMileage(e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','))} required />
        </label><br />
        <label>
          Current Market Price 1:
          <input type="text" value={marketPrice1} onChange={(e) => setMarketPrice1(e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','))} required />
        </label><br />
        <label>
          Current Market Price 2:
          <input type="text" value={marketPrice2} onChange={(e) => setMarketPrice2(e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','))} required />
        </label><br />
        <label>
          Current Market Price 3:
          <input type="text" value={marketPrice3} onChange={(e) => setMarketPrice3(e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','))} required />
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
        <button type="submit">Calculate Valuation</button>
      </form>
      {valuation !== null && <p>Valuation of the car: ${valuation}</p>}
    </div>
  );
};

export default CarValuation;
