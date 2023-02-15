import React, {useState, useEffect} from "react";
import {Link, useHistory, useParams} from 'react-router-dom'; //history push es un metodo que me redirige a la ruta que yo le diga
import {useDispatch, useSelector} from 'react-redux';
import { getTypes, pokeDetail, pokePut} from "../../actions";

function validate(input){
    let errors ={}
    if(!input.name){
        errors.name = "Se requiere un nombre"
    }else if(!input.attack){
        errors.attack = "Ataque debe ser completado"
    }else if(input.attack < 0){
        errors.attack ="Ataque debe ser mayor que 0"
    }else if(input.defense < 0){
        errors.defense = "Defensa debe ser mayor a 0"
    }else if(!input.defense){
        errors.defense = "Defensa debe ser completado"
    }else if(!input.speed){
        errors.speed = "Velocidad debe ser completado"
    }else if(input.speed < 0){
        errors.speed = "Velocidad debe ser mayor a 0"
    }else if(!input.hp){
        errors.hp = "Vida debe ser completado"
    }else if(input.hp < 0){
        errors.hp = "Vida debe ser mayor a 0"
    }else if(!input.weight){
        errors.weight = "Peso debe ser completado"
    }else if(input.weight < 0){
        errors.weight = "Peso debe ser mayor a 0"
    }else if(!input.height){
        errors.height = "ALtura debe ser completado"
    }
    // else if(input.height <0){
    //     errors.height = "ALtura debe ser mayor a 0"
    // }
    return errors
    
}




export default function Update(){

    
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()
    const detalle = useSelector(s=> s.detail)
    console.log("detalee", detalle)
    const [errors, setErrors] = useState({})
    const [input, setInput]= useState({
        name:"",
        attack:"",
        defense:"",
        speed:"",
        hp:"",
        weight:"",
        height:"",
        img: detalle[0].image,
    })
    
    useEffect(() =>{
        dispatch(pokeDetail(id))
    },[dispatch])



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


    function handleSubmit(e){
        e.preventDefault()
        if(Object.keys(errors).length){alert('No es posible modificar tu pokemon, vuelve a intentarlo😢')}
        else {dispatch(pokePut(id, input))
        alert("Pokemon modificado con exito!!")
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
        <div>
            <Link to="/home"><button>Volver</button></Link>
            <h1>Modifica tu propio pokemon!!!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={input.name} name="name" onChange={e => handleChange(e)}/>
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Ataque:</label>
                    <input type="number" value={input.attack} name="attack" onChange={e => handleChange(e)}/>
                    {errors.attack && (
                        <p>{errors.attack}</p>
                    )}
                </div>
                <div>
                    <label>Defensa:</label>
                    <input type="number" value={input.defense} name="defense" onChange={e => handleChange(e)}/>
                    {errors.defense && (
                        <p>{errors.defense}</p>
                    )}
                </div>
                <div>
                    <label>Velocidad:</label>
                    <input type="number" value={input.speed} name="speed" onChange={e => handleChange(e)}/>
                    {errors.speed && (
                        <p>{errors.speed}</p>
                    )}
                </div>
                <div>
                    <label>Vida:</label>
                    <input type="number" value={input.hp} name="hp" onChange={e => handleChange(e)}/>
                    {errors.hp && (
                        <p>{errors.hp}</p>
                    )}
                </div>
                <div>
                    <label>Peso:</label>
                    <input type="number" value={input.weight} name="weight" onChange={e => handleChange(e)}/>
                    {errors.weight && (
                        <p>{errors.weight}</p>
                    )}
                </div>
                <div>
                    <label>Altura:</label>
                    <input type="number" value={input.height} name="height" onChange={e => handleChange(e)} min="0"/>
                    {errors.height && (
                        <p>{errors.height}</p>
                    )}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="string" value={input.img} name="img" onChange={e => handleChange(e)}/>
                    {errors.height && (
                        <p>{errors.height}</p>
                    )}
                </div>
                <button type="submit">Modificar Pokemon</button>
                </form>

        </div>
        
      )
}

