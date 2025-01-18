import './HarrierGenerations.css';

const HarrierGenerations = () => {
  return (
    <div className="harrier-container">
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
          <img src="https://images.autoboom.co.il/4kZ5pLdDvFu6OcrHaNrJ_IP2VZaDcW09EZrFI9qMx8E/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2OTE1LmpwZw.webp" alt="Toyota Harrier 1st Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/SO6O7X7wUbqYblILXsbM6cg5DFjj_IYsuxe6iNW0A5I/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2OTQwLmpwZw.webp" alt="Toyota Harrier 2nd Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/28nnO04Wixw526rX7V_C7h7LmxmNMF0lNH-UK2tHaE0/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xMTYvMTE2OTUwLmpwZw.webp" alt="Toyota Harrier 3rd Generation" className="generation-image" />
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
