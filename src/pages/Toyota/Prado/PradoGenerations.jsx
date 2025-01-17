import './PradoGenerations.css';

const PradoGenerations = () => {
  return (
    <div className="prado-container">
      <header className="prado-header">
        <h1>Toyota Land Cruiser Prado: A Generational Overview</h1>
        <p>
          The Toyota Land Cruiser Prado is a mid-size SUV celebrated for its robust design, off-road capabilities, and reliability. Since its debut in 1987, the Prado has evolved across multiple generations, offering advanced features and exceptional versatility.
        </p>
      </header>

      <section className="prado-generations">
        <h2 className="generations-title">Explore Prado Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img src="https://images.autoboom.co.il/LFp2V3NoOs_2keOSlCNAOPyiHt5AkvKDiL6M2jgGjfo/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8wMzgvMzgwMzcuanBn.webp" alt="Toyota Land Cruiser Prado 1st Generation" className="generation-image" />
          <div className="generation-info">
            <h3>1st Generation (1987-1996)</h3>
            <p>
              The foundation of the Prado legacy, offering durability and off-road prowess. Click below to learn more about this groundbreaking model.
            </p>
            <a href="/Toyota/prado-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img src="https://images.autoboom.co.il/UXcHtvFJDD3bBV5I8PlWuET7tdbhllC5TWZVhkcm7tk/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8wMzgvMzgwNzQuanBn.webp" alt="Toyota Land Cruiser Prado 2nd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>2nd Generation (1996-2002)</h3>
            <p>
              Enhanced with refined styling and technology, this generation set new benchmarks. Discover its advancements below.
            </p>
            <a href="/Toyota/prado-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 3rd Generation */}
        <div className="generation-card">
          <img src="https://images.autoboom.co.il/niXC7dgZsrIrSNZ_zXwQQ3913ck-9ewQQkYbYivz7Cc/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8wMDMvMzE5NS5qcGc.webp" alt="Toyota Land Cruiser Prado 3rd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>3rd Generation (2002-2009)</h3>
            <p>
              Featuring modern design and diverse engine options, this generation appealed to a wide range of users. Learn more below.
            </p>
            <a href="/Toyota/prado-third-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 4th Generation */}
        <div className="generation-card">
          <img src="https://images.autoboom.co.il/tKkyF1qG3MaiWQVPEEWKPYpy-_N15HQ_4llOxWuI2dQ/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8wMzgvMzgyMTQuanBn.webp" alt="Toyota Land Cruiser Prado 4th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>4th Generation (2009-2024)</h3>
            <p>
              This generation saw significant updates in comfort and capability, setting the standard for modern SUVs. Dive deeper below.
            </p>
            <a href="/Toyota/prado-fourth-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 5th Generation */}
        <div className="generation-card">
          <img src="https://images.autoboom.co.il/vYkmEEiOlSrOpXjbpLSDCBx25Ge59gWLrkuBehr6-78/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC80OTIvNDkyMTkzLmpwZw.webp" alt="Toyota Land Cruiser Prado 5th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>5th Generation (2024-Present)</h3>
            <p>
              The latest evolution combines cutting-edge technology with the Prado's iconic reliability. Explore the details below.
            </p>
            <a href="/Toyota/prado-fifth-gen" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PradoGenerations;
