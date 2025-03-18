import React from 'react'

const TaskItem = (task) => {

  return (
    <div>
        <h1>{task.title}</h1> 
        <p>{task.description}</p>
        <input type="checkbox" />

      
    </div>
  )
}

export default TaskItem

