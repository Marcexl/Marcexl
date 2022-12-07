import React, { Component } from "react";
import Argentina from "./argentina.png";
import Usa from "./eeuu.png";

class Lenguaje extends Component {
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
    if (this.state.isActive) {
      localStorage.setItem('len','arg');
      return (
          <img
            src={Argentina}
            alt="Avatar"
            className="lenguaje"
            onClick={this.handleHide}
          />
      );
    } else {
      localStorage.setItem('len','eng');
      return (
          <img
            src={Usa}
            alt="Avatar"
            className="lenguaje"
            onClick={this.handleShow}
          />
      );
    }
  }
}

export default Lenguaje;
