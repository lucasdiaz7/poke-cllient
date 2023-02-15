import axios from 'axios';

// export function allPoke(){
//     return async function(dispatch){
//         fetch("http://localhost:3001/pokemons")
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: 'ALLPOKE',
//             payload: data
//         }))
//     }
// }

export function allPoke(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pokemons")
        return dispatch({
            type:'ALLPOKE',
            payload: json.data 
        })
    }
}

export function getName(name){
    return async function(dispatch){
        fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then(r => r.json())
        .then(data =>dispatch({
            type: 'GETNAME',
            payload: data
        }))
    }
}

export function pokeDetail(id){
    return async function(dispatch){
    try {
        var json = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: 'POKEDETAIL',
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
}}

export function getTypes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/types")
        return dispatch({
            type: 'GETTYPES',
            payload: json.data
        })
    }
}

export function filterTypes(payload){
    return{
        type: 'FILTERTYPES',
        payload
    }
}

export function filterCreate(payload){
    return{
        type: 'FILTERCREATE',
        payload

    }
}

export function orderPoke(payload){
    return{
        type: 'ORDERPOKE',
        payload
    }
}
export function attackOrder(payload){
    return{
        type: 'ATTACKORDER',
        payload
    }
}

export function postPoke(payload){
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/pokemons", payload)
        return dispatch({
            type: 'POSTPOKE',
            json
        })
    }
}

export function deletePoke(id){
    return async function(dispatch){
        var delet= await axios.delete("http://localhost:3001/delete/" + id)
        return dispatch({
            type: 'DELETEPOKE',
            payload: delet.data
        })
    }
}

export function pokePut(id, payload){
    return async function(dispatch){
        var json= await axios.put(`http://localhost:3001/pokemons/${id}`, payload)
        return dispatch({
            type: 'POKE_PUT', json
        })
    }
}

export function addFavourite(payload){
    return {
        type: 'ADD_FAVOURITE',
        payload
    }
}

export function deleteFavourite(payload){
    return {
        type: 'DELETE_FAVOURITE',
        payload
    }
}