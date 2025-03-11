import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidbar from './components/Sidbar/Sidbar'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   const url="http://localhost:5008"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidbar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
