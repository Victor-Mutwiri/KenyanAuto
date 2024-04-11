import './About.css'
import Me from '../../../src/assets/Victor.jpeg'

const About = () => {
  return (
    <div className='aboutPage'>
      <section className='about'>
        <p>
          <i className='bx bxs-quote-alt-left'/>
          KenyanAuto offers comprehensive car reviews, buying guides, selling tips, <br /> 
          and maintenance advice to help car enthusiasts and first-time buyers 
          <br />
          make informed decisions for their automotive needs.
          <i className='bx bxs-quote-alt-right'/>
        </p>
        <img src={Me} alt="" width={250}/>
      </section>
      <section className='service'>
        <p>
          We deliver customized vehicle sourcing, Backed by 
          <br />over 6 years of successful automotive industry experience, 
           renowned for exceptional service.
          <br />Whether locally used vehicle or considering importing,
          <br /> our team takes pride in finding the perfect match 
          <br />for your needs and budget.
        </p>
      </section>
      <section className='offer'>
        <div>In-depth Reviews</div>
        <div>Comprehensive Guides</div>
        <div>Expert Advice</div>
        <div>Transparent</div>
      </section>
    </div>
  )
}

export default About