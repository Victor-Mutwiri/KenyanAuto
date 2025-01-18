import "./Subaru.css";

const Subaru = () => {
  return (
    <article className="subaru-article">
      <header>
        <h1>Subaru: Engineering Excellence and All-Wheel Drive Mastery</h1>
        <figure>
          <img
            src="https://www.subaru.com/content/dam/subaru/global/vehicles/legacy/header_img.jpg"
            alt="Subaru Cars"
          />
          <figcaption>Subaru: Unmatched performance and safety.</figcaption>
        </figure>
        <p>
          Subaru is renowned for its unique combination of rugged all-wheel drive capability and advanced engineering. With a legacy spanning over 60 years, Subaru has earned its place as a leader in the automotive world. Known for its reliability, safety, and performance, Subaru vehicles are designed to handle both urban roads and challenging terrains. In Kenya, Subaru is recognized as a brand that offers exceptional value, making it the ideal choice for adventure seekers and families alike.
        </p>
      </header>

      <section>
        <h2>Popular Subaru Models in Kenya</h2>
        <p>
          The Kenyan market is diverse, and Subaru has established itself as a preferred choice among drivers seeking adventure, performance, and reliability. Below are some of the most popular Subaru models you’ll find in Kenya.
        </p>

        <ul className="subaru-models-list">
          <li>
            <a href="/Subaru/forester">Subaru Forester</a>: A compact SUV with impressive off-road capability and spacious interiors, perfect for both city driving and off-road adventures.
          </li>
          <li>
            <a href="/Subaru/wrx">Subaru WRX</a>: A high-performance sports sedan known for its turbocharged engine, all-wheel drive, and superior handling.
          </li>
          <li>
            <a href="/Subaru/forester-xt">Subaru Forester XT</a>: A performance-enhanced version of the Forester, offering more power and advanced features for those who crave a more dynamic driving experience.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Subaru is a Preferred Brand in Kenya</h2>
        <figure>
          <img
            src="https://www.subaru.com/content/dam/subaru/global/vehicles/crosstrek/2024/crosstrek-hero.jpg"
            alt="Subaru in Kenya"
          />
          <figcaption>Subaru: Built for Kenya's diverse driving conditions.</figcaption>
        </figure>
        <p>
          Subaru’s popularity in Kenya is largely due to several factors that align with the needs of local drivers:
        </p>
        <ul>
          <li>
            <strong>All-Wheel Drive System:</strong> Subaru’s signature all-wheel drive technology makes its vehicles ideal for navigating Kenya’s diverse landscapes, from urban roads to rough, unpaved paths.
          </li>
          <li>
            <strong>Reliability:</strong> Subaru vehicles are built to last, providing dependable performance in even the toughest conditions.
          </li>
          <li>
            <strong>Safety:</strong> Subaru has built a reputation for producing some of the safest vehicles in the world, equipped with advanced safety features to protect drivers and passengers.
          </li>
          <li>
            <strong>Performance:</strong> Subaru's engines, particularly in models like the WRX and Forester XT, are designed for high performance, making them perfect for both daily commuting and thrilling adventures.
          </li>
          <li>
            <strong>Fuel Efficiency:</strong> Subaru models are engineered to deliver excellent fuel efficiency, making them cost-effective for Kenyan drivers.
          </li>
        </ul>
      </section>

      <footer>
        <h2>Conclusion</h2>
        <p>
          Subaru continues to dominate the Kenyan automotive market with its robust range of vehicles, offering drivers exceptional value, performance, and safety. Whether you're looking for a rugged SUV like the Forester, a performance-oriented sedan like the WRX, or an upgraded Forester XT, Subaru has a model to fit your needs. Explore the individual models linked above to discover why Subaru remains a trusted and beloved brand in Kenya.
        </p>
      </footer>
    </article>
  );
};

export default Subaru;
