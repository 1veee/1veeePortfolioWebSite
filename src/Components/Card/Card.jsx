import React from 'react'
import style from './Card.module.scss'
import Card1 from '../../Assets/img/Rectangle1.png'
import Link from '../../Assets/img/link.png'
const Card = () => {
  return (
    <div>
        <div className={style.Content}>
          {/* Portfolio Card Creation Container */}
          <div className={style.CardRow}>
            {/* Card - 1 */}
            <div className={style.CardItem}>

              <div className={style.CardItem1}>
                <div className={style.Ohide}>
                  <h1>SmarterTrading411</h1>
                  <p>Landing page of SmarterTrading411 created <br/>
                      using wordPress</p>
                  <img src={Link} alt="" />
                </div>
              </div>

            </div>
            {/* Card - 2 */}
            <div className={style.CardItem}>
            <div className={style.CardItem2}>
                <div className={style.Ohide}>
                  <h1>SmarterTrading411</h1>
                  <p>Landing page of SmarterTrading411 created <br/>
                      using wordPress</p>
                  <img src={Link} alt="" />
                </div>
              </div>
            </div>

            {/* Card - 3 */}
            <div className={style.CardItem}>
            <div className={style.CardItem3}>
                <div className={style.Ohide}>
                  <h1>SmarterTrading411</h1>
                  <p>Landing page of SmarterTrading411 created <br/>
                      using wordPress</p>
                  <img src={Link} alt="" />
                </div>
              </div>
            </div>

            {/* Card - 4 */}
            <div className={style.CardItem}>
            <div className={style.CardItem4}>
                <div className={style.Ohide}>
                  <h1>SmarterTrading411</h1>
                  <p>Landing page of SmarterTrading411 created <br/>
                      using wordPress</p>
                  <img src={Link} alt="" />
                </div>
              </div>
            </div>

            {/* Card - 5 */}
            <div className={style.CardItem}>
            <div className={style.CardItem5}>
                <div className={style.Ohide}>
                  <h1>SmarterTrading411</h1>
                  <p>Landing page of SmarterTrading411 created <br/>
                      using wordPress</p>
                  <img src={Link} alt="" />
                </div>
              </div>
            </div>

            {/* Card - 6 */}
            <div className={style.CardItem}>
            <div className={style.CardItem6}>
                <div className={style.Ohide}>
                  <h1>SmarterTrading411</h1>
                  <p>Landing page of SmarterTrading411 created <br/>
                      using wordPress</p>
                  <img src={Link} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card