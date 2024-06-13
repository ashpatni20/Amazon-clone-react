import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ProductContext } from "../main";
import CartCard from "../components/CartCard";
import BillSection from "../components/BillSection";
import Header from "../components/Header";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cart, setCart, currUser } = useContext(ProductContext);

  useEffect(() => {
    if(currUser) localStorage.setItem(currUser.uid, JSON.stringify(cart))
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
      {/* <Navbar /> */}
      <Header />
      {cart == null  || cart?.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="bg-slate-200 flex flex-auto justify-around">
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
