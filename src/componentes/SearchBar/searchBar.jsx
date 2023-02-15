import React, { useState } from "react";
import { getName } from "../../actions";
import { useDispatch } from "react-redux";
import style from "./search.module.css"

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    function handleInput(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            alert("No se encontro el pokemon con ese nombre")
        }else{
            dispatch(getName(name))
            setName("")
        }

    }


    return(
        <div className={style.div} >
            <input className={style.input} type="text" value={name}  name="name" onChange={e => handleInput(e)}/>
            <button className={style.btn} type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}