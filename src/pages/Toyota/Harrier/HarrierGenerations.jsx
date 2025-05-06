import './HarrierGenerations.css';

const HarrierGenerations = () => {
  return (
    <div className="harrier-container">
          <meta charSet="utf-8" />
          <title>Explore Toyota Harrier Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore Toyota Harrier Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/harrier" />
      <header className="harrier-header">
        <h1>Toyota Harrier: Generations and Evolution of a Luxury SUV</h1>
        <p>
          The Toyota Harrier, introduced in 1997, is a luxury compact SUV known for its stylish design and reliability. Known as the Lexus RX in export markets, the Harrier has evolved across multiple generations to become a standout in its segment.
        </p>
      </header>

      <section className="harrier-generations">
        <h2 className="generations-title">Explore Harrier Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Harrier/1st%20gen/Cover.webp?updatedAt=1746441807562" alt="Toyota Harrier 1st Generation" className="generation-image" />
          <div className="generation-info">
            <h3>1st Generation (1997-2003)</h3>
            <p>
              The first-generation Harrier laid the foundation for a luxury compact SUV, featuring unique styling and a bird of prey emblem. Click below to learn more.
            </p>
            <a href="/Toyota/harrier-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Harrier/2nd%20gen/Cover.webp?updatedAt=1746441807550" alt="Toyota Harrier 2nd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>2nd Generation (2003-2013)</h3>
            <p>
              Marked by refined features and enhanced technology, the second-generation Harrier continued to impress as a luxury compact SUV. Discover more below.
            </p>
            <a href="/Toyota/harrier-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 3rd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Harrier/3rd%20gen/Cover.webp?updatedAt=1746441807512" alt="Toyota Harrier 3rd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>3rd Generation (2013-2020)</h3>
            <p>
              The third-generation Harrier introduced modern design and expanded its presence in markets like Malaysia and Singapore. Learn more below.
            </p>
            <a href="/Toyota/harrier-3rd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default HarrierGenerations;
