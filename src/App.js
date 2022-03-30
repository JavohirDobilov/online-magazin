import React, { useLayoutEffect, useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./pages/ProductsList/ProductsList"
import HomePage from "./pages/HomePage/HomePage";
import ProductCard from "./components/ProductCard/ProductCard";
import Aksiya from "./components/Aksiya/Aksiya"
import OrdersPage from "./pages/MyOrdersPage/OrdersPage";

function App() {

  const [scroll, setScroll] = useState(false)

  useLayoutEffect(()=>{
    const handleScroll =()=> {
      setScroll(window.scrollY>0)
    }
    window.addEventListener("scroll", handleScroll)

    return () =>window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <>
      <Header scroll={scroll}/>
      
      <HomePage/>
      <ProductsList/>
      <OrdersPage/>
      <Footer/>
    </>
  );
}

export default App;
