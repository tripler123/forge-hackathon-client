/* global THREE */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from "react-bootstrap";
require('./TaskCard.css');

function TaskCard({ task, deleteTask }) {

  const [taskId, setTaskId] = useState(-1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const hanldeChangeName = () => { }
  const hanldeChangeDescription = () => { }

  const taskStatus= (status) => status === 0 ? "Pending" :
  status === 1 ? "Resolved" :
    "Dismissed"

  return (
    <div
      className="taskcard"
      onClick={selectElements}
      style={{
        borderColor:
          task.status === 0 ? "#F5BD0E" :
            task.status === 1 ? "#2E8B35" :
              "#707070"
      }}>
      <div className="taskcard__left">
        <p>{task.taskId}</p>
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
        <button className="taskcard__actions--delete" onClick={()=>{deleteTask(task)}}>
          <FontAwesomeIcon icon={faTrash} color="white" size="xs" />
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="customModal">
          <form className="customModal__form">
            <label
              htmlFor="name"
              className="customModal__form--label">
              Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter Name"
              value={task.name}
              onChange={hanldeChangeName}
              className="customModal__form--input"
            />
            <label
              htmlFor="description"
              className="customModal__form--label">
              Description</label>
            <textarea
              name="description"
              id="description"
              type="text"
              placeholder="Enter Description"
              value={task.description}
              onChange={hanldeChangeDescription}
              className="customModal__form--input"
            />

            <label
              htmlFor="status"
              className="customModal__form--label">
              Status</label>
            <select 
              id="status" 
              name="status"
              className="customModal__form--input">
              <option value="0">{taskStatus(0)}</option>
              <option value="Resolved">{taskStatus(1)}</option>
              <option value="fiat">{taskStatus(2)}</option>
            </select>

          </form>

        </Modal.Body>
        <Modal.Footer className="customModal__footer">
          <Button onClick={handleClose} className="customModal__submit">
            <FontAwesomeIcon icon={faSave} color="white" />
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TaskCard
