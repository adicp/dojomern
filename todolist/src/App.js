import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskArr,setTaskArr] = useState([]);
  const [idUnique,setUniqueId] = useState(taskArr.length + 1);

  const handleList = (e) => {
    // console.log (taskArr.length);
    const taskId = idUnique + 1;
    const tasks = {
      id: taskId,
      text: newTask,
      completed: false
    } 
    // console.log(taskId);
    setTaskArr ([...taskArr, tasks]);
    setNewTask("");
    setUniqueId(taskId);
};


//update the main array, with the result of map function on the main array to modify an element of the array
const handleCompleteTask = (id) => {
    const taskUpdated = [...taskArr].map((newTask) => {
      if (newTask.id === id) {
        newTask.completed = !newTask.completed
      }
      return newTask;
    })
    setTaskArr(taskUpdated);
};

//update the main array, with the result of filter function on the main array to remove an element of the array
const handleDeleteTask = (id) => {
  const taskUpdated = [...taskArr].filter((newTask) => newTask.id !== id);
  setTaskArr(taskUpdated);

};


  return (
    <div className="App">
        <input id="taskinput" type="text" value = { newTask } onChange = {(e) => setNewTask(e.target.value)}/>
        <button id="addbutton" onClick={ handleList }>Add</button>
        {
          taskArr.map ((item) => 
          <div className="tasks" key={ item.id }>
              <h2 className={item.completed ? "listcompleted" : 'list'}>{item.text}</h2>
              <input type="checkbox" onChange={ () => handleCompleteTask (item.id) } checked= { item.completed }/>
              <button onClick={ ()=> handleDeleteTask (item.id)}>Delete</button>
          </div>)}
    </div>
  );
}

export default App;
