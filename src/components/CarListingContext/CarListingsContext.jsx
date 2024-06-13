import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const CarListingsContext = createContext();

export const CarListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [vehicleCache, setVehicleCache] = useState({});

  const fetchVehicleDetails = async (id) => {
    if (vehicleCache[id]) {
      return vehicleCache[id];
    }

    try {
      const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/listings/${id}?populate=*`);
      const data = await response.json();
      setVehicleCache((prevCache) => ({ ...prevCache, [id]: data.data }));
      return data.data;
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
      throw error;
    }
  };

  return (
    <CarListingsContext.Provider value={{
      listings,
      setListings,
      filteredListings,
      setFilteredListings,
      currentPage,
      setCurrentPage,
      totalPages,
      setTotalPages,
      loading,
      setLoading,
      fetchVehicleDetails
    }}>
      {children}
    </CarListingsContext.Provider>
  );
};

CarListingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCarListings = () => useContext(CarListingsContext);
