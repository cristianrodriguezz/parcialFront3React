// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import React from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { Component } from "react"

class App extends Component {
  constructor(){
    super();
    this.state = {
      carrito : 0
    }

  }
  sumarCarrito = () => {
    this.setState ({
        carrito: this.state.carrito + 1
      })
    console.log("sumar al carrito");
  }


  render(){
  return (
    <div className="App">
      <Cabecera carrito = {this.state.carrito}/>
      <Listado sumarCarrito={this.sumarCarrito}/>
    </div>
  );
}
}

export default App;
