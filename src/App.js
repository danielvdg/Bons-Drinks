//import do React
import React, { Component } from "react";
//import do React Route
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import do css
import "./assets/index.css";
import style from "./assets/App.module.css";
//import da pages
import HomePage from "./pages/HomePage/HomePage";
import ContatoPage from "./pages/ContatoPage/ContatoPage";
import SobrePage from "./pages/SobrePage/SobrePage";
import DrinksPage from "./pages/DrinksPage/DrinksPage";
import TimePage from "./pages/NossoTimePage/NossoTimePage";

//import dos Componets
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <Router>
        <section className={style.appConteiner}>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/drinks" exact component={DrinksPage}/>
            <Route path="/sobreNos" exact component={SobrePage}/>
            <Route path="/nossoTime" exact component={TimePage}/>
            <Route path="/contato*" exact component={ContatoPage}/>
          </Switch>
          <Footer/>
        </section>
      </Router>
    );
  }
}

export default App;
