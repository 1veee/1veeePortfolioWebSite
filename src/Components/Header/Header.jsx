import React from 'react'
import style from './Header.module.scss'
import GitHubImg from '../../Assets/img/github.png'
import InstagramImg from '../../Assets/img/INSTAGRAM.png'
import DiscordImg from '../../Assets/img/discord.png'
import LinkedinImg from '../../Assets/img/linkedin.png'

const Header = () => {
  return (
    <div>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style['content-row']}>
                    <div className={style.img}></div>
                    <div className={style.txt}>
                        <div className={style.Tittle}>Ivan Udovichenko</div>
                        <div className={style.SubTittle}>Junior Front-end Developer</div>
                        <div className={style.IconConteiner}>
                            <div className={style.ico}>
                                <img src={GitHubImg} alt="GitHub" width={32} height={32}/>
                            </div>
                            <div className={style.ico}>
                                <img src={InstagramImg} alt="Instagram" width={32} height={32} />
                            </div>
                            <div className={style.ico}>
                                <img src={DiscordImg} alt="Discord"width={32} height={32} />
                            </div>
                            <div className={style.ico}>
                                <img src={LinkedinImg} alt="Linkedin" width={32} height={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Header