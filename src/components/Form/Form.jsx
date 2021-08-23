import React, { Component } from 'react';
import Button from '../Button';
import style from './style.module.css'
class Form extends Component {
  
  render() { 

    return (  
      <form className={style.formularioForm}>
      <div className={style.formularioInputConteiner}>
       <label className={style.formularioLabel} for="name">Nome</label><br/>
      <input className={style.formularioInput} type="text" id="name" name="name" placeholder='Nome'/>
      </div>
      <div className={style.formularioInputConteiner}>
      <label  className={style.formularioLabel} for="email">Email</label><br/>
      <input className={style.formularioInput} type="email" id="email" name="email" placeholder='Email'/>
      </div>
      <div className={style.formularioInputConteiner}>
        <label  className={style.formularioLabel} for="mensagem">Mensagem</label><br/>
        <textarea className={style.formularioTextArea} name="mensagem" id="mensagem"   placeholder='Mensagem'></textarea>
      </div>
      <div className={style.formularioInputConteiner}>
        <Button>Enviar</Button>
      </div>

    </form>
    );
  }
}
 
export default Form;