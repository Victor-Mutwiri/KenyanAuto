import { Helmet } from 'react-helmet-async'; // Importing Helmet for managing document head
import './VehicleMakes.css'; // Importing the stylesheet

const VehicleMakes = () => {
  const vehicleMakes = [
    { name: 'Toyota', link: '/Toyota', alt: 'Toyota vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Toyota.jpg?updatedAt=1746443861771' },
    { name: 'Nissan', link: '/Nissan', alt: 'Nissan vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Nissan.jpg?updatedAt=1746443861920' },
    { name: 'Mazda', link: '/Mazda', alt: 'Mazda vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Mazda.jpg?updatedAt=1746443861302' },
    { name: 'BMW', link: '/Bmw', alt: 'BMW vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/BMW.jpg?updatedAt=1746443856117' },
    { name: 'Honda', link: '/Honda', alt: 'Honda vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Honda.jpg?updatedAt=1746443856410' },
    { name: 'Mercedes', link: '/Mercedes', alt: 'Mercedes vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Mercedes.jpg?updatedAt=1746443861014' },
    { name: 'Subaru', link: '/Subaru', alt: 'Subaru vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Subaru.jpg?updatedAt=1746443861934' },
    { name: 'Audi', link: '/Audi', alt: 'Audi vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Audi.jpg?updatedAt=1746443855649' },
    /* { name: 'Landrover', link: '/Landrover', alt: 'Landrover vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/LandRover.jpg?updatedAt=1746443856290' }, */
    { name: 'Mitsubishi', link: '/Mitsubishi', alt: 'Mitsubishi vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Mitsubishi.jpg?updatedAt=1746443861598' },
    /* { name: 'Ford', link: '/Ford', alt: 'Ford vehicles in Kenya', image: '' }, */
    { name: 'Hyundai', link: '/Hyundai', alt: 'Hyundai vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Hyundai.jpg?updatedAt=1746443856423' },
    { name: 'Lexus', link: '/Lexus', alt: 'Lexus vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Lexus.jpg?updatedAt=1746443855607' },
    /* { name: 'Porsche', link: '/Porsche', alt: 'Porsche vehicles in Kenya', image: '/Porsche.jpg' }, */
    { name: 'Peugeot', link: '/Peugeot', alt: 'Peugeot vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Peugeot.jpg?updatedAt=1746443861520' },
    { name: 'Suzuki', link: '/Suzuki', alt: 'Suzuki vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Suzuki.jpg?updatedAt=1746443861757' },
    { name: 'Volswagen', link: '/Volswagen', alt: 'Volswagen vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Volkswagen.jpg?updatedAt=1746443861939' },
    { name: 'Volvo', link: '/Volvo', alt: 'Volvo vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Volvo.jpg?updatedAt=1746443866002' },
    { name: 'Renault', link: '/Renault', alt: 'Renault vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Renault.jpg?updatedAt=1746443861930' },
    { name: 'Isuzu', link: '/Isuzu', alt: 'Isuzu vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Isuzu.jpg?updatedAt=1746443856419' },
    /* { name: 'Kia', link: '/Kia', alt: 'Kia vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/KIA.jpg?updatedAt=1746443856469' }, */
    /* { name: 'Jeep', link: '/Jeep', alt: 'Jeep vehicles in Kenya', image: '' }, */
    { name: 'Jaguar', link: '/Jaguar', alt: 'Jaguar vehicles in Kenya', image: 'https://ik.imagekit.io/janjez/KenyanAuto/Logos/Jaguar.jpg?updatedAt=1746443856285' },
    
  ];

  return (
    <section className="vehicle-makes">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Popular Vehicle Makes in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="popular vehicle makes in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Makes" />
      </Helmet>
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
