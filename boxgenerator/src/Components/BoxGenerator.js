import React, { useState } from 'react';
import styles from "./BoxGenerator.module.css";

const ColorGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [boxSize, setBoxSize] = useState("");
    const [colorArr,setColorArr] = useState([]);
    const [sizeArr,setSizeArr] = useState([]);
    const handleBox = (e) => {
        // e.preventDefault();
        setColorArr([...colorArr, boxColor]);
        setSizeArr([...sizeArr, boxSize])
        // console.log(colorArr);
        setBoxColor("");
        setBoxSize("");
    };

    return (
    <div >
        <label id="mainrow">Color</label>
        <input id="mainrow" type="text" value = { boxColor } onChange = {(e) => setBoxColor(e.target.value)}/>
        <input id="mainrow" type="text" value = { boxSize } onChange = {(e) => setBoxSize(e.target.value)}/>
        <button id="mainrow" onClick={ handleBox }>Add Box</button>
        <div id='flexboxes'>

            {
            colorArr.map((item,i) => 
            <div key ={i} className={ styles.boxes} style={{backgroundColor: item, height: sizeArr[i]+"px", width: sizeArr[i]+"px"}}></div>)
            
            }
            {/* <div key ={i} className={ styles.boxes} style={{backgroundColor: item}}></div> */}

        </div>
    </div>
    );

};

export default ColorGenerator;