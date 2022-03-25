import React from 'react';


const Hello = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>{ props.greeting }</h1>
        </div>
    );
};

export default Hello;