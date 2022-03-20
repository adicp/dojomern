import React from 'react';
import FormWrapper from './FormWrapper';
import{ useContext } from 'react';
import MyContext from '../context/MyContext';

const Navbar = (props) => {
    const { name}  = useContext(MyContext);
    
    return (
        <div>
            <h1>Hi { name }!</h1>
        </div>
    );
};

export default Navbar;