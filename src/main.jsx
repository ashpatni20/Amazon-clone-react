// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SectionProducts from "./pages/SectionProducts.jsx";
import { createContext, useState, useEffect } from "react";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "./firbase/firebase.jsx";

export const ProductContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <SectionProducts />,
  },
  {
    path: "/detailProducts",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const HandleContext = () => {
  const [products, setProduct] = useState();
  const [detailProduct, setDetailProduct] = useState();
  const [currUser, setCurrUser] = useState(null);

  const [cart, setCart] = useState([]);
  const [input, setInput] = useState("")
  const [searchVal, setSearchVal] = useState("")
  const [val, setVal] = useState("")
  

  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrUser(user);
    });

    return unsubscribe;
  });

  const logOut = () => {
    signOut(auth);
  };

  

  return (
    <ProductContext.Provider
      value={{
        products,
        setProduct,
        detailProduct,
        setDetailProduct,
        setCart,
        cart,
        currUser,
        setCurrUser,
        signWithGoogle,
        logOut,
        input, setInput,
        searchVal, setSearchVal,
        val, setVal,
      }}
    >
      <RouterProvider router={router} />
    </ProductContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<HandleContext />);
