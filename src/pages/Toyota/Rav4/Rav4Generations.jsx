import './Rav4Generations.css';

const Rav4Generations = () => {
  return (
    <div className="rav4-container">
      
          <meta charSet="utf-8" />
          <title>Explore RAV4 Generations in Kenya | KenyanAuto</title>
          <meta
              name="description"
              content="Explore RAV4 Generations in Kenya" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/rav4" />
      
      <header className="rav4-header">
        <h1>Toyota RAV4: A Journey Through Generations of Innovation</h1>
        <p>
          The Toyota RAV4, a pioneer in the compact SUV market since 1994, has evolved through five distinct generations. Each generation has brought new innovations, designs, and technologies, cementing its position as a global bestseller.
        </p>
      </header>

      <section className="rav4-generations">
        <h2 className="generations-title">Explore RAV4 Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/RAV4/1st%20Gen/1st%20Gen.webp?updatedAt=1746436427861" alt="Toyota RAV4 1st Generation" className="generation-image" />
          <div className="generation-info">
            <h3>1st Generation (1994-2000)</h3>
            <p>
              The first generation RAV4 debuted in 1994, offering compact size, lightweight design, and available 4-wheel drive. It was a trailblazer in the compact SUV segment.
            </p>
            <a href="/Toyota/rav4-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/RAV4/2nd%20Gen/2nd%20Gen.webp?updatedAt=1746436625920" alt="Toyota RAV4 2nd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>2nd Generation (2000-2005)</h3>
            <p>
              Launched in 2000, this generation featured increased size, improved performance, and both 3-door and 5-door configurations. It was designed for enhanced comfort and utility.
            </p>
            <a href="/Toyota/rav4-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 3rd Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/RAV4/3rd%20Gen/Cover.webp?updatedAt=1746437057393" alt="Toyota RAV4 3rd Generation" className="generation-image" />
          <div className="generation-info">
            <h3>3rd Generation (2005-2012)</h3>
            <p>
              Introduced in 2005, this generation offered enhanced safety features, powerful engine options, and increased cabin space, solidifying the RAV4's reputation as a versatile SUV.
            </p>
            <a href="/Toyota/rav4-3rd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 4th Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/RAV4/4th%20Gen/Cover.webp?updatedAt=1746437085240" alt="Toyota RAV4 4th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>4th Generation (2012-2019)</h3>
            <p>
              Released in 2012, this generation brought modern styling, improved fuel efficiency, and advanced technology, making it a popular choice for urban and adventurous drivers alike.
            </p>
            <a href="/Toyota/rav4-4th-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 5th Generation */}
        <div className="generation-card">
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/RAV4/5th%20Gen/Cover.webp?updatedAt=1746437109207" alt="Toyota RAV4 5th Generation" className="generation-image" />
          <div className="generation-info">
            <h3>5th Generation (2018-Present)</h3>
            <p>
              The current generation, introduced in 2018, features cutting-edge technology, bold design, and exceptional performance. It continues to lead in innovation and reliability.
            </p>
            <a href="/Toyota/rav4-5th-gen" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rav4Generations;
