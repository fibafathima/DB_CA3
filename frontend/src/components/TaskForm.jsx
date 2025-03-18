// src/components/TaskForm.jsx
import React, { useState } from 'react';


function TaskForm() {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [checked,SetChecked] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        setTitle("")
        setDescription("")
        SetChecked(false)

    }

    return (
        <form>
         <h1>Title</h1>
         <input type="text" placeholder='add title'/>
         <h1>Description</h1>
         <input type="text" placeholder='add description' />
    
        <div>
            <input type="checkbox"/>
            <p>Completed</p>
        
        </div>


         <button onSubmit={handleSubmit}>Submit</button>
            
        </form>
    );
}

export default TaskForm;
