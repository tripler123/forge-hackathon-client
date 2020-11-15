/* global THREE */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from "react-bootstrap";
require('./TaskCard.css');

function TaskCard({ task }) {
  const [taskId, setTaskId] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("WHY")
    setShow(true)
  };

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
    <div className="taskcard">
      <div className="taskcard__left" onClick={selectElements}>
        <p>{task.idtask}</p>
      </div>
      <div className="taskcard__right">
        <div className="taskcard__title">
          <p className="taskcard__title--name">{task.name}</p>
          <p className="taskcard__title--date">{task.date}</p>
        </div>
        <p className="taskcard__description">{task.description}</p>
      </div>
      <div className="taskcard__actions">
        <button className="taskcard__actions--edit" onClick={handleShow}>
          <FontAwesomeIcon icon={faPen} color="white" size="xs" />
        </button>
        <button className="taskcard__actions--delete">
          <FontAwesomeIcon icon={faTrash} color="white" size="xs" />
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task: {task.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Make Your Changes</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TaskCard
