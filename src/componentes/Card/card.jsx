import React from "react";
import pokebola from "../../poke2.jfif"
import style from "./card.module.css"


export default function Card({name, image, types}){
    
    
    return(
       <div className={style.container}>
            <div className={style.card}>
               <h2 className={style.name}>{name}</h2>
               {image? <img src={image} alt={name} className={style.img}/> : <img className={style.img} src={pokebola} alt="imagen de poke" /> }
               {/* <img src={image} alt={name} className={style.img}/> */}
               <p className={style.type}>{types}</p>
            </div>    
        </div>
    )}