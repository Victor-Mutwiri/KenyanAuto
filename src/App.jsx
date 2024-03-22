import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Review } from './pages/Review/Review';
import { Buying } from './pages/Buying/Buying';
import { Contact } from './pages/Contact/Contact';
import { Guide } from './pages/Guide/Guide';
import { Maintenance } from './pages/Maintenance/Maintenance';
import { Safety } from './pages/Safety/Safety';
import { Selling } from './pages/Selling/Selling';
import ModelReview from './components/ReviewDetails';
import BuyingContent from './pages/Buying/BuyingContent';
import GuideContent from './pages/Guide/GuideContent';
import SellingContent from './pages/Selling/SellingContent';
import MaintenanceContent from './pages/Maintenance/MaintenanceContent';
import MakeMaintenance from './pages/Maintenance/MakeMaintenance';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Review/>} />
        <Route path="/Buying" element={<Buying/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Guide" element={<Guide/>} />
        <Route path="/Maintenance" element={<Maintenance/>} />
        <Route path="/Safety" element={<Safety/>} />
        <Route path="/Selling" element={<Selling/>} />
        <Route path="/review-details/:id" element={<ModelReview/>} />
        <Route path="/buying-guide/:route" element={<BuyingContent/>}/>
        <Route path="/guides/:route" element={<GuideContent/>}/>
        <Route path="/selling-guide/:route" element={<SellingContent/>}/>
        <Route path="/maintenance-guide/:route" element={<MaintenanceContent/>}/>
        <Route path="/make-maintenance" element={<MakeMaintenance/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
