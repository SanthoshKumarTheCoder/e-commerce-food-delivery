
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Hom from './pages/Home/Hom';
import Placeholder from './pages/PlaceOrder/Placeholder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrder/MyOrder';


function App() {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Hom />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeholder />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorder' element={<MyOrders />} />
        
      </Routes>
    
    </div>
      <Footer/>
    </>
  );
}

export default App;
