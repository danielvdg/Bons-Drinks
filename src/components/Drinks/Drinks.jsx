import React, { Component } from "react";
import style from "./style.module.css";
import Card from "../Card";

class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount() {
    console.log("Fui Iniciado");
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => response.json())
      .then((json) => {
        return this.setState({ drinks: json.drinks });
      });
  }
  render() {
    return (
      <section className={`${style.drinksConteiner} ${style.title}`}>
        <h1 className={style.drinksTitulo}>Drinks</h1>
        {this.state.drinks.map((item, index) => {
          return (
              <section >
                <div className={style.drinkContent} >
                <Card 
                    className={style.drinkItens}
                    key={index}
                    imagem={item.strDrinkThumb}
                    titulo={item.strDrink}
                />
                </div>               
              </section>
           
            
            
          );
        })}
      </section>
    );
  }
}

export default Drinks;
