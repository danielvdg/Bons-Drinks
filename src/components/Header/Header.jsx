import React,{Component} from 'react'
import { Link } from "react-router-dom";
import style from './style.module.css'
class Header extends Component{
    render(){
        return(
            <header className={style.headerMenuConteiner}>
                <ul className={style.headerAbasLista}>
                    
                    <Link to='/drinks' className={style.headerAbasItem}>Drinks</Link>
                    <Link to='/sobreNos' Link className={style.headerAbasItem}>Sobre Nós</Link>
                    <Link to='/'className={`${style.headerAbasItem} ${style.headerLogo}`}>Bons Drinks</Link>
                    <Link to='/nossoTime' className={style.headerAbasItem}>Nosso Time</Link>
                    <Link to='/contato' className={style.headerAbasItem}>Contato</Link>
                    
                </ul>
                
            </header>
        )
    }
}

export default Header;