import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import './App.css';

function App() {
  return (
    <>
      
      <Router>
      <Header/>
        <Routes>
           <Route path = "/" exact element = {<ProductList />} />
           {/* <Route path = "/about" exact element = {<About />} />
           <Route path = "/about" exact element = {<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
