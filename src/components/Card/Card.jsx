import React, { Component } from 'react';
import  style from './style.module.css';
class Card extends Component {
    render(){
        return(
            <section className={style.cardConteiner}>
                <img className={style.cardImg} src={this.props.imagem} alt='imagem dos Drinks'/>
                <p>{this.props.titulo}</p>
            </section>
        )
    }
}

export default Card;
