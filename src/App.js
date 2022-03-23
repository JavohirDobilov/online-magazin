import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductCard from "./components/ProductCard/ProductCard";
import Aksiya from "./components/Aksiya/Aksiya"

function App() {
  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
