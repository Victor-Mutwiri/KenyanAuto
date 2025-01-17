import './VehicleMakes.css'; // Importing the stylesheet

const VehicleMakes = () => {
  const vehicleMakes = [
    { name: 'Toyota', link: '/Toyota', alt: 'Toyota vehicles in Kenya', image: '/Toyota.jpg' },
    { name: 'Nissan', link: '/nissan', alt: 'Nissan vehicles in Kenya', image: '/Nissan.jpg' },
    { name: 'Mazda', link: '/mazda', alt: 'Mazda vehicles in Kenya', image: '/Mazda.jpg' },
    { name: 'BMW', link: '/bmw', alt: 'BMW vehicles in Kenya', image: '/BMW.jpg' },
    { name: 'Honda', link: '/honda', alt: 'Honda vehicles in Kenya', image: '/Honda.jpg' },
    { name: 'Mercedes-Benz', link: '/mercedes-benz', alt: 'Mercedes-Benz vehicles in Kenya', image: '/Mercedes.jpg' },
    { name: 'Subaru', link: '/subaru', alt: 'Subaru vehicles in Kenya', image: '/Subaru.jpg' },
    { name: 'Audi', link: '/audi', alt: 'Audi vehicles in Kenya', image: '/Audi.jpg' },
    { name: 'Landrover', link: '/landrover', alt: 'Landrover vehicles in Kenya', image: '/Landrover.jpg' },
    { name: 'Mitsubishi', link: '/mitsubishi', alt: 'Mitsubishi vehicles in Kenya', image: '/Mitsubishi.jpg' },
    { name: 'Ford', link: '/ford', alt: 'Ford vehicles in Kenya', image: '/Ford.jpg' },
    { name: 'Hyundai', link: '/hyundai', alt: 'Hyundai vehicles in Kenya', image: '/Hyundai.jpg' },
    { name: 'Lexus', link: '/lexus', alt: 'Lexus vehicles in Kenya', image: '/Lexus.jpg' },
    { name: 'Porsche', link: '/porsche', alt: 'Porsche vehicles in Kenya', image: '/Porsche.jpg' },
    { name: 'Peugeot', link: '/peugeot', alt: 'Peugeot vehicles in Kenya', image: '/Peugeot.jpg' },
    { name: 'Suzuki', link: '/suzuki', alt: 'Suzuki vehicles in Kenya', image: '/Suzuki.jpg' },
    { name: 'Volswagen', link: '/volswagen', alt: 'Volswagen vehicles in Kenya', image: '/Volkswagen.jpg' },
    { name: 'Volvo', link: '/volvo', alt: 'Volvo vehicles in Kenya', image: '/Volvo.jpg' },
    { name: 'Renault', link: '/renault', alt: 'Renault vehicles in Kenya', image: '/Renault.jpg' },
    { name: 'Kia', link: '/kia', alt: 'Kia vehicles in Kenya', image: '/Kia.jpg' },
    { name: 'Jeep', link: '/jeep', alt: 'Jeep vehicles in Kenya', image: '/Jeep.jpg' },
    { name: 'Jaguar', link: '/jaguar', alt: 'Jaguar vehicles in Kenya', image: '/Jaguar.jpg' },
    
  ];

  return (
    <section className="vehicle-makes">
      <h1>Explore Vehicle Makes in Kenya</h1>
      <p>
        Discover a wide range of vehicle makes, from reliable brands like Toyota, Mazda, and Honda to luxury options like BMW and Mercedes-Benz. Click on a make to learn more about their models, features, and pricing in Kenya.
      </p>
      <div className="makes-grid">
        {vehicleMakes.map((make, index) => (
          <article key={index} className="make-card">
            <a href={make.link} aria-label={`View ${make.name} vehicles`}>
              <figure>
                <img
                  src={make.image}
                  alt={make.alt}
                  className="make-image"
                />
                <figcaption>{make.name}</figcaption>
              </figure>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VehicleMakes;
