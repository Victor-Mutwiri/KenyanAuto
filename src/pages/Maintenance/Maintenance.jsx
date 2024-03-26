import { Link } from 'react-router-dom';
import maintenanceGuide from './Maintenance.json'
import './Maintenance.css'

export const Maintenance = () => {
  return (
    <div className='content-container'>
      <div className='maintenanceCard'>
        {maintenanceGuide.map((article) => (
          <Link to={`/maintenance-guide/${article.route}`} key={article.id} className="card-link">
            <div className="card maintenance" style={{ width: '20rem' }}>
              <img src={article.img} className="card-img-top" alt={article.title}/>
              <h5 className="card-title">{article.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
