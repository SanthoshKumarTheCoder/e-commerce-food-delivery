import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

function Verify() {

    const [searchParams,setSearchParams]=useSearchParams();
    const success =searchParams.get("success")
    const orderId =searchParams.get("orderId")
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
const verifyPament=async()=>{
    const response=await axios.post(url+"/api/order/verify",{success,orderId})
if (response.data.success) {
    navigate("/myorder")
}
else{
    navigate("/")
}
}
useEffect(()=>{
    verifyPament();
},[])
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default Verify


