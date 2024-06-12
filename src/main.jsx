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
import { createContext, useState } from "react";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";

export const ProductContext = createContext();


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <SectionProducts />,
  },
  {
    path:"/detailProducts",
    element:<ProductDetails/>,
  },
  {
    path:"/cart",
    element: <Cart />
  }
]);

const HandleContext = () => {
  const [products, setProduct] = useState();
  const [detailProduct, setDetailProduct] = useState();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  return (
    <ProductContext.Provider value={{products, setProduct, detailProduct, setDetailProduct, setCart, cart}}>
      <RouterProvider router={router} />
    </ProductContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<HandleContext />);
