import React from "react";
import style from "./paginado.module.css"

export default function Paginado({pokePage, allPokemons, paginado}){
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(allPokemons/pokePage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className={style.paginado}>
            <nav>
                <ul className={style.ul}>
                    {
                        pageNumbers &&
                        pageNumbers.map(number =>(
                            <li key={number} className={style.li}>
                                <a  onClick={() => paginado(number)} className={style.a}>{number}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )


}