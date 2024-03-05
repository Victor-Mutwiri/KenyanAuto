import './Review.css'
import safety from '../../assets/safety.jpg'
import service from '../../assets/service.jpg'
import firstcar from '../../assets/firstcar.jpg'
import buying from '../../assets/buying.jpg'

export const Review = () => {
  return (
    <div className='review'>
      <section className='background'>
        <h1>Navigate your Car Journey <br /> with Confidence</h1>
        <div className='search'>
          <div className="make">
            <h4>Make</h4>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="model">
            <h4>Model</h4>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="button">
            <h4></h4>
            <button><i className='bx bx-search-alt'> Search</i></button>
          </div>
        </div>
        <div className='images'>
          <img src={buying} alt="buying" />
          <img src={service} alt="service" />
          <img src={firstcar} alt="firstcar" />
          <img src={safety} alt="safety" />
        </div>
      </section>
    </div>
  )
}
