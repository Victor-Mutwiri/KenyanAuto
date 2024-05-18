// Model.jsx
import PropTypes from 'prop-types';
import './Model.css';
import carData from '../../data/Generations.json'
import CarData2 from '../../data/Generations2.json'

const Model = ({ selectedReview, onClose }) => {
  if (!selectedReview) {
    return null;
  }

  const { attributes } = selectedReview;
  const { Generation } = attributes;

  const selectedVehicleA = carData.find(car => car.Generation === Generation)
  const selectedVehicleB = CarData2.find(car => car.Generation === Generation)

  // Check if the selected generation is found in either dataset
  const selectedCar = selectedVehicleA || selectedVehicleB;

  if (!selectedCar) {
    // Handle case where selected generation is not found in either dataset
    return <div>Selected car data not found</div>;
  }
  /* const selectedCar = carData.find(car => car.Generation === Generation); */

  const { ExteriorShot, InteriorShot } = selectedCar;

  return (
    <div className="models">
      
      <h2>{attributes.Vehicle} {attributes.Generation} Review</h2>
      <br />
      <div className='selected-review'>
        {ExteriorShot && (
            <img src={ExteriorShot} alt="Exterior Shot" />
        )}
        <br />
        <br />
        {attributes.Overview && <p>{attributes.Overview}</p>}
        <br />
        {InteriorShot && (
            <img src={InteriorShot} alt="Interior Shot" />
        )}
        {attributes.Interior && <h4>Interior</h4>}
        {attributes.Interior && <p className='bg'>{attributes.Interior}</p>}
        {attributes.Performance && <h4>Performance</h4>}
        {attributes.Performance && <p>{attributes.Performance}</p>}
        {attributes.Reliability && <h4>Reliability and Common Issues</h4>}
        {attributes.Reliability && <p className='bg'>{attributes.Reliability}</p>}
        {attributes.Safety && <h4>Safety Features</h4>}
        {attributes.Safety && <p>{attributes.Safety}</p>}
        {attributes.Technology !== null && <h4>Technology</h4>}
        {attributes.Technology !== null && <p className='bg'>{attributes.Technology}</p>}
        {attributes.Value !== null && <h4>Value</h4>}
        {attributes.Value !== null && <p>{attributes.Value}</p>}
        {attributes.Ownership !== null && <h4>Ownership</h4>}
        {attributes.Ownership !== null && <p>{attributes.Ownership}</p>}
        {attributes.Comparison !== null && <h4>Comparison</h4>}
        {attributes.Comparison !== null && <p className='bg'>{attributes.Comparison}</p>}
        {attributes.Recommendation !== null && <h4>Recommendation</h4>}
        {attributes.Recommendation !== null && <p>{attributes.Recommendation}</p>}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

Model.propTypes = {
  selectedReview: PropTypes.shape({
    attributes: PropTypes.shape({
      Generation:PropTypes.string,
      Interior:PropTypes.string,
      Vehicle: PropTypes.string.isRequired,
      Overview: PropTypes.string,
      Performance: PropTypes.string,
      Reliability: PropTypes.string,
      Safety: PropTypes.string,
      Issues:PropTypes.string,
      Technology: PropTypes.string, // New prop type for Technology field
      Value: PropTypes.string, // New prop type for Value field
      Ownership: PropTypes.string, // New prop type for Value field
      Comparison: PropTypes.string, // New prop type for Comparison field
      Recommendation: PropTypes.string, // New prop type for Recommendation field
      /* ExteriorShot: PropTypes.shape({
        data: PropTypes.shape({
          formats: PropTypes.shape({
            small: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
          alternativeText: PropTypes.string,
        }).isRequired,
      }), */
      /* InteriorShot: PropTypes.shape({
        data: PropTypes.shape({
          formats: PropTypes.shape({
            small: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
          alternativeText: PropTypes.string,
        }).isRequired,
      }), */
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Model;
