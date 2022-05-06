import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './hoc/layout/Layout';
import Footer from './components/footer/Footer';
import Home from './containers/home/Home';
import Contacts from './containers/contacts/Contacts';
import Signin from './containers/signin/signin';
import Signup from './containers/signup/signup';
import Items from './containers/items/items';



const app = () => {
  
  return (
    <div className="App">
      <Layout />
      <Routes>
        < Route path="/" element={<Home />}/>
        <Route path="/items/:id" element={<Items />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        < Route path="/customer-service" element={<Contacts />}/>
        < Route path="/cardItem" element={<Contacts />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default app;
