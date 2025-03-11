import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";

export  const StoreContext = createContext(null)

const StoreContextProvider =(props) =>{
const [cartItems,setCartItems]=useState({});
const url ='http://localhost:5008'
const [token,setToken]= useState("")
const [food_list,setFoodList]=useState([])
const addToCart = async (itemId) => {
    try {
        console.log("Adding item to cart:", itemId);

        // If the item is not in the cart, add it
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }));

        if (token) {
            const response = await axios.post(
                url + "/api/cart/add",
                { itemId },
                { headers: { Authorization: `Bearer ${token}` } } // ✅ Corrected token format
            );
            console.log("Cart update response:", response.data);

            if (!response.data.success) {
                console.error("Failed to add item:", response.data.message);
            }
        }
    } catch (error) {
        console.error("Error adding item to cart:", error);
    }
};

const removeFromCart = async(ItemId)=>{
    setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    if (token) {
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }

}
const gettotalCartAmount =()=>{
    let totalAmount =0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price* cartItems[item];
        }
    }
    return totalAmount
}

const fetchFoodList =async()=>{
    const response =await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
}
const loadCartData = async (token) => {
    try {
        if (!token) {
            alert("No token found, skipping cart data load.");
            return;
        }

        const response = await axios.post(url + "/api/cart/get", {}, {
            headers: { Authorization: `Bearer ${token}` }  
        });

        console.log("Cart Data Response:", response.data);  

        if (response.data && response.data.cartdata) {
            setCartItems(response.data.cartdata);
        } else {
            console.error("Unexpected cart data format:", response.data);
            setCartItems({});  
        }
    } catch (error) {
        console.error("Error loading cart data:", error);
        setCartItems({});  
    }
};

useEffect(()=>{
   
    async function loadData() {
        await fetchFoodList()
        if(localStorage.getItem("token"))
            setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
    }
    loadData()
},[])



    const contextValue ={
         food_list,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart,
         gettotalCartAmount,
         url,
         token,
         setToken,
         
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider