import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './hoc/layout/Layout';

import Home from './containers/home/Home';
import Auth from './containers/auth/Auth';
import Contacts from './containers/contacts/Contacts';
import Footer from './components/footer/Footer';


const app = () => {
  let routes = null;
  console.log(routes)
  return (
    <div className="App">
      <Layout />
      <Routes>
        < Route path="/" element={<Home />}/>
        < Route path="/auth" element={<Auth />}/>
        < Route path="/customer-service" element={<Contacts />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default app;
