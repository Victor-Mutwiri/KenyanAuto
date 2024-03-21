import { useParams } from 'react-router-dom';
import buyingGuide from './Buying.json';

const BuyingContent = () => {
    const { id } = useParams(); // Get the ID parameter from the URL
    const article = buyingGuide.find((article) => article.id === parseInt(id));
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} />
      {article.content.researching && (
        <div>
            <h3>Researching</h3>
            <p>{article.content.researching}</p>
        </div>
      )}
      {article.content.dealerships && (
        <div>
            <h3>dealerships</h3>
            <p>{article.content.dealerships}</p>
        </div>
      )}
      {article.content.inspection && (
        <div>
            <h3>inspection</h3>
            <p>{article.content.inspection}</p>
        </div>
      )}
      {article.content.documents && (
        <div>
            <h3>documents</h3>
            <p>{article.content.documents}</p>
        </div>
      )}
      {article.content.payment && (
        <div>
            <h3>payment</h3>
            <p>{article.content.payment}</p>
        </div>
      )}
      {article.content.overview && (
        <div>
            <h3>overview</h3>
            <p>{article.content.overview}</p>
        </div>
      )}
      {article.content.process && (
        <div>
            <h3>process</h3>
            <p>{article.content.process}</p>
        </div>
      )}
      {article.content.agents && (
        <div>
            <h3>agents</h3>
            <p>{article.content.agents}</p>
        </div>
      )}
      {article.content.regulations && (
        <div>
            <h3>regulations</h3>
            <p>{article.content.regulations}</p>
        </div>
      )}
      {article.content.clearing && (
        <div>
            <h3>clearing</h3>
            <p>{article.content.clearing}</p>
        </div>
      )}
      {article.content.registration && (
        <div>
            <h3>registration</h3>
            <p>{article.content.registration}</p>
        </div>
      )}
      {article.content.research && (
        <div>
            <h3>research</h3>
            <p>{article.content.research}</p>
        </div>
      )}
      {article.content.inspecting && (
        <div>
            <h3>inspecting</h3>
            <p>{article.content.inspecting}</p>
        </div>
      )}
      {article.content.redflags && (
        <div>
            <h3>redflags</h3>
            <p>{article.content.redflags}</p>
        </div>
      )}
      {article.content.safety && (
        <div>
            <h3>safety</h3>
            <p>{article.content.safety}</p>
        </div>
      )}
      {article.content.financing && (
        <div>
            <h3>financing</h3>
            <p>{article.content.financing}</p>
        </div>
      )}
      {article.content.transferprocess && (
        <div>
            <h3>transfer process</h3>
            <p>{article.content.transferprocess}</p>
        </div>
      )}
    </div>
  )
}

export default BuyingContent