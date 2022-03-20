import React from 'react';
import { createContext } from 'react';
import MyContext, { MyProvider } from '../context/MyContext';

const Wrapper = (props) => {
    
    return (
        <MyProvider >
            {props.children}
        </MyProvider> 
    );
};

export default Wrapper;