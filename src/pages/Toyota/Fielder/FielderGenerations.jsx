import './FielderGenerations.css';
import { Helmet } from 'react-helmet-async';

const FielderGenerations = () => {
  return (
    <div className="fielder-container">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Toyota Fielder Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore Toyota Fielder Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/fielder" />
      </Helmet>
      <header className="fielder-header">
        <h1>Toyota Corolla Fielder: Generations and Evolution</h1>
        <p>
          The Toyota Corolla Fielder is a wagon version of the popular Toyota Corolla sedan, introduced in 2000. Known for its emphasis on fuel efficiency, reliability, and value, it offers additional storage and passenger capacity while maintaining the features of its sedan counterpart.
        </p>
      </header>

      <section className="fielder-generations">
        <h2 className="generations-title">Explore Fielder Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img
            src="https://media.graphassets.com/wiqRV30SXKgmOZGVM9e3"
            alt="Toyota Corolla Fielder 1st Generation"
            className="generation-image"
          />
          <div className="generation-info">
            <h3>1st Generation (2000-2006)</h3>
            <p>
              The first generation established the Fielder's reputation for reliability and practicality, with increased storage and passenger capacity. Click below to learn more about this versatile wagon.
            </p>
            <a href="/Toyota/fielder-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img
            src="https://media.graphassets.com/jCLrUycBTTyvnYrCrAuN"
            alt="Toyota Corolla Fielder 2nd Generation"
            className="generation-image"
          />
          <div className="generation-info">
            <h3>2nd Generation (2006-2012)</h3>
            <p>
              Featuring improved components and one-touch storable rear seats, this generation enhanced versatility for families and cargo needs. Discover more below.
            </p>
            <a href="/Toyota/fielder-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 3rd Generation */}
        <div className="generation-card">
          <img
            src="https://media.graphassets.com/rdoon9vXT2i8hu4ziqzy"
            alt="Toyota Corolla Fielder 3rd Generation"
            className="generation-image"
          />
          <div className="generation-info">
            <h3>3rd Generation (2012-Present)</h3>
            <p>
              The latest generation offers a smaller body size with increased interior space, advanced safety features, and hybrid options. Explore the details below.
            </p>
            <a href="/Toyota/fielder-3rd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FielderGenerations;
