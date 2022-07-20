import React from 'react'
import style from './ButtonOne.module.scss'
import Alignment from '../../Assets/img/Alignment.png'



const ButtonOne = () => {
  return (
    <div>
        <button className={style.ButtonOne}><span>Download CV <img src={Alignment} alt="Alignment" width={20}/></span></button>    
    </div>
  )
}

export default ButtonOne

