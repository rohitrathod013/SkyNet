import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Products from './pages/ProductsPage'
import contact from './pages/ContactPage'
import singleproduct from './pages/SingleProductPage'
import cart from './pages/CartPage'
import Default from './pages/DefaultPage' 

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Sidecart from './components/Sidecart'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage/Login' 
import orderDetails from './context/orderdetails';



class App extends Component {
  render(){
    return (
      <>
      <Navbar/>
      <Sidebar/>
      <Sidecart/>
      {/*nav bar */}
      <Switch>
        <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={contact} />
          <Route path="/cart" component={cart} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={singleproduct} />
          <Route path="/login" component={LoginPage} /> 
          <Route path="/orderDetails" component={orderDetails} /> 
          <Route component={Default} />
      </Switch>

      <Footer/>
       
      </>
    );
  }
  
}

export default App;
