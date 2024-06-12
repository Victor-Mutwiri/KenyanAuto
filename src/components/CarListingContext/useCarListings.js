import { useContext } from 'react';
import { CarListingsContext } from './CarListingsContext';

export const useCarListings = () => useContext(CarListingsContext);
