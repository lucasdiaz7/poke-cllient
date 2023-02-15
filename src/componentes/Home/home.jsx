import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { allPoke, attackOrder, filterCreate, filterTypes, getTypes, orderPoke } from "../../actions";
import Card from "../Card/card";
import Paginado from "../Paginado/paginado";
import NavBar from "../NavBar/navBar";
import SearchBar from "../SearchBar/searchBar";
import style from "./home.module.css"
import gifPoke from "../Detail/gifPoke.gif"

export default function Home(){
    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.poke)
    // console.log('allPoke', allPokemons)
    const allTypes = useSelector(s => s.types)
    // console.log('types', allTypes)
    const [order, setOrder] = useState("")


//------paginado----------
const [page, setPage] = useState(1);
const [pokePage, setPokePage ] = useState(12);
const lastPoke =  page * pokePage;
const firstPoke = lastPoke - pokePage;
const currentPoke = allPokemons.slice(firstPoke, lastPoke);

const paginado = (n) =>{
    setPage(n)
}


useEffect(() =>{
    dispatch(allPoke())
}, [])

function handleClick(e){
    e.preventDefault()
     dispatch(allPoke())
}

function handleCreate (e){
    dispatch(filterCreate(e.target.value))
}

useEffect(()=>{
    dispatch(getTypes())
}, [dispatch])

function handleFilterType(e){
    e.preventDefault()
    dispatch(filterTypes(e.target.value))
    setPage(1)
}

function handleOrder(e){
    e.preventDefault()
    dispatch(orderPoke(e.target.value))
    setPage(1)
    setOrder(e.target.value)
}
function handleAttack(e){
    e.preventDefault()
    dispatch(attackOrder(e.target.value))
    setPage(1)
    setOrder(e.target.value)
}

   


    return(
        <div>
            <div className={style.navb}>
                <NavBar/>
            </div>
                {/* <Link to={"/pokemons"}><button>Crea tu pokemon</button></Link> */}
                <div className={style.gralSelec} >
                   
                    {/* <button onClick={e => handleClick(e)}>BACK</button> */}
                    <select name="order" onChange={e => handleOrder(e)} className={style.selec}>
                        <option value="order">ALPHABETICALLY</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>
                    <select name="order" onChange={e => handleAttack(e)} className={style.selec}>
                        <option value="order">ATTACK</option>
                        <option value="att+">++ATTACK</option>
                        <option value="att-">--ATTACK</option>
                    </select>
                    <SearchBar/>
                    <select  onChange={e => handleFilterType(e)} className={style.selec}>
                        <option value="type">TYPES</option>
                        {allTypes.map((e,i)=>(
                            <option key={i} value={e.name} >{e.name}</option>
                        ))}
                    </select>
                    <select onChange={e => handleCreate(e)} className={style.selec}>
                        <option value="all">POKEMONS</option>
                        <option value="create">CREATED</option>
                        <option value="api">API</option>
                    </select>
                    {/* <Link to="/favourite"><button>FAVORITES</button></Link> */}
                    {/* <SearchBar/> */}
                </div>
                
                {/* <SearchBar/> */}
                
                {
                !currentPoke.length?  <img src={gifPoke} alt="cargando..." className={style.gifpoke}/> : 
                currentPoke?.map((p, i) =>{
                    return(
                        <div key={i} className={style.cards}>
                            <Link to={"/home/"+ p.id} className={style.link}>
                             <Card
                              name= {p.name}
                              types= {p.types + " "}
                              image={p.image}
                        /> 
                        </Link>
                        </div>
                    )
                })
            } 
                <div>     
                    <Paginado
                        pokePage = {pokePage}
                        allPokemons = {allPokemons.length}
                        paginado = {paginado}
                        />
                </div>
            </div>
    )
}