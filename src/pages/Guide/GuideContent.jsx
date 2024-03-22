import { useParams } from 'react-router-dom';
import ownershipGuide from './Guide.json';

const GuideContent = () => {
    const { route } = useParams(); // Get the ID parameter from the URL
    const article = ownershipGuide.find((article) => article.route === route);
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} />
      {article.content.trafficLaws && (
        <div>
            <h3>trafficLaws</h3>
            <p>{article.content.trafficLaws}</p>
        </div>
      )}
      {article.content.regulations && (
        <div>
            <h3>regulations</h3>
            <p>{article.content.regulations}</p>
        </div>
      )}
      {article.content.inspection && (
        <div>
            <h3>inspection</h3>
            <p>{article.content.inspection}</p>
        </div>
      )}
      {article.content.registration && (
        <div>
            <h3>registration</h3>
            <p>{article.content.registration}</p>
        </div>
      )}
      {article.content.licensing && (
        <div>
            <h3>licensing</h3>
            <p>{article.content.licensing}</p>
        </div>
      )}
      {article.content.drivingTechniques && (
        <div>
            <h3>drivingTechniques</h3>
            <p>{article.content.drivingTechniques}</p>
        </div>
      )}
      {article.content.drivingRisks && (
        <div>
            <h3>drivingRisks</h3>
            <p>{article.content.drivingRisks}</p>
        </div>
      )}
      {article.content.adverseConditions && (
        <div>
            <h3>adverseConditions</h3>
            <p>{article.content.adverseConditions}</p>
        </div>
      )}
      {article.content.carCommunities && (
        <div>
            <h3>carCommunities</h3>
            <p>{article.content.carCommunities}</p>
        </div>
      )}
      {article.content.carShows && (
        <div>
            <h3>carShows</h3>
            <p>{article.content.carShows}</p>
        </div>
      )}
      {article.content.causes && (
        <div>
            <h3>causes</h3>
            <p>{article.content.causes}</p>
        </div>
      )}
      {article.content.procedure && (
        <div>
            <h3>procedure</h3>
            <p>{article.content.procedure}</p>
        </div>
      )}
      {article.content.preventing && (
        <div>
            <h3>preventing</h3>
            <p>{article.content.preventing}</p>
        </div>
      )}
      {article.content.latestAdvancements && (
        <div>
            <h3>latestAdvancements</h3>
            <p>{article.content.latestAdvancements}</p>
        </div>
      )}
      {article.content.ADAS && (
        <div>
            <h3>ADAS</h3>
            <p>{article.content.ADAS}</p>
        </div>
      )}
      {article.content.popularUpgrades && (
        <div>
            <h3>popularUpgrades</h3>
            <p>{article.content.popularUpgrades}</p>
        </div>
      )}
      {article.content.reputableBrands && (
        <div>
            <h3>reputableBrands</h3>
            <p>{article.content.reputableBrands}</p>
        </div>
      )}
      {article.content.modificationImpacts && (
        <div>
            <h3>modificationImpacts</h3>
            <p>{article.content.modificationImpacts}</p>
        </div>
      )}
      {article.content.what && (
        <div>
            <h3>what</h3>
            <p>{article.content.what}</p>
        </div>
      )}
      {article.content.reasons && (
        <div>
            <h3>reasons</h3>
            <p>{article.content.reasons}</p>
        </div>
      )}
      {article.content.companies && (
        <div>
            <h3>companies</h3>
            <p>{article.content.companies}</p>
        </div>
      )}
      {article.content.how && (
        <div>
            <h3>how</h3>
            <p>{article.content.how}</p>
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
      {article.content.conclusion && (
        <div>
            <h3>conclusion</h3>
            <p>{article.content.conclusion}</p>
        </div>
      )}
      {article.content.advancements && (
        <div>
            <h3>advancements</h3>
            <p>{article.content.advancements}</p>
        </div>
      )}
      {article.content.budgetCars && (
        <div>
            <h3>budgetCars</h3>
            <p>{article.content.budgetCars}</p>
        </div>
      )}
      {article.content.economics && (
        <div>
            <h3>economics</h3>
            <p>{article.content.economics}</p>
        </div>
      )}
      {article.content.maintenance && (
        <div>
            <h3>maintenance</h3>
            <p>{article.content.maintenance}</p>
        </div>
      )}
      {article.content.ecosystem && (
        <div>
            <h3>ecosystem</h3>
            <p>{article.content.ecosystem}</p>
        </div>
      )}
      {article.content.conclusion && (
        <div>
            <h3>conclusion</h3>
            <p>{article.content.conclusion}</p>
        </div>
      )}
    </div>
  )
}

export default GuideContent