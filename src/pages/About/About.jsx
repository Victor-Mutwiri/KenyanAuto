import './About.css';
import Laptop from '../../../src/assets/Laptop.jpg'

const About = () => {
  return (
    <div className='aboutPage'>
      <section className='hero'>
        <h1>Welcome to KenyanAuto</h1>
        <p>Your ultimate destination for comprehensive car reviews, buying tips, and a wide selection of vehicles from our marketplace.</p>
      </section>
      <section className='about'>
        <div className='about-content'>
          <img src={Laptop} alt="Victor" />
          <div>
            <h2>About Us</h2>
            <p>
              KenyanAuto offers comprehensive car reviews, buying tips, and a wide selection of vehicles in our car marketplace.
              We provide vehicles both locally and foreign used, sourced from top dealers and individual sellers across the country.
            </p>
            <p>
              We deliver customized vehicle sourcing, backed by over 6 years of successful automotive industry experience,
              renowned for exceptional service. Whether you're considering a locally used vehicle or an import,
              our team takes pride in finding the perfect match for your needs and budget.
            </p>
          </div>
        </div>
      </section>
      <section className='services'>
        <h2>What We Offer</h2>
        <div className='offer-grid'>
          <div className='offer-item'>In-depth Reviews</div>
          <div className='offer-item'>Comprehensive Guides</div>
          <div className='offer-item'>Expert Advice</div>
          <div className='offer-item'>Transparency</div>
        </div>
      </section>
    </div>
  );
};

export default About;
