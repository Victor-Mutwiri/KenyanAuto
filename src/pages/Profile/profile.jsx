import './profile.css'
import Victor from '../../../src/assets/Victor.jpeg'

const Profile = () => {
  return (
    <div className='profile'>
        <img src={Victor} alt='Victor'/>
        <section className='texts'>
            <h3>Victor Mutwiri</h3>
            <p>Bikes are way cooler than cars</p>
        </section>
        <a href="https://x.com/lincoln_mutwiri"><i className='bx bxl-twitter'/></a>
    </div>
  )
}
export default Profile