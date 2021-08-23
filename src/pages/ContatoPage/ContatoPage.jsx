import React, { Component } from "react";
import Contato from "../../components/Contato";
import style from './style.module.css'

class ContatoPage extends Component {
  render() {
    return (
      <section className={style.contatoConteiner}>
        <Contato />
      </section>
    );
  }
}

export default ContatoPage;
