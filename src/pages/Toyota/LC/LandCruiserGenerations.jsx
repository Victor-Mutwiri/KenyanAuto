import './LandCruiserGenerations.css';
import { Helmet } from 'react-helmet-async';

const LandCruiserGenerations = () => {
  return (
    <div className="lc-container">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Toyota Land Cruiser Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore Toyota Land Cruiser Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/land-cruiser" />
      </Helmet>
      <header className="lc-header">
        <h1>Toyota Land Cruiser: Generational Overview</h1>
        <p>
          The Toyota Land Cruiser is a full-size all-wheel-drive SUV renowned for its durability, off-road capabilities, and versatility. Since its inception in 1951, it has evolved through numerous generations, establishing itself as a symbol of reliability and adventure.
        </p>
      </header>

      <section className="lc-generations">
        <h2 className="generations-title">Explore Land Cruiser Generations</h2>

        {/* 9th Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Land%20Cruiser/9th%20gen/Cover.webp?updatedAt=1746441889200" alt="Toyota Land Cruiser 9th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>9th Generation (1989-1997)</h3>
            <p>
              The 9th generation laid the foundation for modern Land Cruisers, offering robust design and unmatched off-road prowess. Click below to learn more.
            </p>
            <a href="/Toyota/land-cruiser-9th-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 10th Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Land%20Cruiser/10th%20gen/Cover.webp?updatedAt=1746441888898" alt="Toyota Land Cruiser 10th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>10th Generation (1998-2007)</h3>
            <p>
              Marked by advanced technology and refined comfort, the 10th generation set new standards for full-size SUVs. Discover its features below.
            </p>
            <a href="/Toyota/land-cruiser-10th-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 11th Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Land%20Cruiser/11th%20gen/Cover.webp?updatedAt=1746441889640" alt="Toyota Land Cruiser 11th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>11th Generation (2007-2024)</h3>
            <p>
              With multiple updates, this generation showcased enhanced capabilities, comfort, and styling. Learn more about its evolution below.
            </p>
            <a href="/Toyota/land-cruiser-11th-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 12th Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Land%20Cruiser/12th%20gen/Cover.webp?updatedAt=1746441888879" alt="Toyota Land Cruiser 12th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>12th Generation (2021-Present)</h3>
            <p>
              The latest generation combines cutting-edge technology with the Land Cruiser's legendary durability. Explore its innovations below.
            </p>
            <a href="/Toyota/land-cruiser-12th-gen" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandCruiserGenerations;
