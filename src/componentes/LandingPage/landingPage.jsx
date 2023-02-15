import React from 'react';
import {Link} from 'react-router-dom';
import imageLanding from "./imageLanding.png"
import style from "./landing.module.css"

export default function LandingPage (){
    return( 
        <div className={style.fondo}>
            <Link to='/home'>
                    <img src={imageLanding} alt="btn image" className={style.btn}/>
            </Link>
        </div>
    
    )
    
}