import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";



const Pages = () => {
  return (
    <div>
        <>
      
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/services' Component={Services} />
          <Route exact path='/blog' Component={Blog} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
        <Footer />
    </>
    </div>
  )
}

export default Pages
