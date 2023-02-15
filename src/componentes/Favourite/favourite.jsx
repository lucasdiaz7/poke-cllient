import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/card";


export default function Favourite(){
    const favourites = useSelector(state => state.favourite)
    
    return (
        <div>
            {
                (favourites.length !== 0) ? 
                <>
                    
                        
                            <div>
                                {favourites?.map(e => 
                                <Card 
                                    key={e.id} 
                                    id={e.id}   
                                    name={e.name} 
                                    image={e.image} 
                                    type={e.types}
                                />)}
                            </div>
                            
                        
                    
                </> :
                <>
                    <div>
                        <div>
                            <h1>No tienes pokemones favoritos...</h1>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}


