 import React from 'react'
import style from './Main.module.scss'
import ButtonMainOne from './Buttons/ButtonMainOne/ButtonMainOne'
import ButtonMainTwo from './Buttons/ButtonMainTwo/ButtonMainTwo'

const Main = () => {
  return (
    <div>
        <div className={style.Container}>
            <div className={style.Content}>
                <div className={style.ButtonRow}>
                    <div className={style.ButtonItem}>
                      <ButtonMainOne/>
                    </div>
                    <div className={style.ButtonItem}>
                      <ButtonMainTwo/>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Main