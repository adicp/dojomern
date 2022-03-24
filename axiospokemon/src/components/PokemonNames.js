import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonNames = (props) => {
    const [pokemon, setPokemonNames] = useState([]);
    useEffect ( () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=1')
    .then (response => setPokemonNames(response.data.results))
    .catch(err => console.log(err))
    },[]);


    return (
        <div className='pokemonlist'>
        <ul>
            {
                pokemon.length > 0 && pokemon.map((item,index) => {
                    item.name = (item.name).charAt(0).toUpperCase() + (item.name).slice(1);
                    return (<li key = {index}>{item.name}</li>);
                })
            }
        </ul>
        </div>
    );
};

export default PokemonNames;
