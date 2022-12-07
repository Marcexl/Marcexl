import React, { Component } from "react";
import Header from './Header/Header';
import Marcexl from './Marcexl/Marcexl';
import About from './About/About';
import Services from './Services/Services';
import Squares from './Squares/Squares';
import Argentina from './argentina.png';
import Usa from './eeuu.png';
import './app.css';

class App extends Component {
  state = {
    isActive: false,
  };

  handleShow = () => {
    this.setState({ isActive: true });
  };

  handleHide = () => {
    this.setState({ isActive: false });
  };    

  render() {
    if (this.state.isActive) 
    {
      return (
          <>
          <img
            src={Argentina}
            alt="Avatar"
            className="lenguaje"
            onClick={this.handleHide}
          />
          <Header title="arg"/>
          <Marcexl title="arg"/>
          <About title="arg"/>
          <Services title="arg"/>
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
    } else {
      return (
          <>
          <img
            src={Usa}
            alt="Avatar"
            className="lenguaje"
            onClick={this.handleShow}
          />
          <Header title="eng"/>
          <Marcexl title="eng"/>
          <About title="eng"/>
          <Services title="eng"/>
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
    }
  }
}

export default App;