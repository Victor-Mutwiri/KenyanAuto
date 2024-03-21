import { useParams } from 'react-router-dom';
import sellingGuide from './Selling.json';

const SellingContent = () => {
    const { id } = useParams(); // Get the ID parameter from the URL
    const article = sellingGuide.find((article) => article.id === parseInt(id));
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} />
      <p>{article.content}</p>
    </div>
  )
}

export default SellingContent