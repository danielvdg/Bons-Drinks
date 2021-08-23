import React, { Component } from "react";
import style from "./style.module.css";

class Main extends Component {
  render() {
    return (
      <main className={style.mainImgPrincipal}>
        <div className={style.logo}>
          <p className={`${style.logoP1}`}>Bons Drinks</p>
        </div>
      </main>
    );
  }
}

export default Main;
