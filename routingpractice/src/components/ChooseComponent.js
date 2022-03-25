import React from 'react';
import { useParams } from 'react-router-dom';
import Number from './Number';
import Greetings from './Greetings';

const ChooseComponent = () => {
    // 
    const pageObject = useParams();
    const page = pageObject.newPage;
    // console.log(page);


    return (
        <div>
        { isNaN(page) ? 
            <Greetings greeting = { page }/>
            :
            <Number number = { page }/>
        }
        </div>
    );
};

export default ChooseComponent;