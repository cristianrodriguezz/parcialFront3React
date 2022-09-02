import Button from './Button'
import { Component } from 'react'
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.stock
    };
    
  }
  
  restarStock = () => {
    this.setState({
      value: this.logica()
    })
    console.log("apretaste el boton");
    this.props.sumarCarrito();
  }

  logica = (e) => {
    e = this.state.value
    if( e > 1 ){
      let value = e - 1
      return value;
    }else{
    return "AGOTADO";
      }
  }
  
  render(){
  return (
    <div className='producto' >
      <h3>{this.props.nombre}</h3>
      <img 
        src={this.props.image}
        alt='zapatillas'/>
      <p>{this.props.descripcion}</p>
      <h5>En stock <span>{this.state.value}</span></h5>
      {
      this.state.value === "AGOTADO" 
      ? 
      <Button clase="buttonDisable" disabled={true} restarStock={this.restarStock}>SIN STOCK</Button>
      : 
      <Button  disabled={false} restarStock={this.restarStock}>Comprar</Button> 
      }
      
    </div>
    
  )
}}
export default Item
