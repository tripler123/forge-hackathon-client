import React, { Component } from "react";
import TaskItems from "./TaskItems";
import axios from 'axios';

class TaskManagerPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskName: '',
      tasks: [
        {
          id: 0,
          name : "Do Something",
          completed: false,

        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
  }

  componentDidMount = () => {
  }
  
  getAllTasks = async () => {
    const {
      data
    } = await axios.get(this.url_base + `task`);
    return data
  }
  
  getTask = async (taskId) => {
    const {
      data
    } = await axios.get(this.url_base + `task/${taskId}`);
    return data
  }
  
  getProjectTasks = async (projectId) => {
    const {
      data
    } = await axios.get(this.url_base + `task/project/${projectId}`);
    return data
  }
 
  createTask = (newTaskName) => {
    let {tasks} = this.state;
    let id = tasks.length;
    let newTask = {
      id: id,
      name : newTaskName,
      completed: false,

    }
    tasks.push(newTask);
    console.log("Tasks", tasks)
    this.setState({tasks: tasks, newTaskName: ''});
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({newTaskName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let {newTaskName} = this.state;
    
    (newTaskName !== '') ? this.createTask(newTaskName) : alert("Please Input Task Name"); 

  }

  render() {
    return (
      <div className="taskList">
        <h3>Task Manager Panel</h3>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.newTaskName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
        <TaskItems items={this.state.tasks}/>
      </div>
    );
  }
}
 
export default TaskManagerPanel;