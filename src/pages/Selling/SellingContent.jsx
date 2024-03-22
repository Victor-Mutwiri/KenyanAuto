import { useParams } from 'react-router-dom';
import sellingGuide from './Selling.json';

const SellingContent = () => {
    const { route } = useParams(); // Get the ID parameter from the URL
    const article = sellingGuide.find((article) => article.route === route);
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} />
      {article.content.plaforms && (
        <div>
            <h3>plaforms</h3>
            <p>{article.content.plaforms}</p>
        </div>
      )}
      {article.content.listings && (
        <div>
            <h3>listings</h3>
            <p>{article.content.listings}</p>
        </div>
      )}
      {article.content.othermarketing && (
        <div>
            <h3>othermarketing</h3>
            <p>{article.content.othermarketing}</p>
        </div>
      )}
      {article.content.inquiries && (
        <div>
            <h3>inquiries</h3>
            <p>{article.content.inquiries}</p>
        </div>
      )}
      {article.content.presentation && (
        <div>
            <h3>presentation</h3>
            <p>{article.content.presentation}</p>
        </div>
      )}
      {article.content.repairs && (
        <div>
            <h3>repairs</h3>
            <p>{article.content.repairs}</p>
        </div>
      )}
      {article.content.documents && (
        <div>
            <h3>documents</h3>
            <p>{article.content.documents}</p>
        </div>
      )}
      {article.content.posting && (
        <div>
            <h3>posting</h3>
            <p>{article.content.posting}</p>
        </div>
      )}
      {article.content.legalObligations && (
        <div>
            <h3>legalObligations</h3>
            <p>{article.content.legalObligations}</p>
        </div>
      )}
      {article.content.paperwork && (
        <div>
            <h3>paperwork</h3>
            <p>{article.content.paperwork}</p>
        </div>
      )}
      {article.content.payment && (
        <div>
            <h3>payment</h3>
            <p>{article.content.payment}</p>
        </div>
      )}
      {article.content.transfer && (
        <div>
            <h3>transfer</h3>
            <p>{article.content.transfer}</p>
        </div>
      )}
      {article.content.legalguidance && (
        <div>
            <h3>legalguidance</h3>
            <p>{article.content.legalguidance}</p>
        </div>
      )}
      {article.content.selfProtection && (
        <div>
            <h3>selfProtection</h3>
            <p>{article.content.selfProtection}</p>
        </div>
      )}
      {article.content.meetingBuyers && (
        <div>
            <h3>meetingBuyers</h3>
            <p>{article.content.meetingBuyers}</p>
        </div>
      )}
      {article.content.verifyingIdentity && (
        <div>
            <h3>verifyingIdentity</h3>
            <p>{article.content.verifyingIdentity}</p>
        </div>
      )}
      {article.content.scams && (
        <div>
            <h3>scams</h3>
            <p>{article.content.scams}</p>
        </div>
      )}
      {article.content.boundaries && (
        <div>
            <h3>boundaries</h3>
            <p>{article.content.boundaries}</p>
        </div>
      )}
      {article.content.securePayment && (
        <div>
            <h3>securePayment</h3>
            <p>{article.content.securePayment}</p>
        </div>
      )}
      {article.content.uniqueFeatures && (
        <div>
            <h3>uniqueFeatures</h3>
            <p>{article.content.uniqueFeatures}</p>
        </div>
      )}
      {article.content.marketResearch && (
        <div>
            <h3>marketResearch</h3>
            <p>{article.content.marketResearch}</p>
        </div>
      )}
      {article.content.paymentMethods && (
        <div>
            <h3>paymentMethods</h3>
            <p>{article.content.paymentMethods}</p>
        </div>
      )}
      {article.content.negotiating && (
        <div>
            <h3>negotiating</h3>
            <p>{article.content.negotiating}</p>
        </div>
      )}
      {article.content.incentives && (
        <div>
            <h3>incentives</h3>
            <p>{article.content.incentives}</p>
        </div>
      )}
    </div>
  )
}

export default SellingContent