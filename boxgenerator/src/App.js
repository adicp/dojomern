import './App.css';
import BoxGenerator from './Components/BoxGenerator';
import React, { useState } from 'react';

function App() {

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
      <div className='flexboxes'>
        {colorArr.map((item,i) => (<BoxGenerator onNewColor = { item} onIndex = {i}/>))}
      </div>
    </div>

  );
}

export default App;
