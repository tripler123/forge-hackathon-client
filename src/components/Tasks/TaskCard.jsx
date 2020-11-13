import React from 'react'
require('./TaskCard.css');

function TaskCard({ task }) {
  return (
    <div className="taskcard">
      <div className="taskcard__title">
        <p className="taskcard__title--name">{task.name}</p>
        <p className="taskcard__title--date">11/11/2020</p>
      </div>
      <p className="taskcard__description">{task.description}</p>
    </div>
  )
}

export default TaskCard
