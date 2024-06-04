import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CarListings.css';
import VehicleFilter from './CarFilter'; // Import the VehicleFilter component

const CarListings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/listings?populate=*');
        const data = await response.json();
        setListings(data.data);
        setFilteredListings(data.data); // Initialize filteredListings with the full list
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="listings-container">
      <section>
        <div className="Filters">
          <VehicleFilter listings={listings} setFilteredListings={setFilteredListings} /> {/* Pass listings and setFilteredListings */}
        </div>
      </section>
      <section>
        {filteredListings.map(listing => (
          <CarCard key={listing.id} listing={listing} />
        ))}
      </section>
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
    <a href={`/car-details/${listing.id}`} className="car-card">
      <img src={`http://localhost:1337${imageUrl}`} alt="Car" />
      <div className="car-info">
        <p>{Year} {model.data.attributes.Model}</p>
        <p>Price: {Price}</p>
        <p>Fuel Type: {fuel.data.attributes.FuelType}</p>
        <p>Gearbox: {gearbox.data.attributes.Transmission}</p>
      </div>
    </a>
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
