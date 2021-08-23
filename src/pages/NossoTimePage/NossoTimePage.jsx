import React, { Component } from "react";
import NossoTime from "../../components/NossoTime";
import style from './style.module.css'
class NossoTimePage extends Component {
  render() {
    return (
      <section className={style.nossoTimeConteiner}>
        <NossoTime></NossoTime>
      </section>
    );
  }
}

export default NossoTimePage;
