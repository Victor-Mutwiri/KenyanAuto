import { Link } from 'react-router-dom';
import buyingGuide from './Buying.json'
import './Buying.css'

export const Buying = () => {
  return (
    <div className='buyingCard'>
      {buyingGuide.map((article) => (
        <Link to={`/buying-guide/${article.route}`} key={article.id} className="card-link">
          <div className="card" style={{ width: '25rem' }}>
            <img src={article.img} className="card-img-top" alt={article.title}/>
            <div className="card-body">
              <h4 className="card-title">{article.title}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
