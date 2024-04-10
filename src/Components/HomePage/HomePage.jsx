import React, { useEffect, useState } from "react";
import { characters } from "../../Functions/Characters";

function HomePage() {
    const [charactersList, setCharactersList] = useState(null)

    useEffect(() => {
        characters(setCharactersList)
    }, [])
    return (
        <>
            {charactersList != null ? (
                charactersList.map(charactersList => (
                   <div item={charactersList.id}>
               <a href ="">{charactersList.name}</a>
               <img src ={charactersList.image} alt=""></img>
</div>
                ))
            ) : ('No hay personajes')}

        </>)
}

export default HomePage;