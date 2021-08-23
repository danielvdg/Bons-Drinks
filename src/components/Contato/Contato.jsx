import React, { Component } from "react";
import style from "./style.module.css";
import imgMainContato from "../../img/contact-pic.jpg";
import Form from "../Form";
class Contato extends Component {
  render() {
    return (
      <section className={style.contatoConteiner}>
        <h1 className={`${style.contatoTitle} ${style.title}`}>
        Contato
        </h1>
        <div>
        <img className={style.half1} src={imgMainContato} alt='imagem decorativa'/>

        </div>
        <Form></Form>
      </section>
    );
  }
}

export default Contato;
