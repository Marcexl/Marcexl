import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Marcexl from './Components/Marcexl/Marcexl';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Squares from './Components/Squares/Squares';
import './index.css';
import './responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Marcexl />
    <About />
    <Services />
    <div class="squares-container">
      <Squares id={1}/>
      <Squares id={2}/>
      <Squares id={3}/>
      <Squares id={4}/>
      <Squares id={5}/>
      <Squares id={6}/>
      <Squares id={7}/>
      <Squares id={8}/>
    </div>
  </>
);

