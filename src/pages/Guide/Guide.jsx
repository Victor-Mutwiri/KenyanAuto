import { Link } from 'react-router-dom';
import guide from './Guide.json'
import './Guide.css'

export const Guide = () => {
  return (
    <div className='content-container'>
      <div className='guideCard'>
        {guide.map((article) => (
          <Link to={`/guides/${article.route}`} key={article.id} className="card-link">
            <div className="card" style={{ width: '20rem' }}>
              <img src={article.img} className="card-img-top" alt={article.title}/>
              <h5 className="card-title">{article.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
