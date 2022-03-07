import React, { useState } from 'react';

const ColorGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("");
    
    const handleBox = (e) => {
        e.preventDefault();
        props.getNewColor(boxColor);
        setBoxColor("");
    };

    return (
    <div>
        <label>Color</label>
        <input type="text" value = { boxColor } onChange = {(e) => setBoxColor(e.target.value)}/>
        <button onClick={ handleBox }>Add</button>
    </div>
    );

};

export default ColorGenerator;