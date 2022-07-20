import React from 'react'
import style from './Fact.module.scss'
import ButtonOne from '../ButtonOne/ButtonOne'
import ButtonTwo from '../ButtonTwo/ButtonTwo'


const Fact = () => {
  return (
    <div>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.TextRow}>
                    <div className={style.TextItem}>
                        5 <br/>Months of work <br/>experience
                    </div>
                    <div className={style.TextItem}>
                        1<br/> Completed <br/>projects
                    </div>
                    <div className={style.TextItem}>
                        1 <br/>Satisfied <br/>customers
                    </div>
                </div>
                <div className={style.ButtonCon}>
                    <div className={style.ButtonItem}><ButtonOne/></div>
                    <div className={style.ButtonItem}><ButtonTwo/></div> 
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Fact