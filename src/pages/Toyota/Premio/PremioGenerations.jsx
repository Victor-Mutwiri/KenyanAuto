import './PremioGenerations.css';

const PremioGenerations = () => {
  return (
    <div className="premio-container">
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
          <img src="https://images.autoboom.co.il/MbpwWr_aANQEgLfVAazn77RTj1CffjniBZ8n79gEcQI/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTcvMTE3Mjc2LmpwZw.webp" alt="Toyota Premio 1st Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/1j0j_VABTWDpmt69n3srbaH3SrWKzpczF_olm_51os0/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTcvMTE3MzA0LmpwZw.webp" alt="Toyota Premio 2nd Generation" className="generation-image" />
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
