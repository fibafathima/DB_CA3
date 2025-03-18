// src/components/TaskForm.jsx
import React from 'react';

function TaskForm() {
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


         <button>Submit</button>
            
        </form>
    );
}

export default TaskForm;
