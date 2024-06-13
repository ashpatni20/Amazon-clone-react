// import React from 'react'
import { useContext, useEffect } from "react"
// import { } from "../utils/data"
import { ProductContext } from "../main";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../utils/useProduct";
import Loading from "../components/Loading";


const SectionProducts = () => {
  
  const {products, setDetailProduct, setProduct, searchVal, val} = useContext(ProductContext);

  console.log(val)

  const [data, loading, error] = useFetch(searchVal || val)
  
  const navigate = useNavigate();

  useEffect(() => {
    if(data.length > 0){
      setProduct(data)
    }
    
  }, [searchVal, data])

  if(!products){
    return
  }
  const handleDetailProduct=(data)=>{
    setDetailProduct(data)
    navigate("/detailProducts");
  }

  if(loading) {
    return (
      <>
      <Header />
        <Loading />
      </>
    )
  }
  return (
    <>
    {/* <Navbar/> */}
    <Header />
    <div className=" flex flex-wrap gap-10 justify-center  ">
      {products.map((element)=>{
        // console.log(element);zZ
        return(
          <div onClick={()=>handleDetailProduct(element)} key={element.asin} className="max-w-[250px] border border-slate-200 p-4 ">
            <img className="w-[250px] max-h-[300px] object-contain" src={element.product_photo} alt="" />
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