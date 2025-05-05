import './HiAceGenerations.css';
import { Helmet } from 'react-helmet-async';

const HiAceGenerations = () => {
  return (
    <div className="HiAce-container">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Toyota HiAce Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore Toyota HiAce Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/HiAce" />
      </Helmet>
      <header className="HiAce-header">
        <h1>Toyota HiAce: Generations and Evolution of a Versatile Van</h1>
        <p>
          The Toyota HiAce is a versatile and reliable family of vans and minibuses, known for its adaptability and extensive global reach. Since its debut in 1982, the HiAce has evolved across multiple generations, catering to diverse needs in over 150 countries.
        </p>
      </header>

      <section className="HiAce-generations">
        <h2 className="generations-title">Explore HiAce Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/HiAce/1st%20gen/Cover.webp?updatedAt=1746441836673" alt="Toyota HiAce 1st Generation" className="generation-image" />
          <div className="generation-info">
            <h3>1st Generation (1982-1989)</h3>
            <p>
              The inaugural generation established the HiAce as a dependable minivan with exceptional versatility. Click below to learn more about this classic model.
            </p>
            <a href="/Toyota/hiace-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/HiAce/2nd%20gen/Cover.webp?updatedAt=1746441836751" alt="Toyota HiAce 2nd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>2nd Generation (1989-2004)</h3>
            <p>
              Offering both minivan and van options, this generation introduced improved designs and functionality. Discover more details below.
            </p>
            <a href="/Toyota/hiace-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 3rd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/HiAce/3rd%20gen/Cover.webp?updatedAt=1746441837323" alt="Toyota HiAce 3rd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>3rd Generation (2004-2018)</h3>
            <p>
              Known for its longevity, this generation featured updated designs and multiple configurations for diverse users. Learn more below.
            </p>
            <a href="/Toyota/hiace-3rd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 4th Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/HiAce/4th%20gen/Cover.webp?updatedAt=1746441837320" alt="Toyota HiAce 4th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>4th Generation (2019-Present)</h3>
            <p>
              Marked by the innovative half-hood layout, this generation offers modern engines and multiple seating configurations. Explore its features below.
            </p>
            <a href="/Toyota/hiace-4th-gen" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiAceGenerations;
