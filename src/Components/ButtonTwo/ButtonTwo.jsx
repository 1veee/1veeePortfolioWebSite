import React from 'react'
import style from './ButtonTwo.module.scss'



// const btn = document.querySelector('.ButtonTwo');
// btn.onmousemove = function(e){
//     const x = e.pagex - btn.offsetLeft;
//     const y = e.pageY - btn.offsetTop;

//     btn.style.setProperty('--x', x + 'px');
//     btn.style.setProperty('--y', y + 'px');
// }




const ButtonTwo = () => {
  return (
    <div>
        <button className={style.ButtonTwo}><span>Contact me</span></button>
    </div>
  )
}

export default ButtonTwo