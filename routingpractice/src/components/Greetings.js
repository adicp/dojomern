import React from 'react';


const Greetings = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>The word is: { props.greeting }</h1>
        </div>
    );
};

export default Greetings;