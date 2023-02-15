const initialState= {
    poke: [],
    allPokemon: [],
    detail:[],
    types: [],
    favourite: []
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'ALLPOKE':
            return{
                ...state,
                poke:action.payload,
                allPokemon: action.payload,
                detail: []
            }
        case 'GETNAME':
            return{
                ...state,
                poke: action.payload
            }
        case 'POKEDETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case "FILTERCREATE":
            const create = action.payload === "create" ? state.allPokemon.filter(p => p.createInDb) : state.allPokemon.filter(p => !p.createInDb) 
            return{
                ...state,
                poke: action.payload === "all" ? state.allPokemon : create
            }     
        case 'GETTYPES':
            return{
                ...state,
                types: action.payload
            }     
        case 'FILTERTYPES':
            const pokemons = state.allPokemon
            const typeFilter = pokemons.filter((p) =>
            p.types?.includes(action.payload)
            )     
            return{
                ...state,
                poke: typeFilter
            }
        case 'ORDERPOKE':
            const order = action.payload === "asc"?
            state.poke.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }
                return 0
            }) : 
            state.poke.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return 1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1
                }
                return 0
            })
            return{
                ...state,
                poke: order
            }
        case 'ATTACKORDER':
            const attack = action.payload === "att-" ?
            state.poke.sort(function(a,b){
                return (a.attack - b.attack)
            }) :
            state.poke.sort(function(a,b){
                return (b.attack - a.attack)
            })
            return{
                ...state,
                poke: attack
            }
        case 'POSTPOKE':
            return{
                ...state
            }    
        case 'DELETEPOKE':
            return{
                ...state
            }
        case 'POKE_PUT':
            return{
                ...state
            }    
        case 'ADD_FAVOURITE':
            return{
                ...state,
                favourite: state.favourite.concat(action.payload)
            }
        case 'DELETE_FAVOURITE':
            return{
                ...state,
                favourite: state.favourite.filter(p => p.id.toString() !== action.payload )
            }

            

            default: return state
    }
}

export default rootReducer;