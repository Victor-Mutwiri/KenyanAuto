import { useParams } from 'react-router-dom';
import buyingGuide from './Buying.json';
import './BuyingContent.css'

const BuyingContent = () => {
    const { route } = useParams(); // Get the ID parameter from the URL
    const article = buyingGuide.find((article) => article.route === route);
  return (
    <div className='buyingContent'>
      {/* <h2>{article.title}</h2> */}
      <img src={article.img} alt={article.title} />
      {article.content.researching && (
        <div>
          <div>
            <h3>Why Buy a New Car Locally from a Dealer in Kenya?</h3>
            <p>So, you've decided it's time to upgrade your wheels, or probably get your first car huh? 
              Exciting times ahead! Now, let's talk about why picking up that shiny new ride from a local 
              dealer here in Kenya could be your best move.
            </p>
            <p>The Kenyan car industry has evolved, and now, buying new has never been easier or more rewarding. 
              Here's why:</p>
            <ul>
              <div>
                <li><strong>Peace of Mind</strong></li>
                <p> 
                  Certain dealerships are backed by reputable brands and have a reputation to uphold.
                  In most cases, you are likely to have been refered to the dealership by a friend, family member or seen
                  previous clients online who have been heaping praises
                </p>
              </div>
              <div>
                <li><strong>Local Support and Service</strong></li>
                <p>Imagine driving off the dealership with your car then experiencing mechanical issues from your pride and joy weeks or months
                  into your ownership. It is easier to liase with the dealer to understand and discover the root cause of the issue.
                  Some dealerships in Kenya often provide the buyer a gearbox and engine waranty of at times upto 6 months, which further 
                  goes far in instilling confidence to the buyer. As a buyer it is your responsibility to conduct due deligence before
                  choosing to engage in any dealings with your dealerships
                </p>
              </div>
            </ul>
          </div>
            <h3>How do I find the right car for me?</h3>
            <ul>
              {article.content.researching.map((step, index) => {
                const [action, description] = step.split(' - ');
                return (
                  <li key={index}>
                    <strong>{action}</strong> - {description}
                  </li>
                );
              })}
            </ul>
        </div>
      )}
      {article.content.dealerships && (
        <div>
            <h3> Some of the credible dealerships in Nairobi include:</h3>
            <p>We at KenyanAuto have conducted sector research on the top car dealerships in Nairobi. 
              The report focuses on the top-rated and most rated dealerships in Nairobi, focusing on their 
              online ratings and reviews. Positive reviews are seen as social proof of trust, encouraging readers 
              to make a purchase. The report is based on official Google ratings and reviews, indicating the dealership's 
              popularity and accessibility to the masses. As the car business becomes increasingly competitive, companies 
              are working to ensure their products generate positive reviews.
            </p>
            <ul>
              {article.content.dealerships.map((step, index) => (
                <li key={index}><strong>{step}</strong></li>
              ))}
            </ul>
        </div>
      )}
      {article.content.inspection && (
        <div>
            <h3>What are the Necessary Checks & Inspections before buying a car in Kenya?</h3>
            <p>Bringing your own mechanic or car expert to the dealership is like having a trusty sidekick on your car-buying adventure.
              The mech will be your secret weapon against any shady deals or hidden surprises lurking under the hood
              <br />
              Think of it this way: while you might know your way around cars, having a pro by your side adds an extra layer of confidence.
            </p>
            <p>You might consider checking:</p>
            <ul>
              {article.content.inspection.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <p>Remember measure twice cut once. Some of these checks are highly crucial for letting you know how the vehicle was once taken care of by the previous seller
              to avoid future confrontations with your dealer after finalizing the sale.
            </p>
        </div>
      )}
      {article.content.documents && (
        <div>
            <h3>Which documents are necessary and what is the Overall Process?</h3>
            <ul>
              {article.content.documents.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
        </div>
      )}
      {article.content.payment && (
        <div>
            <h3>payment</h3>
            <p>Here's a casual rundown of three common payment methods for buying a car:</p>
            <ul>
              {article.content.payment.map((step, index) => {
                  const [action, description] = step.split(' - ');
                  return (
                    <li key={index}>
                      <strong>{action}</strong> - {description}
                    </li>
                  );
                })}
            </ul>
            <p>Remember, always beware of hidden fees and fine print. Shop around for the best deal. Take time, do your homework, and ask questions.</p>
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
      {article.content.redflags && (
        <div>
            <h3>What should I look for when buying a used Car?</h3>
            <p>Buying a used car was once a stressful and risky process, requiring advice from friends or family. 
              However, with the availability of resources such as us here at KenyanAuto, consumers are now more informed about the process.
              <br/>
              Before finalizing a deal, it's crucial to do your homework and consider the following  redflags:
            </p>
            <ol>
              {article.content.redflags.map((step, index) => {
                  const [action, description] = step.split(' - ');
                  return (
                    <li key={index}>
                      <strong>{action}</strong> - {description}
                    </li>
                  );
                })}
            </ol>
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
      {article.content.pointers && (
        <div>
            <h3>Documents and Overall Process</h3>
            <p>There are certain crucial things dealers often hide when selling cars, such as poor after-sales services, 
              poor quality, and long transfer processes.
              <br />
              It emphasizes the importance of checking these details when buying a car from a dealer. The disclaimer is given, 
              indicating that if a dealer does not provide the necessary information, there may be something fishy going on and 
              they may not be at par or selling the best car available. Not all dealers engage in such mischief, so it's important 
              to have a clear understanding before making a purchase.
            </p>
            <ul>
              {article.content.pointers.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
        </div>
      )}
      {article.content.Advice && (
        <div>
            <h3>Are you interested in buying a car locally?</h3>
            <p>{article.content.Advice}</p>
            <p>Before any purchase, especially a vehicle, it is of utmost importance to carry out extreme due deligence 
              before engaging in any transactions. Always remember to wear your <strong>Paranoid</strong> court as it might
              save you from a costly mistake. Many have been victims of <i>"Ruthless"</i> turn of events in vehicle dealings.
            </p>
        </div>
      )}
      {article.content.Searches && (
        <div>
            <h4>Crucial Searches to be Conducted:</h4>
            <ul>
              {article.content.Searches.map((step, index) => {
                  const [action, description] = step.split(' - ');
                  return (
                    <li key={index}>
                      <strong>{action}</strong> - {description}
                    </li>
                  );
                })}
            </ul>
        </div>
      )}
      {article.content.Meeting && (
        <div>
            <h4>How to go about Motor Vehicle Sale Agreement:</h4>
            <ul>
              {article.content.Meeting.map((step, index) => {
                  const [action, description] = step.split(' - ');
                  return (
                    <li key={index}>
                      {action} {description}
                    </li>
                  );
                })}
            </ul>
        </div>
      )}
      {article.content.Transaction && (
        <div>
            <h4>Transaction Day Process:</h4>
            <ul>
              {article.content.Transaction.map((step, index) => {
                  const [action, description] = step.split(' - ');
                  return (
                    <li key={index}>
                      {action} {description}
                    </li>
                  );
                })}
            </ul>
        </div>
      )}
      {article.content['Post-purchase'] && (
        <div>
            <h4>Post-Purchase Procedures:</h4>
            <h5><i>What do I do If the engine had been changed?</i></h5>
            <ul>
              {article.content['Post-purchase'].map((step, index) => {
                  const [action, description] = step.split(' - ');
                  return (
                    <li key={index}>
                      {action} {description}
                    </li>
                  );
                })}
            </ul>
        </div>
      )}
    </div>
  )
}

export default BuyingContent