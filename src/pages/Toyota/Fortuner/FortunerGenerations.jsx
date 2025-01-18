import './FortunerGenerations.css';

const FortunerGenerations = () => {
  return (
    <div className="fortuner-container">
      <header className="fortuner-header">
        <h1>Toyota Fortuner: A Generational Overview</h1>
        <p>
          The Toyota Fortuner is a 7-seater body-on-frame SUV known for its durability and reliability. Since its debut in 2004, the Fortuner has become a popular choice for regions with challenging road conditions, offering exceptional off-road capabilities and comfort.
        </p>
      </header>

      <section className="fortuner-generations">
        <h2 className="generations-title">Explore Fortuner Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img src="https://images.autoboom.co.il/VdFHOkY_NAnHlXdORRpFu0ZOYC6HUYgkJYGAI5aS7nU/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2ODE0LmpwZw.webp" alt="Toyota Fortuner 1st Generation" className="generation-image" />
          <div className="generation-info">
            <h3>1st Generation (2004-2015)</h3>
            <p>
              Built on the Toyota Hilux platform, this generation featured permanent all-wheel drive and offered a variety of petrol and diesel engine options. Click below to learn more about this pioneering model.
            </p>
            <a href="/Toyota/fortuner-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img src="https://images.autoboom.co.il/Kxy9SXmSncF7CGexvCW0xbGnnsnHcGEEM7Oh2UuS74w/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2ODI1LmpwZw.webp" alt="Toyota Fortuner 2nd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>2nd Generation (2015-Present)</h3>
            <p>
              This generation introduced a classic plug-in drive with low range, updated engines, and modernized 6-speed transmissions. A restyled version debuted in 2020. Discover its features below.
            </p>
            <a href="/Toyota/fortuner-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* General Overview */}
        <div className="generation-card">
          <img src="https://example.com/fortuner-overview.jpg" alt="Toyota Fortuner Overview" className="generation-image" />
          <div className="generation-info">
            <h3>General Overview</h3>
            <p>
              Designed for developing countries, the Fortuner combines off-road capability with affordability. Built to accommodate up to seven passengers, it remains a reliable choice for diverse driving conditions.
            </p>
            <a href="/Toyota/fortuner-overview" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FortunerGenerations;
