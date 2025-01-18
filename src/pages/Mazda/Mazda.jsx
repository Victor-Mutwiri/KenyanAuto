import "./Mazda.css";

const Mazda = () => {
  return (
    <article className="mazda-article">
      <header>
        <h1>Mazda: Driving Passion and Performance</h1>
        <figure>
          <img
            src="https://www.seacoastmazda.com/static/dealer-20146/Mazda-service-cars.jpg"
            alt="Mazda Cars"
          />
          <figcaption>Mazda: Inspiring journeys with style and innovation.</figcaption>
        </figure>
        <p>
          Mazda is a globally renowned automobile manufacturer celebrated for its
          unique blend of style, performance, and reliability. Since its founding
          in 1920, Mazda has pushed the boundaries of engineering, creating cars
          that are as exhilarating to drive as they are dependable. In Kenya,
          Mazda has earned a loyal following thanks to its innovative designs,
          fuel efficiency, and excellent handling.
        </p>
      </header>

      <section>
        <h2>Popular Mazda Models in Kenya</h2>
        <p>
          Mazda offers a diverse range of vehicles that cater to various needs,
          from compact city cars to powerful SUVs. Below, we explore some of the
          most popular Mazda models in Kenya, known for their exceptional
          performance and value.
        </p>

        <ul className="mazda-models-list">
          <li>
            <a href="/Mazda/demio">Mazda Demio</a>: A compact hatchback ideal for
            city driving, offering excellent fuel efficiency and a sleek design.
          </li>
          <li>
            <a href="/Mazda/cx-3">Mazda CX-3</a>: A stylish crossover that
            combines advanced technology with a sporty driving experience.
          </li>
          <li>
            <a href="/Mazda/cx-5">Mazda CX-5</a>: A versatile SUV renowned for
            its comfort, safety features, and dynamic performance.
          </li>
          <li>
            <a href="/Mazda/axela">Mazda Axela</a>: A sporty sedan that blends
            luxury, efficiency, and cutting-edge technology.
          </li>
          <li>
            <a href="/Mazda/atenza">Mazda Atenza</a>: A premium sedan designed
            for those who demand sophistication and performance.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Mazda is a Preferred Brand in Kenya</h2>
        <figure>
          <img
            src="https://www.passportcollisioncenter.com/blogs/849/wp-content/uploads/2018/07/summerevent_hero.jpg"
            alt="Mazda cars in Kenya"
          />
          <figcaption>Mazda: Delivering excellence on Kenyan roads.</figcaption>
        </figure>
        <p>
          Mazda’s growing popularity in Kenya is due to several key factors:
        </p>
        <ul>
          <li>
            <strong>Performance:</strong> Mazda vehicles are designed for a
            thrilling driving experience, with responsive handling and advanced
            engines.
          </li>
          <li>
            <strong>Fuel Efficiency:</strong> Mazda's SKYACTIV technology ensures
            excellent fuel economy without compromising performance.
          </li>
          <li>
            <strong>Reliability:</strong> Known for their durability, Mazda cars
            perform exceptionally well on Kenyan roads.
          </li>
          <li>
            <strong>Stylish Design:</strong> Mazda vehicles are renowned for
            their sleek, modern, and eye-catching designs.
          </li>
          <li>
            <strong>Value for Money:</strong> Mazda offers premium features at
            competitive prices, making it a popular choice for discerning buyers.
          </li>
        </ul>
      </section>

      <footer>
        <h2>Conclusion</h2>
        <p>
          Mazda continues to capture the hearts of drivers in Kenya with its
          exceptional lineup of vehicles. From the compact Demio to the premium
          Atenza, Mazda offers something for everyone. Explore the individual
          models linked above to find the perfect Mazda for your needs and
          experience the thrill of driving a Mazda.
        </p>
      </footer>
    </article>
  );
};

export default Mazda;
