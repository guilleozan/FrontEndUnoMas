// import logo from './logo.svg';
import './App.css';
import './styles/nav.css'
import WebFont from 'webfontloader'; // Fuentes de google
import 'bootstrap/dist/css/bootstrap.min.css'; //Boostrap
import 'bootstrap-icons/font/bootstrap-icons.css';


// import axios from 'axios';


import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";

import { Accordion, Card } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { Offcanvas } from 'bootstrap';

import HomePage from './pages/HomePage';
import DestinosPage from './pages/DestinosPage';
import NovedadesPage from './pages/NovedadesPage';
import GaleriaPage from './pages/GaleriaPage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import AboutPage from './pages/AboutPage';




function App() {
  return (
    
    <div className="App">
      <Router>
         <Header/>
         <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/destinos" exact component={DestinosPage} />
            <Route path="/servicios" exact component={ServiciosPage} />
            <Route path="/novedades" exact component={NovedadesPage} />
            <Route path="/galeria" exact component={GaleriaPage} /> 
            <Route path="/contacto" exact component={ContactoPage} /> 
            
            <Route path="/about"  component={AboutPage} /> 
          </Switch>
        <Footer/>
      
    
        
      </Router>
   </div>
  );
}
WebFont.load({//fuentes de google
  google: {
    families: [ 'Monoton', 'Gloria Hallelujah','Staatliches','cursive','Rubik Distressed']
  }
});

export default App;

