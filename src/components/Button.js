import React, { Component } from "react";

class Botton extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  
  render() {
    return <button className={this.props.clase} disabled={this.props.disabled} onClick={this.props.restarStock}>{this.props.children}</button>;
  }
}

export default Botton;
