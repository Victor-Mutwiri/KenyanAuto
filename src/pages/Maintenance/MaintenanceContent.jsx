import { useParams } from 'react-router-dom';
import maintenanceGuide from './Maintenance.json';
import { Link } from 'react-router-dom';
import './MaintenanceContent.css';

const MaintenanceContent = () => {
    const { route } = useParams(); // Get the ID parameter from the URL
    const article = maintenanceGuide.find((article) => article.route === route);

    if (!article) {
      return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      {/* <img src={article.img} alt={article.title} /> */}
      {article.content && Array.isArray(article.content) && article.content.length > 0 && (
           <div className='maintenanceContentCard'>
              {article.content.map((contentItem) => (
                  <div key={contentItem.id} className='maintenanceMakeCard'>
                      {contentItem.make && (
                          <Link to={`/maintenance-guide/${contentItem.make}`}>
                              <div className="card make" style={{ width: '15rem' }}>
                                  <img src={contentItem.image} className="card-img-top" alt={contentItem.make} />
                                  <div className="card-body">
                                      <h4 className="card-title">{contentItem.make}</h4>
                                  </div>
                              </div>
                          </Link>
                      )}
                  </div>
              ))}
          </div>
      )}
      {article.content && !Array.isArray(article.content) && (
          <div>
              {Object.keys(article.content).map((key) => (
                  <div key={key}>
                      <h3>{key}</h3>
                      <p>{article.content[key]}</p>
                  </div>
              ))}
          </div>
        )}
    </div>
  )
}

export default MaintenanceContent