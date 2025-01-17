// App.js
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarListingsProvider } from './components/CarListingContext/CarListingsContext';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Review } from './pages/Review/Review';
import { Buying } from './pages/Buying/Buying';
/* import { Contact } from './pages/Contact/Contact'; */
/* import { Guide } from './pages/Guide/Guide'; */
/* import { Maintenance } from './pages/Maintenance/Maintenance'; */
/* import { Safety } from './pages/Safety/Safety'; */
/* import { Selling } from './pages/Selling/Selling'; */
import BuyingContent from './pages/Buying/BuyingContent';
import GuideContent from './pages/Guide/GuideContent';
/* import SellingContent from './pages/Selling/SellingContent'; */
/* import MaintenanceContent from './pages/Maintenance/MaintenanceContent'; */
/* import MakeMaintenance from './pages/Maintenance/MakeMaintenance'; */
import NotFound from './pages/404Page/NotFound';
import Model from './pages/Review/Model';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import CarListings from './pages/Marketplace/CarListings';
import VehicleDetails from './pages/Marketplace/VehicleDetails';
import Profile from './pages/Profile/profile';
import Coming from './pages/Coming/Coming';
/* import CarValuation from './pages/Valuation/CarValuation'; */
import VehicleMakes from './pages/Makes/VehicleMakes';
import Toyota from './pages/Toyota/Toyota';
import PradoGenerations from './pages/Toyota/Prado/PradoGenerations';
import PradoFirstGen from './pages/Toyota/Prado/firstGen';
import PradoSecondGen from './pages/Toyota/Prado/secondGen';
import Pradothirdgen from './pages/Toyota/Prado/thirdGen';
import PradoFourthGen from './pages/Toyota/Prado/fourthGen';
import PradoFifthGen from './pages/Toyota/Prado/fifthGen';
import Rav4Generations from './pages/Toyota/Rav4/Rav4Generations';
import Rav4FirstGen from './pages/Toyota/Rav4/Rav4FirstGen';
import Rav4SecondGen from './pages/Toyota/Rav4/Rav4SecondGen';
import Rav4ThirdGen from './pages/Toyota/Rav4/Rav4ThirdGen';
import Rav4FourthGen from './pages/Toyota/Rav4/Rav4FourthGen';
import Rav4FifthGen from './pages/Toyota/Rav4/Rav4FifthGen';

function App() {
  const [selectedReview, setSelectedReview] = useState(null);


  return (
    <BrowserRouter>
      <CarListingsProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Review />} />
          {/* <Route path='/About' element={<About/>}/> */}
          <Route path='/About' element={<Profile/>}/>
          <Route path='/Makes' element={<VehicleMakes/>}/>
          <Route path='/Toyota' element={<Toyota/>}/>
          <Route path='/Toyota/prado' element={<PradoGenerations/>}/>
          <Route path='/Toyota/prado-1st-gen' element={<PradoFirstGen/>}/>
          <Route path='/Toyota/prado-2nd-gen' element={<PradoSecondGen/>}/>
          <Route path='/Toyota/prado-third-gen' element={<Pradothirdgen/>}/>
          <Route path='/Toyota/prado-fourth-gen' element={<PradoFourthGen/>}/>
          <Route path='/Toyota/prado-fifth-gen' element={<PradoFifthGen/>}/>
          <Route path='/Toyota/rav4' element={<Rav4Generations/>}/>
          <Route path='/Toyota/rav4-1st-gen' element={<Rav4FirstGen/>}/>
          <Route path='/Toyota/rav4-2nd-gen' element={<Rav4SecondGen/>}/>
          <Route path='/Toyota/rav4-3rd-gen' element={<Rav4ThirdGen/>}/>
          <Route path='/Toyota/rav4-4th-gen' element={<Rav4FourthGen/>}/>
          <Route path='/Toyota/rav4-5th-gen' element={<Rav4FifthGen/>}/>
          {/* <Route path='/Marketplace' element={<CarListings/>}/>  */}

          {/* <Route path='/Marketplace' element={<Coming/>}/> */}

          {/* <Route path='/car-details/:id:name' element={<VehicleDetails/>}/> */}
          <Route path='/car-details/:id/:nameSlug' element={<VehicleDetails/>}/>
          <Route path="/Buying" element={<Buying />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          {/* <Route path="/Guide" element={<Guide />} /> */}
          {/* <Route path="/Maintenance" element={<Maintenance />} /> */}
          {/* <Route path="/Safety" element={<Safety />} /> */}
          {/* <Route path="/Selling" element={<Selling />} /> */}
          {/* <Route path="/Valuation" element={<CarValuation />} /> */}
          {/* <Route path="/buying-guide/:route" element={<BuyingContent />} /> */}
          <Route path="/guides/:route" element={<GuideContent />} />
          {/* <Route path="/selling-guide/:route" element={<SellingContent />} /> */}
          {/* <Route path="/maintenance-guide/:route" element={<MaintenanceContent />} /> */}
          {/* <Route path="/make-maintenance" element={<MakeMaintenance />} /> */}
          <Route path="/model/:id" element={<Model selectedReview={selectedReview} onClose={() => setSelectedReview(null)}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </CarListingsProvider>
    </BrowserRouter>
  );
}

export default App;
