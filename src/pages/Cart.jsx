import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ProductContext } from "../main";
import CartCard from "../components/CartCard";
import BillSection from "../components/BillSection";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addCount = (id) => {
    let index = cart.findIndex((ele) => {
        return ele.asin === id
    })

    if (index !== -1) {
        const updatedCart = [...cart];
        updatedCart[index] = { ...updatedCart[index], count: updatedCart[index].count + 1 }; 
        setCart(updatedCart); 
    }
  }

  const removeCount = (id) => {
    let index = cart.findIndex((ele) => {
        return ele.asin === id
    })

    if (index !== -1) {
        const updatedCart = [...cart];
        updatedCart[index] = { ...updatedCart[index], count : updatedCart[index].count > 1 ? updatedCart[index].count - 1 : 1 }; 
        setCart(updatedCart); 
    }
  }

  const removeItem = (id) => {
    let newCart = cart.filter((ele) => {
        return ele.asin !== id
    })

    setCart(newCart)
  }

  return (
    <>
      <Navbar />
      {cart.length === 0 ? (
        <h1 className="text-3xl font-bold text-center">Cart is empty</h1>
      ) : (
        <div>
        <div>
          {cart.map((ele) => {
            return <CartCard key={ele.asin} data={ele} addCount={addCount} removeCount={removeCount} removeItem={removeItem}/>;
          })}
        </div>
          <BillSection />
        </div>
      )}
    </>
  );
};

export default Cart;
