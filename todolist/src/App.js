import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskArr,setTaskArr] = useState([]);

  const handleList = (e) => {
    console.log (taskArr.length);

    const tasks = {
      text: newTask,
      completed: false
    } 
    setTaskArr ([...taskArr, tasks]);
    setNewTask("");
};

const handleCompleteTask = (index) => {
    const taskUpdated = taskArr[index];
    console.log(taskUpdated);
    taskUpdated.completed = !taskUpdated.completed;
    taskArr[index]=taskUpdated;
    console.log(taskArr);
};

const handleDeleteTask = (index) => {

};


  return (
    <div className="App">
        <input id="mainrow" type="text" value = { newTask } onChange = {(e) => setNewTask(e.target.value)}/>
        <button id="mainrow" onClick={ handleList }>Add</button>
        {
          taskArr.map ((item, i) => 
            <ul>
              <li key={ i } >{item.text} 
              <input type="checkbox" onChange={() => handleCompleteTask (i) } checked= {item.completed}></input>
              <button onClick={ ()=> handleDeleteTask (i)}>Delete</button>
              </li>
            </ul>)
        }
    </div>
  );
}

export default App;
