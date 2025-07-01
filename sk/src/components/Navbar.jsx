import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

function Navbar({setShowLogin}) {
    const [menu,setMenu] = useState("home");
    const {gettotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate();
  
      
    const logout=()=>{
  localStorage.removeItem("token");
  setToken("");
navigate("/")

    }
  
  return (
    <div className='navbar'>
     <Link to='/'> <img src={assets.logo_1} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/'  onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact Us</a>
      </ul>
      <div className="navebar-right">
     
        <div className="navbar-search-icon">
           <Link to='Cart'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></Link> 
            <div className={gettotalCartAmount()===0?"":"dot"}></div>
        </div>
        {/* <img src={assets.basket_icon} alt="" className="basketicon" /> */}
        {!token?<button onClick={()=>setShowLogin(true)} className='navbar-button'>sign in</button>:<div className='navbar-profile'>
          <img src={assets.userimg} className='userimg-11' alt=''/>
           <img src={assets.profile_image} alt="" />
          <ul className='nav-profile-dropdown'>
            <li onClick={()=>navigate('/myorder')}> <img src={assets.bag_icon} alt=''/><p>orders</p></li>
            <hr/>
            <li onClick={logout}> <img src={assets.logout_icon} alt=''/><p>Logout</p></li>
            <hr/>
    
            
       
          </ul>
         </div>
        }
       
      </div>
    </div>
  )
}

export default Navbar
