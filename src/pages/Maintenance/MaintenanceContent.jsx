import { useParams } from 'react-router-dom';
import maintenanceGuide from './Maintenance.json';

const MaintenanceContent = () => {
    const { id } = useParams(); // Get the ID parameter from the URL
    const article = maintenanceGuide.find((article) => article.id === parseInt(id));
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} />
      <p>{article.content}</p>
    </div>
  )
}

export default MaintenanceContent