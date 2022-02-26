import React from 'react';

const PersonCard = (props) => {
    const {lastName, firstName, age, hair}  = props;

    return (
        <>
        <h1>{ lastName },{ firstName}</h1>
        <p>Age: { age }</p>
        <p>Hair Color: { hair}</p>
        </>
    );
}

export default PersonCard;