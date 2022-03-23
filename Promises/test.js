// import axios from 'axios';
axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=1').then(response=>{
    console.log(response);
})