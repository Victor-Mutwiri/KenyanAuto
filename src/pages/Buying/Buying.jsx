import { Link } from 'react-router-dom';
import buyingGuide from './Buying.json'
import './Buying.css'

export const Buying = () => {
  return (
    <div className='content-container'>
      <div className='buyingCard'>
        {buyingGuide.map((article) => (
          <Link to={`/buying-guide/${article.route}`} key={article.id} className="card-link">
            <div className="card buying" style={{ width: '20rem' }}>
              <img src={article.img} alt={article.title}/>
              <h5 className="card-title"><strong>{article.title}</strong></h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
