import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CarListingsContext = createContext();

export const CarListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

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
      setLoading
    }}>
      {children}
    </CarListingsContext.Provider>
  );
};

CarListingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
