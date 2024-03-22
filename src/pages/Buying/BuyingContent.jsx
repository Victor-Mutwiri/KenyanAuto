import { useParams } from 'react-router-dom';
import buyingGuide from './Buying.json';

const BuyingContent = () => {
    const { route } = useParams(); // Get the ID parameter from the URL
    const article = buyingGuide.find((article) => article.route === route);
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
      {article.content.Overview && (
        <div>
            <h3>Overview</h3>
            <p>{article.content.Overview}</p>
        </div>
      )}
      {article.content.pros && (
        <div>
            <h3>pros</h3>
            <p>{article.content.pros}</p>
        </div>
      )}
      {article.content.cons && (
        <div>
            <h3>cons</h3>
            <p>{article.content.cons}</p>
        </div>
      )}
      {article.content.approval && (
        <div>
            <h3>approval</h3>
            <p>{article.content.approval}</p>
        </div>
      )}
      {article.content.insurance && (
        <div>
            <h3>insurance</h3>
            <p>{article.content.insurance}</p>
        </div>
      )}
      {article.content.claims && (
        <div>
            <h3>claims</h3>
            <p>{article.content.claims}</p>
        </div>
      )}
      {article.content.Dealerships && (
        <div>
            <h3>Dealerships</h3>
            <p>{article.content.Dealerships}</p>
        </div>
      )}
      {article.content.testimonials && (
        <div>
            <h3>testimonials</h3>
            <p>{article.content.testimonials}</p>
        </div>
      )}
      {article.content.recommendations && (
        <div>
            <h3>recommendations</h3>
            <p>{article.content.recommendations}</p>
        </div>
      )}
      {article.content.Redflags && (
        <div>
            <h3>Redflags</h3>
            <p>{article.content.Redflags}</p>
        </div>
      )}
    </div>
  )
}

export default BuyingContent