import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/Footer";
import Footer from "../common/Header";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";



const Pages = () => {
  return (
    <div>
        <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
    </div>
  )
}

export default Pages
