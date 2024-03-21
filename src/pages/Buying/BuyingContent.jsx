import { useParams } from 'react-router-dom';
import buyingGuide from './Buying.json';

const BuyingContent = () => {
    const { id } = useParams(); // Get the ID parameter from the URL
    const article = buyingGuide.find((article) => article.id === parseInt(id));
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} />
      <p>{article.content}</p>
    </div>
  )
}

export default BuyingContent