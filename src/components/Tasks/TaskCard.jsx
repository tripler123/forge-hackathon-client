/* global THREE */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
require('./TaskCard.css');


function TaskCard({ task }) {
  console.log(task)
  const [taskId, setTaskId] = useState(-1);

  const orange = new THREE.Vector4(1, 0.6, 0, 1);

  const selectElements = () => {
    if (taskId === -1 && taskId !== task.idtask) {
      window.privateViewer.clearThemingColors();
      window.privateViewer.isolate(task.dbid_array);
      task.dbid_array.forEach(dbId => {
        window.privateViewer.setThemingColor(dbId, orange)
      })
      setTaskId(task.idtask)
    } else {
      window.privateViewer.clearThemingColors();
      window.privateViewer.isolate(0);
      setTaskId(-1)
    }
  }
  return (
    <div className="taskcard" onClick={selectElements}>
      <div className="taskcard__left">
        <p>{task.idtask}</p>
      </div>
      <div className="taskcard__right">
        <div className="taskcard__title">
          <p className="taskcard__title--name">{task.name}</p>
          <p className="taskcard__title--date">11/11/2020</p>
        </div>
        <p className="taskcard__description">{task.description}</p>
      </div>
      <div className="taskcard__actions">
        <button className="taskcard__actions--edit">
          <FontAwesomeIcon icon={faPen} color="white" size="xs" />
        </button>
        <button className="taskcard__actions--delete" >
          <FontAwesomeIcon icon={faTrash} color="white" size="xs" />

        </button>
      </div>
    </div>
  )
}

export default TaskCard
