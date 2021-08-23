import React, { Component } from "react";
import Main from "../../components/Main";
import style from './style.module.css'
class HomePage extends Component {
  render() {
    return (
      <section className={style.homeConteiner} >
        <Main/>
      </section>
    );
  }
}

export default HomePage;
