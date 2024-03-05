import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Review } from './pages/Review/Review';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Review/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
