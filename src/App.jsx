import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import SelectClothes from './pages/SelectClothes';
import Checkout from './pages/CheckoutPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<LandingPage/>} />
        <Route path ='/SelectClothes' element={  <SelectClothes />} />
        <Route path ='/Checkout' element={  <Checkout />} />
      </Routes>
    </Router>
    <Footer/>
    </>
)
  
}

export default App
