// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';

 const router = createBrowserRouter([{
    path :"/",
    element: <HomePage/>
 },
 {
    
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />

)
