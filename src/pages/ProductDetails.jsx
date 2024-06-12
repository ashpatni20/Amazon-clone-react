// import React from 'react'

import { useContext } from "react";
import { ProductContext } from "../main";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { detailProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const { setCart, cart } = useContext(ProductContext);
  const stars = () => {
    let star = parseInt(detailProduct.product_star_rating);
    let ans = "";
    for (let i = 0; i < star; i++) {
      ans += "⭐️";
    }
    return ans;
  };

  const handleCart = () => {
    console.log(detailProduct);

    const productIndex = cart.findIndex(
      (item) => item.asin === detailProduct.asin
    );

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].count += 1;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...detailProduct, count: 1 }];
      setCart(updatedCart);
    }
    
    navigate("/cart")
  };
  return (
    <>
      <Navbar />
      <div>
        <div
          key={detailProduct.asin}
          className="border border-slate-200 p-4 flex"
        >
          <div className="w-[48%]">
            <img
              className="w-[80%] max-h-[70vh] object-contain"
              src={detailProduct.product_photo}
              alt=""
            />
          </div>
          <div className="w-[48%] p-4">
            <p className="text-2xl font-bold p-4">
              {detailProduct.product_title}
            </p>
            <p>
              <span className="text-xl font-bold p-4">
                {detailProduct.product_price}
              </span>
            </p>
            <p className="text-xl p-4">Ratings : {stars()}</p>
            <p className="text-xl p-4">{detailProduct.coupon_text}</p>
            <p className="text-sm p-4">{detailProduct.sales_volume}</p>

            <div className="w-[80%] m-auto pt-6">
              <button
                onClick={handleCart}
                className="w-full m-auto rounded-full p-4 text-xl font-bold bg-yellow-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
