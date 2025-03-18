
// src/components/TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    const [task,setTask] = useState([])
    


    return (
    
          tasks.map((onetask)=>{
            return <TaskItem key={tasks.id} task={onetask}/>
          })
       
    );
}

export default TaskList;
