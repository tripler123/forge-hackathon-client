import React, { Component } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import TaskCard from './TaskCard.jsx'

require('./TaskManagerPanel.css');

class TaskManagerPanel extends Component {
  constructor(props) {
    super(props);
    const data = require('../fakeData.json');

    this.state = {
      newTaskName: '',
      newTaskDesc: '',
      dbid_array: [],
      tasks:  data.tasks,
      show: false,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
  }

  componentDidMount = () => {
    // window.addEventListener('viewerLoaded', (e) => {
    //   let {tasks} = this.state;
    //   this.viewer = e.detail.viewer;
    //   this.viewer.select(tasks[0].dbid_array);
    //   this.viewer.restoreState(JSON.parse(tasks[0].state));
    //   this.setState({viewer: this.viewer});
    // });
  }

  // getAllTasks = async () => {
  //   const {
  //     data
  //   } = await axios.get(this.url_base + `task`);
  //   return data
  // }

  // getTask = async (taskId) => {
  //   const {
  //     data
  //   } = await axios.get(this.url_base + `task/${taskId}`);
  //   return data
  // }

  // getProjectTasks = async (projectId) => {
  //   const {
  //     data
  //   } = await axios.get(this.url_base + `task/project/${projectId}`);
  //   return data
  // }

  fetchSelected = () => {
    let selected = window.privateViewer.getSelection();
    return selected;
  }

  createTask = (dbid_array) => {
    let { tasks, newTaskDesc, newTaskName } = this.state;
    let id = tasks.length;
    let newTask = {
      id: id,
      idproject: 1,
      name: newTaskName,
      description: newTaskDesc,
      dbid_array: window.privateViewer.getSelection(),
      status: 0,
    }

    console.log('newTask', newTask)
    tasks.push(newTask);
    this.setState({ tasks: tasks, newTaskName: '', newTaskDesc: '' });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ newTaskName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // let {newTaskName, newTaskDesc, dbid_array} = this.state;
    let { newTaskName, newTaskDesc } = this.state;
    let array = this.fetchSelected();
    if (newTaskName === '') {
      alert("Please Input Task Name");
    } else if (newTaskDesc === '') {
      alert("Please Input Description");
    } else {
      this.createTask(array)
    }
  }

  handleDescription = (event) => {
    event.preventDefault();
    this.setState({ newTaskDesc: event.target.value });
  }

  render() {
    return (
      <div className="col-lg-4 taskListPanel">
        <form onSubmit={this.handleSubmit} className="taskListPanel__form">
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.newTaskName}
            onChange={this.handleChange}
            className="taskListPanel__form--input"
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={this.state.newTaskDesc}
            onChange={this.handleDescription}
            className="taskListPanel__form--input"
          />
          <button type="submit" className="taskListPanel__form--submit">
            <FontAwesomeIcon icon={faPlus} color="white" />
            Add
          </button>

        </form>

        {this.state.tasks.map((task, index) => {
          return (
            <TaskCard key={index} task={task} viewer={this.state.viewer} />
          )
        })}
      </div>
    );
  }
}

export default TaskManagerPanel;