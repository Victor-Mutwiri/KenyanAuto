import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CarListings.css'

const CarListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/listings?populate=*')
      .then(response => response.json())
      .then(data => {
        setListings(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="listings-container">
      {listings.map(listing => (
        <CarCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

const CarCard = ({ listing }) => {
  const {
    Year,
    Price,
    Gallery,
    model,
    fuel,
    gearbox
  } = listing.attributes;

  const imageUrl = Gallery.data[0].attributes.formats.thumbnail.url;

  return (
    <div>
      <section>
        <div className='Filters'></div>
      </section>
      <section>
        <a href={`/car-details/${listing.id}`} className="car-card">
          <img src={`http://localhost:1337${imageUrl}`} alt="Car" />
          <div className="car-info">
            <div>

            </div>
            {/* <p>{model.data.attributes.Model}</p> */}
            <p> {Year} {model.data.attributes.Model}</p>
            <p>Price: {Price}</p>
            <p>Fuel Type: {fuel.data.attributes.FuelType}</p>
            <p>Gearbox: {gearbox.data.attributes.Transmission}</p>
          </div>
        </a>
      </section>
    </div>
  );
};

CarCard.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      Year: PropTypes.string.isRequired,
      Price: PropTypes.string.isRequired,
      Gallery: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            attributes: PropTypes.shape({
              formats: PropTypes.shape({
                thumbnail: PropTypes.shape({
                  url: PropTypes.string.isRequired,
                }).isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
      model: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            Model: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      fuel: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            FuelType: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      gearbox: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            Transmission: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CarListings;
