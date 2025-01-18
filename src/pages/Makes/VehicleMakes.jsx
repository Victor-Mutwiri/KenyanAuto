import './VehicleMakes.css'; // Importing the stylesheet

const VehicleMakes = () => {
  const vehicleMakes = [
    { name: 'Toyota', link: '/Toyota', alt: 'Toyota vehicles in Kenya', image: '/Toyota.jpg' },
    { name: 'Nissan', link: '/Nissan', alt: 'Nissan vehicles in Kenya', image: '/Nissan.jpg' },
    { name: 'Mazda', link: '/Mazda', alt: 'Mazda vehicles in Kenya', image: '/Mazda.jpg' },
    { name: 'BMW', link: '/Bmw', alt: 'BMW vehicles in Kenya', image: '/BMW.jpg' },
    { name: 'Honda', link: '/Honda', alt: 'Honda vehicles in Kenya', image: '/Honda.jpg' },
    { name: 'Mercedes', link: '/Mercedes', alt: 'Mercedes vehicles in Kenya', image: '/Mercedes.jpg' },
    { name: 'Subaru', link: '/Subaru', alt: 'Subaru vehicles in Kenya', image: '/Subaru.jpg' },
    { name: 'Audi', link: '/Audi', alt: 'Audi vehicles in Kenya', image: '/Audi.jpg' },
    /* { name: 'Landrover', link: '/Landrover', alt: 'Landrover vehicles in Kenya', image: '/Landrover.jpg' }, */
    { name: 'Mitsubishi', link: '/Mitsubishi', alt: 'Mitsubishi vehicles in Kenya', image: '/Mitsubishi.jpg' },
    /* { name: 'Ford', link: '/Ford', alt: 'Ford vehicles in Kenya', image: '/Ford.jpg' }, */
    { name: 'Hyundai', link: '/Hyundai', alt: 'Hyundai vehicles in Kenya', image: '/Hyundai.jpg' },
    { name: 'Lexus', link: '/Lexus', alt: 'Lexus vehicles in Kenya', image: '/Lexus.jpg' },
    /* { name: 'Porsche', link: '/Porsche', alt: 'Porsche vehicles in Kenya', image: '/Porsche.jpg' }, */
    { name: 'Peugeot', link: '/Peugeot', alt: 'Peugeot vehicles in Kenya', image: '/Peugeot.jpg' },
    { name: 'Suzuki', link: '/Suzuki', alt: 'Suzuki vehicles in Kenya', image: '/Suzuki.jpg' },
    { name: 'Volswagen', link: '/Volswagen', alt: 'Volswagen vehicles in Kenya', image: '/Volkswagen.jpg' },
    { name: 'Volvo', link: '/Volvo', alt: 'Volvo vehicles in Kenya', image: '/Volvo.jpg' },
    { name: 'Renault', link: '/Renault', alt: 'Renault vehicles in Kenya', image: '/Renault.jpg' },
    /* { name: 'Kia', link: '/Kia', alt: 'Kia vehicles in Kenya', image: '/Kia.jpg' }, */
    /* { name: 'Jeep', link: '/Jeep', alt: 'Jeep vehicles in Kenya', image: '/Jeep.jpg' }, */
    { name: 'Jaguar', link: '/Jaguar', alt: 'Jaguar vehicles in Kenya', image: '/Jaguar.jpg' },
    
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
