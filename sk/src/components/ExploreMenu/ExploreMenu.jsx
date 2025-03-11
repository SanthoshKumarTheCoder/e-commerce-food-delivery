// import React from 'reaexplore-menu-textct'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category,setCategory})  {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className=''>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is  to satisfy your craving and elevate your dining exprience, one delicious meal at a time.</p>
    <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
         return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-item'>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='explore-menu-img'/>
            <p>{item.menu_name}</p>
            </div>
         )
        })}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreMenu
