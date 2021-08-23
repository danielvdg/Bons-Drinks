import React, { Component } from "react";
import style from "./style.module.css";
import daniel from "../../img/Daniel.jpg";
import { ReactComponent as GuardaInfo  } from "../../svg/chevron_right_black_24dp.svg";
// import { ReactComponent as MostraInfo  } from "../../svg/chevron_right_black_24dp.svg";

class NossoTime extends Component {
  //  mostraInfo = () =>{
  //   console.log('funcionando');
  //   return    
  //  } 
  render() {
    return (
      <section className={style.timeConteiner}>
        <h1 className={`${style.title} ${style.timeGridTitle}`}>Nosso Time</h1>
        <div className={style.item}>
          <article className={style.infoEquipe}>
            <div>
              <img
                className={style.item1}
                src={daniel}
                alt="imagem decorativa"
              />
            </div>
            <div className={style.infoEquipeDescricao}>
            <h1 className={style.nomeEquipe}>Danie Alves</h1>
            <GuardaInfo onClick={this.mostraInfo} className={style.btnInfo} /><br/>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolor voluptatum provident perspiciatis earum quae culpa, odit
            quasi fugiat praesentium ex, adipisci velit consequuntur rem eum
            assumenda dolore quod itaque?
           </p>
            </div>
                        
          </article>
        </div>
        <div className={style.item}>
          <article className={style.infoEquipe}>
            <div>
              <img
                className={style.item1}
                src={daniel}
                alt="imagem decorativa"
              />
            </div>
            <div className={style.infoEquipeDescricao}>
            <h1 className={style.nomeEquipe}>Danie Alves</h1>
            <GuardaInfo onClick={this.mostraInfo} className={style.btnInfo} /><br/>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolor voluptatum provident perspiciatis earum quae culpa, odit
            quasi fugiat praesentium ex, adipisci velit consequuntur rem eum
            assumenda dolore quod itaque?
           </p>
            </div>
                        
          </article>
        </div>
        <div className={style.item}>
          <article className={style.infoEquipe}>
            <div>
              <img
                className={style.item1}
                src={daniel}
                alt="imagem decorativa"
              />
            </div>
            <div className={style.infoEquipeDescricao}>
            <h1 className={style.nomeEquipe}>Danie Alves</h1>
            <GuardaInfo onClick={this.mostraInfo} className={style.btnInfo} /><br/>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolor voluptatum provident perspiciatis earum quae culpa, odit
            quasi fugiat praesentium ex, adipisci velit consequuntur rem eum
            assumenda dolore quod itaque?
           </p>
            </div>
                        
          </article>
        </div>
        <div className={style.item}>
          <article className={style.infoEquipe}>
            <div>
              <img
                className={style.item1}
                src={daniel}
                alt="imagem decorativa"
              />
            </div>
            <div className={style.infoEquipeDescricao}>
            <h1 className={style.nomeEquipe}>Danie Alves</h1>
            <GuardaInfo onClick={this.mostraInfo} className={style.btnInfo} /><br/>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolor voluptatum provident perspiciatis earum quae culpa, odit
            quasi fugiat praesentium ex, adipisci velit consequuntur rem eum
            assumenda dolore quod itaque?
           </p>
            </div>
                        
          </article>
        </div>
        
      </section>
    );
  }
}

export default NossoTime;
