import './HiAceGenerations.css';

const HiAceGenerations = () => {
  return (
    <div className="HiAce-container">
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
          <img src="https://images.autoboom.co.il/gohA0tyKEKlQtvkEY4izmNE-LxuCu-zwT7Goh7KZsR4/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2OTc4LmpwZw.webp" alt="Toyota HiAce 1st Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/i5L0p_u87ymlWnlm23ORMe6HY5iIoiBMsFe5hMc8L7Q/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2OTgxLmpwZw.webp" alt="Toyota HiAce 2nd Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/GZyIsQtdwb8tcTpoZIUbZBpb8y93O2vLQsEr4XK5t_I/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2OTg4LmpwZw.webp" alt="Toyota HiAce 3rd Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/0JYa9CTEEh23okji8QwByMEGeQ29Dq5I1i1vtZqmC4A/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTcvMTE3MDA0LmpwZw.webp" alt="Toyota HiAce 4th Generation" className="generation-image" />
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
