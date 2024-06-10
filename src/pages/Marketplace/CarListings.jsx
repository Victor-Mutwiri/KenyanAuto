// CarListings.jsx
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CarListings.css';
import VehicleFilter from './CarFilter';
import SkeletonCard from '../../components/Skeleton/SkeletonCard';

const CarListings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const listingsPerPage = 20;
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/listings?populate=*&pagination[page]=${page}&pagination[pageSize]=${listingsPerPage}`);
        const data = await response.json();
        setListings(data.data);
        setFilteredListings(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="listings-container">
      <section className="filters">
        <VehicleFilter listings={listings} setFilteredListings={setFilteredListings} />
      </section>
      <section>
        <p><b>Showing results for {filteredListings.length} listing{filteredListings.length !== 1 ? 's' : ''}</b></p>
        <div className="cards-container">
          {loading ? (
            // Show SkeletonCards while loading
            Array.from({ length: listingsPerPage }, (_, index) => <SkeletonCard key={index} />)
          ) : (
            filteredListings.map(listing => (
              <CarCard key={listing.id} listing={listing} />
            ))
          )}
        </div>
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </section>
    </div>
  );
};

const CarCard = ({ listing }) => {
  const { attributes } = listing;

  if (!attributes) {
    return null; // or show some placeholder
  }

  const { Year, Price, Gallery, model, fuel, gearbox } = attributes;
  const imageUrl = Gallery?.data?.[0]?.attributes?.formats?.thumbnail?.url;

  return (
    <Link to={`/car-details/${listing.id}`} className="car-card">
      {imageUrl && <img src={imageUrl} alt="Car" />}
      <div className="car-info">
        {Year && model && model.data && <p>{Year} {model.data.attributes.Model}</p>}
        {Price && <p>Price: <span>Ksh {Number(Price).toLocaleString()}</span></p>}
        {fuel && fuel.data && <p>Fuel Type: <span>{fuel.data.attributes.FuelType}</span></p>}
        {gearbox && gearbox.data && <p>Gearbox: <span>{gearbox.data.attributes.Transmission}</span></p>}
      </div>
    </Link>
  );
};

CarCard.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      Year: PropTypes.string,
      Price: PropTypes.string,
      Gallery: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            attributes: PropTypes.shape({
              formats: PropTypes.shape({
                thumbnail: PropTypes.shape({
                  url: PropTypes.string,
                }),
              }),
            }),
          })
        ),
      }),
      model: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            Model: PropTypes.string,
          }),
        }),
      }),
      fuel: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            FuelType: PropTypes.string,
          }),
        }),
      }),
      gearbox: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            Transmission: PropTypes.string,
          }),
        }),
      }),
    }),
  }).isRequired,
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map(page => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)} 
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CarListings;
