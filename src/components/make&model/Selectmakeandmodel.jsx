import PropTypes from 'prop-types';
import './Selectmakeandmodel.css'

const Selectmakeandmodel = ({ makes, models, selectedMake, selectedModel, onMakeChange, onModelChange, onSearch }) => {
  return (
    <div className='search-section'>
      <h3>Discover</h3>
      <div className='search-field'>
        <div className="row">
          <div className='make'>
            <h4>Make</h4>
            <select name='make' value={selectedMake} onChange={onMakeChange}>
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
            <select name='model' value={selectedModel} onChange={onModelChange} disabled={!selectedMake}>
              <option value=''>Select Model</option>
              {models.map((model) => (
                <option key={model.id} value={model.attributes.Model}>
                  {model.attributes.Model}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={onSearch} disabled={!selectedModel} className='btnSearch'>
          <i className='bx bx-search-alt'> Search</i>
        </button>
      </div>
    </div>
  )
}


// Prop types validation
Selectmakeandmodel.propTypes = {
    makes: PropTypes.array.isRequired,
    models: PropTypes.array.isRequired,
    selectedMake: PropTypes.string.isRequired,
    selectedModel: PropTypes.string.isRequired,
    onMakeChange: PropTypes.func.isRequired,
    onModelChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
  };


export default Selectmakeandmodel;