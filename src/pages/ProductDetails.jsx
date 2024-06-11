// import React from 'react'

import { useContext } from "react"
import { ProductContext } from "../main";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
   const {detailProduct} = useContext(ProductContext);
   console.log(detailProduct);
  return (
    <>
    <Navbar/>
      <div>
         <div key={detailProduct.asin} className="max-w-[250px] border border-slate-200 p-4 ">
            <img className="w-[250px]   " src={detailProduct.product_photo} alt="" />
            <p>{detailProduct.product_title.slice(0, 100)+"..."}</p>
            <p>Ratings:{detailProduct.product_star_rating}</p>
            <p><span>{detailProduct.product_price}</span></p>
            <p>{detailProduct.coupon_text}</p>
            
          </div>

    </div>
    </>
  
  )
}

export default ProductDetails