import React,{Component} from 'react'
import style from './style.module.css'
class Footer extends Component{
    render(){
        return(
            <footer className={style.footerConteiner}>
                <p className={style.footerP}>Direitos Reservados - Resilia 2021©</p> 
            </footer>
        )
    }
}

export default Footer;