import React, { Component } from "react";
import style from "./style.module.css";


class Button extends Component {
  constructor(props){
    super(props)
    
  }
  componentDidMount(){
    console.log('fui iniciado')

  }
  componentDidUpdate(){
   console.log('fui atualizado');
   
  }
  componentWillUnmount(){
    console.log('fui desmontado');

  }
  testeButton= () =>{
    console.log('funcionando');
   
  }

  render() {
    return (
      <button className={`${style.btn}`} onClick={this.testeButton} >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
