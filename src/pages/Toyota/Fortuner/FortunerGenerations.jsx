import './FortunerGenerations.css';

const FortunerGenerations = () => {
  return (
    <div className="fortuner-container">
          <meta charSet="utf-8" />
          <title>Explore Toyota Fortuner Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore Toyota Fortuner Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/fortuner" />
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
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Fortuner/1st%20gen/Cover.webp?updatedAt=1746441764370" alt="Toyota Fortuner 1st Generation" className="generation-image" />
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
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Fortuner/2nd%20gen/Cover.webp?updatedAt=1746441764937" alt="Toyota Fortuner 2nd Generation" className="generation-image" />
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
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Fortuner/General/Cover.jpg?updatedAt=1746441764681" alt="Toyota Fortuner Overview" className="generation-image" />
          <div className="generation-info">
            <h3>General Overview</h3>
            <p>
              Designed for developing countries, the Fortuner combines off-road capability with affordability. Built to accommodate up to seven passengers, it remains a reliable choice for diverse driving conditions.
            </p>
            {/* <a href="/Toyota/fortuner-overview" className="learn-more-link">Read More</a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FortunerGenerations;
