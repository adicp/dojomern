import React, { useState } from 'react';

const ColorGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [colorArr,setColorArr] = useState([]);
    const handleBox = (e) => {
      setColorArr([...colorArr, boxColor]) ;
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