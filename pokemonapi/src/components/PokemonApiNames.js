import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PokemonApiNames = (props) => {
    const [people, setPeople] = useState([]);

    useEffect ( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=1')
        .then(response => response.json())
        .then(response => setPeople(response.results))
        .catch( err => console.log(err))
    },[]);

    return (
        <div className='pokemonlist'>
            <ul>
            {
                people.length > 0 && people.map((item,index) => {
                    item.name = (item.name).charAt(0).toUpperCase() + (item.name).slice(1);
                    return (<li key = {index}>{item.name}</li>);
                })
            }
            </ul>
        </div>
    );
}

export default PokemonApiNames;