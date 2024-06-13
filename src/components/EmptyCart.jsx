import { useContext, useEffect } from "react";
import { ProductContext } from "../main";

const EmptyCart = () => {
  const { setCart, currUser } = useContext(ProductContext);
  // console.log(currUser)

  useEffect(() => {
    if(currUser) setCart(JSON.parse(localStorage.getItem(currUser.uid)));
  },[currUser])

  // 

  return (
    <div className="flex justify-center items-center">
      <img className="max-w-[40%]" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"/>
      <h1 className="text-3xl font-medium text-center">Your cart is empty login to see</h1>
    </div>
  )
}

export default EmptyCart
