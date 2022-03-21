import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';


const Form = () => {
    
    const { name, setName } = useContext(MyContext);


    return (
        <div className='nameform'>
            <label className='namelabel'>Your Name: </label>
            <input className = 'nameinput' type="text" value = { name } onChange={ (e)=> setName(e.target.value) }></input>
        </div>
    );
};

export default Form;