import './VitzGenerations.css';

const VitzGenerations = () => {
  return (
    <div className="vitz-container">
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
          <img src="https://images.autoboom.co.il/xrZLMNO6IcikUEJVN9Xz4Cg4uVv6aREmdFsLvkbj7xk/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xNjUvMTY1NTM2LmpwZw.webp" alt="Toyota Vitz 1st Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/vfRKTVBAY1pk791UocAru0Dvh9114hFdauJ5IgN-mQw/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xNjUvMTY1NTYwLmpwZw.webp" alt="Toyota Vitz 2nd Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/nbmsot1waBuKQ-jQqL3cLIHMXoaxADWVC6z-LymZ2yA/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xNjUvMTY1NTY3LmpwZw.webp" alt="Toyota Vitz 3rd Generation" className="generation-image" />
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
          <img src="https://images.autoboom.co.il/IkojMdacbvbphio1lX7E_1O7meN34tYU1MzS_cYUscI/fit/1200/1200/sm/0/Z3M6Ly9hdXRvYm9vbS1pbWFnZXMvMDAwLzAwMC8xNjUvMTY1NTgyLmpwZw.webp" alt="Toyota Vitz 3rd Generation Restyling" className="generation-image" />
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
