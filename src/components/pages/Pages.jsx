import React from 'react';
import {Routes, Route } from "react-router-dom";
import home from "../home/home";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import about from "../about/about";
import blog from "../blog/blog";
import Services from "../services/Services";
import contact from "../contact/contact";



const Pages = () => {
  return (
    <div>
        <>
      
        <Header />
        <Routes>
          <Route exact path='/' Component={home} />
          <Route exact path='/about' Component={about} />
          <Route exact path='/services' Component={Services} />
          <Route exact path='/blog' Component={blog} />
          <Route exact path='/contact' Component={contact} />
        </Routes>
        <Footer />
    </>
    </div>
  )
}

export default Pages
