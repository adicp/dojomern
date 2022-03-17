import React, { useState } from 'react';

const ToDoList = (props) => {
    const [newTask, setNewTask] = useState("");
    const [taskArr,setTaskArr] = useState([]);
    const [taskStatus, setTaskStatus] = useState(false);
    const [taskStatusArr, setTaskStatusArr] = useState(false);

    const handleList = (e) => {
        setTaskArr ([...taskArr, newTask]);
        setNewTask("");


    };
    const handleTask = (e) => {
        setTaskStatus(true);
    };

    return (
        <div>
        <input id="mainrow" type="text" value = { newTask } onChange = {(e) => setNewTask(e.target.value)}/>
        <button id="mainrow" onClick={ handleList }>Add</button>
        { 
        taskStatus ? 
        taskArr.map((item,i)  => <ul>
            <li key={i}>{item} <input type="checkbox" onClick={ handleTask } ></input> <button>Delete</button></li>
        </ul> ) :
        taskArr.map((item,i)  => <ul>
            <li key={i}>{item} <input type="checkbox" onClick={ handleTask } ></input></li>
            </ul> )
        }
        </div>
    );

};

export default ToDoList;