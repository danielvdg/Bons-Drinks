import React, { Component } from "react";
import Sobre from "../../components/Sobre";
import style from './style.module.css'
class SobrePage extends Component {
  render() {
    return (
      <section className={style.sobreConteiner}>
        <Sobre/>
      </section>
    );
  }
}

export default SobrePage;
