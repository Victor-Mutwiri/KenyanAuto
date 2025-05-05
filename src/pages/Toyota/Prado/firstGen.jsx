import './prado.css';
import { Helmet } from 'react-helmet-async';

const PradoFirstGen = () => {
  return (
    <article className='prado'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Toyota Land Cruiser Prado (J70 series) 1987 - 1996 | KenyanAuto</title>
          <meta
              name="description"
              content="Toyota Land Cruiser Prado (J70 series) 1987 - 1996" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/Toyota/prado-1st-gen" />
      </Helmet>
      <header>
        <h1>Toyota Land Cruiser Prado (J70 series) 1st Generation: Exploring the Origins of a Legendary SUV</h1>
        <figure className='image-group'>
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Prado/1st%20gen/top%20left.webp?updatedAt=1746439454086" alt="Toyota Land Cruiser Prado 1st Generation" />
          <img
            src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Prado/1st%20gen/top%20right.webp?updatedAt=1746439455517"
            alt="Toyota Land Cruiser Prado 1st Generation Side"
          />
          <figcaption>Images of the Toyota Land Cruiser Prado 1st Generation.</figcaption>
        </figure>
        <p>
          The Toyota Land Cruiser Prado (J70 series) 1st Generation, a vehicle produced from 1987 to 1996, represents the foundational years of this iconic SUV. This article delves into the details of the first generation, covering its various body styles, engine specifications, and its place within the automotive market.
        </p>
      </header>

      <section>
        <h2>Overview of the 1st Generation Land Cruiser Prado</h2>
        <figure>
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Prado/1st%20gen/main.webp?updatedAt=1746439453690" alt="Overview of the Prado 1st Generation" />
          <figcaption>The Prado's 1st generation established its reputation as a rugged SUV.</figcaption>
        </figure>
        <p>
          The 1st generation Toyota Land Cruiser Prado, known as the J70 series, was available in both <strong>3-door</strong> and <strong>5-door SUV</strong> configurations. Production spanned from <strong>August 1987 to April 1996</strong>. This generation laid the groundwork for the Prado's reputation as a reliable and capable off-road vehicle.
        </p>
        <ul>
          <li><strong>Production Years:</strong> August 1987 – April 1996</li>
          <li><strong>Body Styles:</strong> 3-door SUV and 5-door SUV</li>
          <li><strong>Series:</strong> J70</li>
        </ul>
      </section>

      <section>
        <h2>Engine and Performance</h2>
        {/* <figure>
          <img src="https://via.placeholder.com/1200" alt="Engine of the Prado 1st Generation" />
          <figcaption>The 1st generation Prado featured robust diesel engines.</figcaption>
        </figure> */}
        <p>
          The 1st generation Land Cruiser Prado offered various <strong>diesel engine options</strong>, all with a <strong>4x4 drive type</strong>. These engines were available with both <strong>manual and automatic transmissions</strong>. The focus on diesel engines during this era highlights the vehicle's intended use for rugged terrains and demanding conditions.
        </p>
        <article>
          <h3>Engine Options for 3-Door Models</h3>
          <ul>
            <li><strong>2.5 MT Diesel:</strong> Producing 97 hp</li>
            <li><strong>2.5 AT Diesel:</strong> Producing 97 hp</li>
          </ul>
        </article>
        <article>
          <h3>Engine Options for 5-Door Models</h3>
          <ul>
            <li><strong>2.5 MT Diesel:</strong> Producing 85 hp</li>
            <li><strong>2.5 AT Diesel:</strong> Producing 85 hp</li>
            <li><strong>3.0 MT Diesel:</strong> Producing 130 hp</li>
            <li><strong>3.0 AT Diesel:</strong> Producing 130 hp</li>
          </ul>
        </article>
        <p>
          The 5-door models offered a wider range of engine options compared to the 3-door models within the first generation.
        </p>
      </section>

      <section>
        <h2>Trim Levels and Features</h2>
        <figure>
          <img src="https://ik.imagekit.io/janjez/KenyanAuto/Toyota/Prado/1st%20gen/trim.webp?updatedAt=1746439454849" alt="Prado 1st Generation Trim Levels" />
          <figcaption>The 1st generation Prado catered to various off-road needs.</figcaption>
        </figure>
        <p>
          The 1st generation Land Cruiser Prado models included various trim levels, which primarily differentiated by engine type and transmission. Both 3-door and 5-door versions offered <strong>automatic and manual transmission options</strong>, catering to different driving preferences. All models were equipped with a <strong>4x4 drive system</strong>, underscoring their off-road capabilities.
        </p>
      </section>

      <section>
        <h2>Competitors and Similar Cars</h2>
        {/* <figure className='image-group'>
          <img src="https://via.placeholder.com/1200" alt="Competitor SUVs" />
          <figcaption>Notable competitors include Mitsubishi Pajero and Nissan Patrol.</figcaption>
        </figure> */}
        <p>The Prado 1st generation faced competition from SUVs such as:</p>
        <ul>
          <li>Mitsubishi Pajero and Nissan Patrol</li>
          <li>Jeep Cherokee and Ford Bronco</li>
          <li>Isuzu Trooper and Suzuki Samurai</li>
        </ul>
      </section>

      <footer>
        <h2>Conclusion</h2>
        <p>
          The Toyota Land Cruiser Prado 1st generation marked the beginning of a legendary line of SUVs, blending durability and off-road capability. Its legacy remains significant in the SUV market, making it a classic choice for enthusiasts.
        </p>
      </footer>
    </article>
  );
};

export default PradoFirstGen;
