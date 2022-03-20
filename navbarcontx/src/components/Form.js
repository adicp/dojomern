import React, { useState } from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';


const Form = () => {
    
    const { name, setName } = useContext(MyContext);


    return (
        <div>
            <label>Your Name</label>
            <input type="text" value = { name } onChange={ (e)=> setName(e.target.value) }></input>
        </div>
    );
};

export default Form;