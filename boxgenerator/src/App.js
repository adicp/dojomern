import './App.css';
import React from 'react';
import BoxGenerator from './Components/BoxGenerator';
import BoxGeneratorDisplay from './Components/BoxGeneratorDisplay';

function App() {
  let boxArr = [];
  const addBoxesColor = (boxColor) => {
    boxArr.push(boxColor);
    console.log(boxArr);
  }

  return (
    <>
      <BoxGenerator onNewColor= { addBoxesColor }/>
        {boxArr[0]}
      
      {/* <BoxGeneratorDisplay boxColor= { boxArr }/> */}
      {/* { BoxGeneratorDisplay (boxArr) } */}
      
    </>
  );
}

export default App;
