import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom'; //history push es un metodo que me redirige a la ruta que yo le diga
import {useDispatch, useSelector} from 'react-redux';
import { getTypes, postPoke } from "../../actions";
import pokeImage from "./pokeImage.png"
import style from "./pokeCreate.module.css"
import NavBar from "../NavBar/navBar.jsx"

function validate(input){
    let errors ={}
    if(!input.name){
        errors.name = "Name is required"
    }else if(!input.attack){
        errors.attack = "Attack is required"
    }else if(input.attack < 0){
        errors.attack ="Ataque debe ser mayor que 0"
    }else if(input.defense < 0){
        errors.defense = "Defensa debe ser mayor a 0"
    }else if(!input.defense){
        errors.defense = "Defense is required"
    }else if(!input.speed){
        errors.speed = "Speed is required"
    }else if(input.speed < 0){
        errors.speed = "Velocidad debe ser mayor a 0"
    }else if(!input.hp){
        errors.hp = "Hp is required"
    }else if(input.hp < 0){
        errors.hp = "Vida debe ser mayor a 0"
    }else if(!input.weight){
        errors.weight = "Weight is required"
    }else if(input.weight < 0){
        errors.weight = "Peso debe ser mayor a 0"
    }else if(!input.height){
        errors.height = "Height is required"
    }
    // else if(input.height <0){
    //     errors.height = "ALtura debe ser mayor a 0"
    // }
    return errors
    
}




export default function PokeCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const allTypes = useSelector(s => s.types)
    console.log("type", allTypes)
    const [errors, setErrors] = useState({})
    const [input, setInput]= useState({
        name:"",
        attack:"",
        defense:"",
        speed:"",
        hp:"",
        weight:"",
        height:"",
        image:"",
        types: []
    })

    function handleDelete(e){
        setInput({
            ...input,
            types: input.types.filter(t => t !== e)
        })
    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSelect(e){
        if(!input.types.includes(e.target.value)){
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            })
        }  
    }

    function handleSubmit(e){
        e.preventDefault()
        if(Object.keys(errors).length){alert('No es posible crear tu pokemon, vuelve a intentarlo😢')}
        else {dispatch(postPoke(input))
        alert("Pokemon creado con exito!!")
        setInput({
            name:"",
            attack:"",
            defense:"",
            speed:"",
            hp:"",
            weight:"",
            height:"",
            image:"",
            types: [] 
        })
        history.push('/home')
    }
    }

    useEffect(() =>{
        dispatch(getTypes())
    }, [dispatch])

    useEffect(() => {
        setErrors(
          validate({
            ...input,
          })
        );
      }, [input, dispatch]);

      return(
        <div className={style.fondo}>
            {/* <div> */}
                <NavBar/>
            {/* </div> */}
            {/* <Link to="/home"><button>Volver</button></Link> */}
            {/* <h1>Crea tu propio pokemon!!!</h1> */}
            <form onSubmit={e => handleSubmit(e)} className={style.form} >
                <div className={style.grl}>
                    <label className={style.label}>Name:</label>
                    <input type="text" value={input.name} name="name" onChange={e => handleChange(e)} className={style.input}/>
                    {errors.name && (<p>{errors.name}</p>)}
                </div>
                <div className={style.grl}>
                    <label className={style.label}>Attack:</label>
                    <input type="number" value={input.attack} min="0" name="attack" onChange={e => handleChange(e)} className={style.input}/>
                    {errors.attack && (
                        <p>{errors.attack}</p>
                    )}
                </div>
                <div className={style.grl}>
                    <label className={style.label}>Defense:</label>
                    <input type="number" value={input.defense} name="defense" min="0" onChange={e => handleChange(e)} className={style.input}/>
                    {errors.defense && (
                        <p>{errors.defense}</p>
                    )}
                </div>
                <div className={style.grl}>
                    <label className={style.label}>Speed:</label>
                    <input type="number" value={input.speed} name="speed" min="0" onChange={e => handleChange(e)} className={style.input}/>
                    {errors.speed && (
                        <p>{errors.speed}</p>
                    )}
                </div>
                <div className={style.grl}>
                    <label className={style.label}>Hp:</label>
                    <input type="number" value={input.hp} name="hp" min="0" onChange={e => handleChange(e)} className={style.input}/>
                    {errors.hp && (
                        <p>{errors.hp}</p>
                    )}
                </div>
                <div className={style.grl}>
                    <label className={style.label}>Weight:</label>
                    <input type="number" value={input.weight} name="weight" min="0" onChange={e => handleChange(e)} className={style.input}/>
                    {errors.weight && (
                        <p>{errors.weight}</p>
                    )}
                </div>
                <div className={style.grl}>
                    <label className={style.label}>Height:</label>
                    <input type="number" value={input.height} name="height" min="0" onChange={e => handleChange(e)} min="0" className={style.input}/>
                    {errors.height && (
                        <p>{errors.height}</p>
                    )}
                </div>
                <div className={style.grl}>
                    <label className={style.label}>Image:</label>
                    <input type="string" value={input.image} name="image" onChange={e => handleChange(e)} className={style.input}/>
                    {errors.height && (
                        <p>{errors.height}</p>
                    )}
                </div>
                <select onChange={e=>handleSelect(e)} className={style.input}>
                    {allTypes.map((t)=>(
                        <option key={t.id} value={t.name}>{t.name}</option>
                    ))}
                </select>
                <ul><li>{input.types.map(e => e + " ,")}</li></ul>
                <button type="submit" className={style.btn}>Create Pokemon</button>
                {input.types.map((e,i)=> 
                <div key={i}>
                    <p>{e}</p>
                    <button onClick={() => handleDelete(e)}>X</button>
                </div>  
                )}
                </form>
                <img src={pokeImage} alt="image"  className={style.img}/>

        </div>
        
      )
}

