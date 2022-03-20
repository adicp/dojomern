import React, {useState} from 'react';
import { createContext } from 'react';

const MyContext = createContext ();

export const MyProvider = (props) =>{
    const [name, setName] = useState("");
    return (
        <MyContext.Provider value = { {name, setName} }>

            {props.children}

        </MyContext.Provider>
    )
}
export default MyContext;