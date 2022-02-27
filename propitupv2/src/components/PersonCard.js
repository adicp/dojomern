import React from 'react';

const PersonCard = (props) => {
    // const {lastName, firstName, age, hair}  = props;
    const [age, setAge] = useState(props.age);

    return (
        <>
        <h1>{ lastName },{ firstName }</h1>
        <p>Age: { age }</p>
        <p>Hair Color: { hair}</p>
        <button>Birthday Button for { firstName} { lastName }</button>
        <h1>here it ends</h1>
        </>
    );
}

export default PersonCard;