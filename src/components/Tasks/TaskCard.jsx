/* global THREE */
import React, { useState } from 'react'
require('./TaskCard.css');

function TaskCard({ task }) {
  const [taskId, setTaskId] = useState(-1);

  const orange = new THREE.Vector4(1, 0.6, 0, 1);

  const selectElements = () => {
    if (taskId === -1 && taskId !== task.taskId) {
      window.privateViewer.clearThemingColors();
      window.privateViewer.isolate(task.dbid_array);
      task.dbid_array.forEach(dbId => {
        window.privateViewer.setThemingColor(dbId, orange)
      })
      setTaskId(task.taskId)
    } else {
      window.privateViewer.clearThemingColors();
      window.privateViewer.isolate(0);
      setTaskId(-1)
    }
  }
  return (
    <div className="taskcard" onClick={selectElements}>
      <div className="taskcard__title">
        <p className="taskcard__title--name">{task.name}</p>
        <p className="taskcard__title--date">11/11/2020</p>
      </div>
      <p className="taskcard__description">{task.description}</p>
    </div>
  )
}

export default TaskCard
