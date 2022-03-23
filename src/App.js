import React, { useLayoutEffect, useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductCard from "./components/ProductCard/ProductCard";
import Aksiya from "./components/Aksiya/Aksiya"

function App() {

  const [scroll, setScroll] = useState(false)

  useLayoutEffect(()=>{
    const handleScroll =()=> {
      setScroll(window.scrollY>140)
    }
    window.addEventListener("scroll", handleScroll)

    return () =>window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <>
      <Header scroll={scroll}/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
