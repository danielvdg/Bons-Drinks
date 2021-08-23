import React, { Component } from "react";
import Drinks from "../../components/Drinks";
import style from './style.module.css'
class DrinksPage extends Component {
  render() {
    return (
      <section className={style.drinkConteiner}>
        <Drinks/>
      </section>
    );
  }
}

export default DrinksPage;
