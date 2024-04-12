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
    <div className='maintenanceContent'>
      <h2>{article.title}</h2>
      {<img src={article.img} alt={article.title} width={350}/> }
      {article.content.Manual && (
        <div>
            <p>
                A transmission in a car transfers engine power to wheels through a mechanical system of gears and trains. 
                It allows controlled power application, with lower gears providing torque for acceleration and higher gears 
                for high speed. There are various types of transmissions, including automatic and manual. Transmissions are 
                typically mounted on the vehicle's chassis in the front and work by adjusting the gear ratio between drive 
                wheels and engine. They also disconnect the engine from drive wheels when stopped, enabling quick acceleration 
                and reducing wear.
            </p>
            <h3>Manual</h3>
            <ul>
              {article.content.Manual.map((step, index) => {
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
      {article.content.CVT && (
        <div>
            <h3>CVT</h3>
            <p>CVT Transmissions are pulley-based transmissions used in small vehicles with small engines, 
                such as hybrid vehicles. They consist of a primary small drive and a secondary large driven 
                clutch connected by a belt or chain. As the primary drive contracts, the belt or chain moves up, 
                while the secondary expands, causing the belt or chain to walk down. CVTs work through a pulley 
                system, with cones at each pulley connected via a chain belt that can change gear ratios. This 
                allows them to maintain constant engine revolutions per minute, boosting fuel economy and providing 
                a smooth driving experience
            </p>
            <h5>CTV Problems and how to solve them</h5>
            <p>
                Modern passenger cars have evolved with automatic transmissions to improve drive quality and gas mileage.
                However, CVT transmissions have issues such as:
            </p>
            <ul>
              {article.content.CVT.map((step, index) => {
                  const [action] = step.split(' - ');
                  return (
                    <li key={index}>
                      {action}
                    </li>
                  );
                })}
            </ul>
            <h5>Care Tips for a CVT Transmission</h5>
            <ul>
                <li>Mixing fluid types is not recommended as it can damage the CVT.</li>
                <li>Regular fluid replacement is recommended, as per the owner's manual.</li>
                <li>The transmission dipstick is a crucial tool for checking the fluid's condition. If the dipstick shows dark brown, black, or burnt odor, replace the fluid immediately.</li>
                <li>Heavy towing is not advised, to avoid stressing the transmission and potentially overheating it.</li>
                <li>Applying light pedal inputs on the gas pedal can save fuel and prolong the CVT's useful life.</li>
            </ul>
        </div>
      )}
      
    </div>
  )
}

export default MaintenanceContent