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

  console.log(products)


  const handleSortByName = () => {
    let arr = [...products];

    let update = arr.sort((a, b) => {
        return a.product_title.localeCompare(b.product_title);
    });

    // console.log(update);
    setProduct(update);
}


  const handleSortByRating = () => {
    let arr = [...products];

    let update = arr.sort((a, b) => {
        return b.product_star_rating.localeCompare(a.product_star_rating);
    });

    setProduct(update);
  }

  const handleSortByPrice = () => {
    let arr = [...products];

    let update = arr.sort((a, b) => {
        if (a.unit_price && b.unit_price) {
            let priceA = parseFloat(a.unit_price.replace('$', ''));
            let priceB = parseFloat(b.unit_price.replace('$', ''));

            return priceA - priceB;
        } else {
            return 0;
        }
    });

    console.log(update);
}


  return (
    <>
    {/* <Navbar/> */}
    <Header />
    <>
    <div className="ml-[10%] flex gap-3">
    <button onClick={handleSortByName}>Sort by name</button>
    <button onClick={handleSortByRating}>Sort by rating</button>
    {/* <button onClick={handleSortByPrice}>Sort by price</button> */}
    </div>
    <div className=" flex flex-wrap gap-10 justify-center  ">
    
      {products.map((element)=>{
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
    </>
  )
}

export default SectionProducts