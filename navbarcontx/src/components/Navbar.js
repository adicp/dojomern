import React from 'react';
import{ useContext } from 'react';
import MyContext from '../context/MyContext';

const Navbar = (props) => {
    const { name}  = useContext(MyContext);
    
    return (
        <div className='navbar'>
            <h1>Hi { name }!</h1>
        </div>
    );
};

export default Navbar;