import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PokemonApiNames = (props) => {
    const [people, setPeople] = useState(null);

    useEffect ( () => {
        axios.get ('https://pokeapi.co/api/v2/pokemon?limit=807&offset=1')
        // .then( response => response.json())
        .then(response => setPeople(response.data))
    },[]);

    return (
        <div className='pokemonlist'>
            <ul>
                { people }
            </ul>
        </div>
    );
}

export default PokemonApiNames;