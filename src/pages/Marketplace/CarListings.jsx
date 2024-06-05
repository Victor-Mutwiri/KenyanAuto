import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CarListings.css';
import VehicleFilter from './CarFilter';

const CarListings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/listings?populate=*`);
        const data = await response.json();
        setListings(data.data);
        setFilteredListings(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="listings-container">
      <section className="filters">
        <VehicleFilter listings={listings} setFilteredListings={setFilteredListings} />
      </section>
      <section className="cards-container">
        <p>Showing results for {filteredListings.length} listing{filteredListings.length !== 1 ? 's' : ''}</p>
        {filteredListings.map(listing => (
          <CarCard key={listing.id} listing={listing}/>
        ))}
      </section>
    </div>
  );
};

const CarCard = ({ listing }) => {
  const { Year, Price, Gallery, model, fuel, gearbox } = listing.attributes;
  const imageUrl = Gallery.data[0].attributes.formats.thumbnail.url;

  const fullImageUrl = `${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_IMAGE_URL : import.meta.env.VITE_PROD_API_IMAGE_URL}${imageUrl}`;

  console.log('Image URL:', fullImageUrl); // Log the URL for debugging

  return (
    <Link to={`/car-details/${listing.id}`} className="car-card">
      {/* <img src={`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_IMAGE_URL : import.meta.env.VITE_PROD_API_IMAGE_URL}${imageUrl}`} alt="Car" /> */}
      <img src={fullImageUrl} alt="Car" />
      <div className="car-info">
        <p>{Year} {model.data.attributes.Model}</p>
        <p>Price: <span>{Price}</span></p>
        <p>Fuel Type: <span>{fuel.data.attributes.FuelType}</span></p>
        <p>Gearbox: <span>{gearbox.data.attributes.Transmission}</span></p>
      </div>
    </Link>
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
