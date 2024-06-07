import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './VehicleDetails.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/listings/${id}?populate=*`);
        const data = await response.json();
        setVehicle(data.data);
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      }
    };

    fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return <p>Loading...</p>;
  }

  const { attributes } = vehicle;
  const { Year, Price, Contact, Description, Gallery, model, fuel, gearbox, seller, condition, location } = attributes;

  const constructImageUrl = (url) => {
    // If the URL is already complete (starts with http or https), return it as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    // Otherwise, prepend the base URL
    return `${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_IMAGE_URL : import.meta.env.VITE_PROD_API_IMAGE_URL}${url}`;
  };

  // Transform gallery data to match react-image-gallery format
  const images = Gallery.data.map((image) => {
    const originalUrl = constructImageUrl(image.attributes.formats.large.url);
    const thumbnailUrl = constructImageUrl(image.attributes.formats.thumbnail.url);
    console.log('Original URL:', originalUrl);
    console.log('Thumbnail URL:', thumbnailUrl);
    return {
      original: originalUrl,
      thumbnail: thumbnailUrl,
    };
  });

  return (
    <div className="vehicle-details">
      <div className="image-gallery">
        <ImageGallery items={images} 
            showPlayButton={false}
            /* lazyLoad = {true} */
        />
      </div>
      <div className="vehicle-info">
        <h1>{Year} {model.data.attributes.Model}</h1>
        <p>Price: {Price}</p>
        <p>Contact: {Contact}</p>
        <p>Fuel Type: {fuel.data.attributes.FuelType}</p>
        <p>Gearbox: {gearbox.data.attributes.Transmission}</p>
        <p>Seller: {seller.data.attributes.Dealers}</p>
        <p>Condition: {condition.data.attributes.Condition}</p>
        <p>Location: {location.data.attributes.Location}</p>
        <p>Description: {Description}</p>
      </div>
    </div>
  );
};

export default VehicleDetails;
