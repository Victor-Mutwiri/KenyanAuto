import './CHRGenerations.css';

const CHRGenerations = () => {
  return (
    <div className="chr-container">
      <header className="chr-header">
        <h1>Toyota C-HR: A Generational Overview</h1>
        <p>
          The Toyota C-HR is a subcompact crossover SUV known for its distinctive styling and efficient engines. Since its debut in 2016, the C-HR has evolved, offering advanced features and modern designs that appeal to younger buyers.
        </p>
      </header>

      <section className="chr-generations">
        <h2 className="generations-title">Explore C-HR Generations</h2>

        {/* 1st Generation */}
        <div className="generation-card">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Toyota_C-HR_%28NGX10R%29_1.8_Hybrid_hatchback_%282017-11-28%29_01.jpg/1280px-2017_Toyota_C-HR_%28NGX10R%29_1.8_Hybrid_hatchback_%282017-11-28%29_01.jpg" 
            alt="Toyota C-HR 1st Generation" 
            className="generation-image" 
          />
          <div className="generation-info">
            <h3>1st Generation (2016-2023)</h3>
            <p>
              The first generation featured a coupe-like design, high driving position, and futuristic interior. Known for its fuel efficiency and unique style, it set a strong foundation for the C-HR series.
            </p>
            <a href="/Toyota/chr-1st-gen" className="learn-more-link">Read More</a>
          </div>
        </div>

        {/* 2nd Generation */}
        <div className="generation-card">
          <img 
            src="https://s1.cdn.autoevolution.com/images/gallery/toyota-c-hr-2023-7546_32.jpg" 
            alt="Toyota C-HR 2nd Generation" 
            className="generation-image" 
          />
          <div className="generation-info">
            <h3>2nd Generation (2023-Present)</h3>
            <p>
              Launched in 2023, the second generation brought sleek updates such as retractable door handles, C-shaped LED headlights, and enhanced hybrid powertrains. It continues to set trends in style and innovation.
            </p>
            <a href="/Toyota/chr-2nd-gen" className="learn-more-link">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CHRGenerations;
