import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { addFavourite, deleteFavourite, deletePoke, pokeDetail } from "../../actions";
import pokebola from "../../poke2.jfif"
import style from "./detail.module.css"
import NavBar from "../NavBar/navBar.jsx"
import gifPoke from "./gifPoke.gif"


export default function PokemonDetail(){
    const {id} = useParams();
    const dispatch = useDispatch()
    const myPokemon = useSelector((state) => state.detail)
    const history = useHistory();
    const favoritos = useSelector(state => state.favourite)
    const Fav = favoritos.find(p=> p.id.toString()  === id)
    // console.log("poke" , myPokemon)
    
    useEffect(() =>{
        dispatch(pokeDetail(id))
    }, [dispatch, id])

    function handleDelete(){
        dispatch(deletePoke(id))
        history.push("/home")
    }
    
    function handleFavourite(){
        
        if(!Fav){
            dispatch(addFavourite(myPokemon))
        }else{
            dispatch(deleteFavourite(id))
        }
        
    }


    return(
        <div className={style.container}>
            <NavBar/>
            {/* <Link to="/home">
                <button className={style.button}>Volver</button>
            </Link>
            <Link to={`/pokemons/${id}`}>
                <button>Modificar</button>
            </Link> */}
            {
                myPokemon.length > 0 ?
                
                <div>

                <div className={style.detail}>
                    {myPokemon[0].createInDb && (
                        <button onClick={() =>  handleDelete(id)}>X</button>
                        )}
                    <div className={style.izq}>
                        <h3 className={style.tit}>{myPokemon[0].name}</h3>
                        <div className={style.cel}>
                            <p>types: {myPokemon[0].types.map((t) => t)}</p>
                            <p>hp: {myPokemon[0].hp}</p>
                            <p>attack: {myPokemon[0].attack}</p>
                            <p>defense: {myPokemon[0].defense}</p>
                            <p>speed: {myPokemon[0].speed}</p>
                            <p>height: {myPokemon[0].height}</p>
                            <p>weight: {myPokemon[0].weight}</p>
                        </div>
                    </div>
                    </div>
                    <div className={style.image}>
                        {myPokemon[0].image? <img src={myPokemon[0].image} alt="imagen de poke" className={style.img}/> : <img src={pokebola} alt="imagen de poke" className={style.img}/> }
                    </div>
                     {/* <button onClick={handleFavourite}>
                            {
                                !Fav ?
                                <>Agregar a favoirtos</> :
                                <>Eliminar de favoritos</>
                            }
                        </button> */}
                </div> : 
                    <img src={gifPoke} alt="Cargando" className={style.gif}/>
            }
        </div>
    )
}

