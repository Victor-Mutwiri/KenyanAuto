import './VitzGenerations.css';
import { Helmet } from 'react-helmet-async';

const VitzGenerations = () => {
  return (
    <div className="vitz-container">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Toyota Vitz Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore Toyota Vitz Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/vitz" />
      </Helmet>
      <header className="vitz-header">
        <h1>Toyota Vitz: A Generational Overview</h1>
        <p>
          The Toyota Vitz, also known as the Toyota Yaris in Europe, is a subcompact hatchback celebrated for its practicality, fuel efficiency, and reliability. Since its debut in 1999, the Vitz has been a popular choice for urban drivers, evolving across multiple generations with advanced features and a sleek design.
        </p>
      </header>

      <section className="vitz-generations">
        <h2 className="generations-title">Explore Vitz Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Vitz/1st%20gen/Cover.webp?updatedAt=1746441958812" alt="Toyota Vitz 1st Generation" className="generation-image" />
          <div className="generation-info">
            <h3>1st Generation (1999-2005)</h3>
            <p>
              The foundation of the Vitz legacy, offering compact design and urban-friendly features. Click below to learn more about this groundbreaking model.
            </p>
            <a href="/Toyota/vitz-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Vitz/2nd%20gen/Cover.webp?updatedAt=1746441958550" alt="Toyota Vitz 2nd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>2nd Generation (2005-2010)</h3>
            <p>
              Improved styling and technology made this generation a standout in the subcompact market. Discover its advancements below.
            </p>
            <a href="/Toyota/vitz-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 3rd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Vitz/3rd%20gen/Cover.webp?updatedAt=1746441958943" alt="Toyota Vitz 3rd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>3rd Generation (2010-2014)</h3>
            <p>
              A more refined design and updated features appealed to a broader audience. Learn more below.
            </p>
            <a href="/Toyota/vitz-3rd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 3rd Generation Restyling */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Vitz/3rd%20gen%20restyling/Cover.webp?updatedAt=1746441959710" alt="Toyota Vitz 3rd Generation Restyling" className="generation-image" />
          <div className="generation-info">
            <h3>3rd Generation Restyling (2014-2020)</h3>
            <p>
              A fresh look for the third generation with enhanced features and design updates. Dive deeper below.
            </p>
            <a href="/Toyota/vitz-3rd-restyling" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitzGenerations;
