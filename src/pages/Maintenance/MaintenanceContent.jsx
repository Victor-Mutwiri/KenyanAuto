import { useParams } from 'react-router-dom';
import maintenanceGuide from './Maintenance.json';

const MaintenanceContent = () => {
    const { id } = useParams(); // Get the ID parameter from the URL
    const article = maintenanceGuide.find((article) => article.id === parseInt(id));
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} />
      {article.content.reputableCenters && (
        <div>
            <h3>reputableCenters</h3>
            <p>{article.content.reputableCenters}</p>
        </div>
      )}
      {article.content.servicingTypes && (
        <div>
            <h3>servicingTypes</h3>
            <p>{article.content.servicingTypes}</p>
        </div>
      )}
      {article.content.serviceRecords && (
        <div>
            <h3>serviceRecords</h3>
            <p>{article.content.serviceRecords}</p>
        </div>
      )}
      {article.content.drivingHabits && (
        <div>
            <h3>drivingHabits</h3>
            <p>{article.content.drivingHabits}</p>
        </div>
      )}
      {article.content.engineXdrivetrain && (
        <div>
            <h3>engineXdrivetrain</h3>
            <p>{article.content.engineXdrivetrain}</p>
        </div>
      )}
      {article.content.monitoring && (
        <div>
            <h3>monitoring</h3>
            <p>{article.content.monitoring}</p>
        </div>
      )}
      {article.content.tire && (
        <div>
            <h3>tire</h3>
            <p>{article.content.tire}</p>
        </div>
      )}
      {article.content.vehicleStorage && (
        <div>
            <h3>vehicleStorage</h3>
            <p>{article.content.vehicleStorage}</p>
        </div>
      )}
      {article.content.antitheftMeasures && (
        <div>
            <h3>antitheftMeasures</h3>
            <p>{article.content.antitheftMeasures}</p>
        </div>
      )}
      {article.content.inspection && (
        <div>
            <h3>inspection</h3>
            <p>{article.content.inspection}</p>
        </div>
      )}
      {article.content.warningSigns && (
        <div>
            <h3>warningSigns</h3>
            <p>{article.content.warningSigns}</p>
        </div>
      )}
      {article.content.vehicleFluids && (
        <div>
            <h3>vehicleFluids</h3>
            <p>{article.content.vehicleFluids}</p>
        </div>
      )}
      {article.content.vehicleFilters && (
        <div>
            <h3>vehicleFilters</h3>
            <p>{article.content.vehicleFilters}</p>
        </div>
      )}
      {article.content.lubrication && (
        <div>
            <h3>lubrication</h3>
            <p>{article.content.lubrication}</p>
        </div>
      )}
      {article.content.vehicleInspection && (
        <div>
            <h3>vehicleInspection</h3>
            <p>{article.content.vehicleInspection}</p>
        </div>
      )}
      {article.content.tireInspection && (
        <div>
            <h3>tireInspection</h3>
            <p>{article.content.tireInspection}</p>
        </div>
      )}
      {article.content.lightsInspection && (
        <div>
            <h3>lightsInspection</h3>
            <p>{article.content.lightsInspection}</p>
        </div>
      )}
      {article.content.emergencyInspection && (
        <div>
            <h3>emergencyInspection</h3>
            <p>{article.content.emergencyInspection}</p>
        </div>
      )}
      {article.content.restStops && (
        <div>
            <h3>restStops</h3>
            <p>{article.content.restStops}</p>
        </div>
      )}
      {article.content.emergencyPreparedness && (
        <div>
            <h3>emergencyPreparedness</h3>
            <p>{article.content.emergencyPreparedness}</p>
        </div>
      )}
      {article.content.genuineParts && (
        <div>
            <h3>genuineParts</h3>
            <p>{article.content.genuineParts}</p>
        </div>
      )}
      {article.content.expertConsultations && (
        <div>
            <h3>expertConsultations</h3>
            <p>{article.content.expertConsultations}</p>
        </div>
      )}
      {article.content.customModifications && (
        <div>
            <h3>customModifications</h3>
            <p>{article.content.customModifications}</p>
        </div>
      )}
    </div>
  )
}

export default MaintenanceContent