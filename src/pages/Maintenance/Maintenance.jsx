import { Link } from 'react-router-dom';
import maintenanceGuide from './Maintenance.json'
import './Maintenance.css'

export const Maintenance = () => {
  return (
    <div className='maintenanceCard'>
      {maintenanceGuide.map((article) => (
        <Link to={`/maintenance-guide/${article.route}`} key={article.id} className="card-link">
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
