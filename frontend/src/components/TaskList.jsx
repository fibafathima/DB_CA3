
// src/components/TaskList.jsx
import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import axios from 'axios'

function TaskList() {
    const [task,setTask] = useState([])

    
    
   

    useEffect(()=>{
        const addTasks= axios.get("http://localhost:5000/tasks")
        setTask(addTasks)
    },[])



    return (
    
    
          task.map((onetask)=>{
            return <TaskItem key={task.id} task={onetask}/>
          })
       
    );
}

export default TaskList;
