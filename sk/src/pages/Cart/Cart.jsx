import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, food_list, removeFromCart ,gettotalCartAmount,url} = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className='cart'>
    <div className='cart-item'>
      <div className='cart-item-title'>
       <p>Item</p>
       <p>Title</p>
       <p>Price</p>
       <p>Quantity</p>
       <p>Total</p>
       <p>Remove</p>
      </div>
      <br/>
      <hr/>
      {food_list?.map((item,index)=>{
        if(cartItems && cartItems[item._id] > 0)
        {
          return(
            <div>
              <div className='cart-item-title cart-item-item'>
              <img src={url+"/images/"+item.image} alt=''/>
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>{item.price*cartItems[item._id]}</p>
                 <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
            </div>
            <hr/>
            </div>
          )
        }
      })}
    </div>
      <div className="cart-bottom">
        <div className="cart-total">
         <h2>Cart Total</h2>
         <div>
          <div className="cart-total-detils">
            <p>Subtotal</p>
            <p>${gettotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-detils">
            <p>Delivery Free</p>
            <p>${gettotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-detils">
            <b>Total</b><b>${gettotalCartAmount()===0?0:gettotalCartAmount()+2}</b>
          </div>
         </div>
         <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You a promo code, Entery it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
