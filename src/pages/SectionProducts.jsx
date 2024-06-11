// import React from 'react'
import { useContext } from "react"
// import { } from "../utils/data"
import { ProductContext } from "../main";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const SectionProducts = () => {
  
  const {products, setDetailProduct} = useContext(ProductContext);
  const navigate = useNavigate();

  if(!products){
    return
  }
  const handleDetailProduct=(data)=>{
    setDetailProduct(data)
    navigate("/detailProducts");
  }
  return (
    <>
    <Navbar/>
    <div className=" flex flex-wrap gap-10 justify-center  ">
      {products.map((element)=>{
        // console.log(element);zZ
        return(
          <div onClick={()=>handleDetailProduct(element)} key={element.asin} className="max-w-[250px] border border-slate-200 p-4 ">
            <img className="w-[250px]   " src={element.product_photo} alt="" />
            <p>{element.product_title.slice(0, 100)+"..."}</p>
            <p>Ratings:{element.product_star_rating}</p>
            <p><span>{element.product_price}</span></p>
            <p>{element.coupon_text}</p>
            
          </div>
        )
      })}
        
    </div>
    </>
  )
}

export default SectionProducts