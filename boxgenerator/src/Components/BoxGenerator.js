import React, { useState } from 'react';
import styles from "./BoxGenerator.module.css";

const BoxGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [box, setBox] = useState("");
    const handleBox = (e) => {
        e.preventDefault();
        setBox(<div className={ styles.boxes } style={{backgroundColor: boxColor}}></div>);
        props.onNewColor(box);
        setBoxColor("");
    };

    return (
    <div>
        <label>Color</label>
        <input type="text" value = { boxColor } onChange = {(e) => setBoxColor(e.target.value)}/>
        <button onClick={ handleBox }>Add</button>
        {box}
    </div>

    );

};

export default BoxGenerator;