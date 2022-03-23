import React, { useState, useEffect } from 'react';

const PokemonApiNames = (props) => {
    const [people, setPeople] = useState([]);

    useEffect ( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=1')
        .then( response => response.json())
        .then(response => setPeople(response.results))
    },[]);

    return (
        <div className='pokemonlist'>
            <ul>
                {
                
                people.length > 0 && people.map((item,index) => {
                let pokName = item.name;
                pokName = pokName.charAt(0).toUpperCase() + pokName.slice(1);
                return (<li key={index}>{ pokName }</li>)
                })}
            </ul>
        </div>
    );
}

export default PokemonApiNames;