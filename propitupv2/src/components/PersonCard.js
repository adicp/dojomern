import React, { useState} from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    // const changeAge = () => {
    //     setAge(
    //         age + 1
    //     );
    // }

    return (
        <>
        <h1>{ props.lastName },{ props.firstName }</h1>
        <p>Age: { age }</p>
        <p>Hair Color: { props.hair}</p>
        {/* <button onClick = { changeAge }>Birthday Button for { props.firstName} { props.lastName }</button> */}
        <button onClick = { (event) => setAge(age + 1)}>Birthday Button for { props.firstName} { props.lastName }</button>
        </>
    );
}

export default PersonCard;