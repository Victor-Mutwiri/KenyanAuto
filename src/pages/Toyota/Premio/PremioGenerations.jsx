import './PremioGenerations.css';
import { Helmet } from 'react-helmet-async';

const PremioGenerations = () => {
  return (
    <div className="premio-container">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Toyota Premio Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore Toyota Premio Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/premio" />
      </Helmet>
      <header className="premio-header">
        <h1>Toyota Premio: Generations and Evolution of a Family Sedan</h1>
        <p>
          The Toyota Premio is a family sedan designed for the Japanese domestic market, known for its balance of comfort, reliability, and performance. Produced from 2001 to 2021, it succeeded the Toyota Crown Premium, offering advanced features and a sporty appearance.
        </p>
      </header>

      <section className="premio-generations">
        <h2 className="generations-title">Explore Premio Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Premio/1st%20gen/Cover.webp?updatedAt=1746441935163" alt="Toyota Premio 1st Generation" className="generation-image" />
          <div className="generation-info">
            <h3>1st Generation (2001-2007)</h3>
            <p>
              The first generation introduced the Premio as a reliable family sedan, featuring multiple engine options and a refined design. Click below to learn more about this generation.
            </p>
            <a href="/Toyota/premio-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Premio/2nd%20gen/Cover.webp?updatedAt=1746441935084" alt="Toyota Premio 2nd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>2nd Generation (2007-2021)</h3>
            <p>
              Building on its predecessor, the second generation offered enhanced styling, technology, and multiple restyling phases to keep it competitive in the market. Discover more below.
            </p>
            <a href="/Toyota/premio-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default PremioGenerations;
