import React from 'react';
import { useParams } from 'react-router-dom';

const HelloStyled = () => {
    const urlObject = useParams();
    const text = urlObject.text;
    const textcolor = urlObject.textcolor;
    const displaycolor = urlObject.displaycolor;

    const stylingObject = {
        h1: {
        color: textcolor,
        backgroundColor: displaycolor
        }
    }
    return(
        <div>
            <h1 style={stylingObject.h1}>{ text }</h1>
        </div>
    );
};

export default HelloStyled;