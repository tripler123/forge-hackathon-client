/* global THREE */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from "react-bootstrap";
require('./TaskCard.css');

function TaskCard({ task, deleteTask, editTask, privateViewer }) {
  const [taskId, setTaskId] = useState(-1);
  const [show, setShow] = useState(false);
  const [tempName, setName] = useState(task.name);
  const [tempDesc, setDesc] = useState(task.description);
  const [tempStatus, setStatus] = useState(0);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const orange = new THREE.Vector4(1, 0.6, 0, 1);


  const selectElements = () => {
    console.log(task)
    if (taskId === -1 && taskId !== task.taskId) {
      privateViewer.clearThemingColors();
      privateViewer.isolate(task.dbid_array);
      task.dbid_array.forEach(dbId => {
        window.privateViewer.setThemingColor(dbId, orange)
      })
      setTaskId(task.taskId)
    } else {
      privateViewer.clearThemingColors();
      privateViewer.isolate(0);
      setTaskId(-1)
    }
  }

  const handleChangeName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleChangeDescription = (event) => {
    event.preventDefault();
    setDesc(event.target.value);
  }

  const handleStatusChange = (event) => {
    event.preventDefault();
    let status = event.target.value
    let val = (status === "0") ? 0 : (status === "1") ? 1 : 2;
    setStatus(val);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    task.name = tempName;
    task.description = tempDesc;
    task.status = tempStatus;

    handleClose();
  }

  const taskStatus = (status) => status === 0 ? "Pending" :
    status === 1 ? "Resolved" :
      "Dismissed"

  return (
    <div
      className="taskcard"
      style={{
        borderColor:
          task.status === 0 ? "#F5BD0E" :
            task.status === 1 ? "#2E8B35" :
              "#707070"
      }}>
      <div className="taskcard__left" onClick={selectElements}>
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
        <button className="taskcard__actions--delete" onClick={() => { deleteTask(task) }}>
          <FontAwesomeIcon icon={faTrash} color="white" size="xs" />
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="customModal">
          <form className="customModal__form" onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="customModal__form--label">
              Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter Name"
              value={tempName}
              onChange={handleChangeName}
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
              value={tempDesc}
              onChange={handleChangeDescription}
              className="customModal__form--input"
            />

            <label
              htmlFor="status"
              className="customModal__form--label">
              Status</label>
            <select
              id="status"
              name="status"
              className="customModal__form--input"
              onChange={handleStatusChange}
            >
              <option value="" selected disabled hidden>Change Status</option>
              <option value="0">{taskStatus(0)}</option>
              <option value="1">{taskStatus(1)}</option>
              <option value="2">{taskStatus(2)}</option>
            </select>

            <Button type="submit" className="customModal__submit">
              <FontAwesomeIcon icon={faSave} color="white" />
              Save Changes
            </Button>
          </form>

        </Modal.Body>
        <Modal.Footer className="customModal__footer">
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TaskCard
