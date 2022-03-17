import { transformFromAst } from '@babel/core';
import React, { useState } from 'react';

const ToDoList = (props) => {
    const [newTask, setNewTask] = useState("");
    // const [taskArr,setTaskArr] = useState([]);

    const handleList = (e) => {
        // setTaskArr ([...taskArr, newTask]);
        setNewTask("");


    };

    return (
        <div>
        <input id="mainrow" type="text" value = { newTask } onChange = {(e) => setNewTask(e.target.value)}/>
        <button id="mainrow" onClick={ handleList }>Add</button>
        </div>
    );

};

export default ToDoList;