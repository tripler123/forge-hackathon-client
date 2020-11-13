import React, { Component } from "react";
import TaskItems from "./TaskItems";
import axios from 'axios';
import ViewerPanel from "../ViewerPanel";

class TaskManagerPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskName: '',
      newTaskDesc: '',
      dbid_array: [],
      tasks: [
        {
          idproject: 2,
          name : "Do Something",
          description : "Do Something description",
          dbid_array: [4844, 5315, 5544, 5550, 5634, 5638],
          status: 0,
        },
        {
          idproject: 2,
          name : "Structural Column Formwork",
          description : "Structural Column description",
          dbid_array: [4844, 5315, 5544, 5550, 5634, 5638],
          status: 0,
        },
        {
          idproject: 1,
          name : "Structural Framing",
          description : "Structural Framing description",
          dbid_array: [4854, 4856, 5197, 5199],
          status: 0,
        },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
  }

  componentDidMount = () => {
    window.getTasks = () =>{
      const tasks = this.state.tasks;
      console.log(tasks)
    }
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

  fetchSelected = () =>{
    let selected = window.privateViewer.getSelection();
    let dbid_array = selected;
    this.setState({dbid_array: dbid_array});
  }
 
  createTask = () => {
    let {tasks, newTaskDesc,newTaskName, dbid_array} = this.state;
    let id = tasks.length;
    let newTask = {
      id: id,
      idproject: 1,
      name : newTaskName,
      description : newTaskDesc,
      dbid_array: dbid_array,
      status: 0,
    }
    tasks.push(newTask);
    this.setState({tasks: tasks, newTaskName: ''});
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({newTaskName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let {newTaskName, newTaskDesc, dbid_array} = this.state;
    this.fetchSelected();
    if(newTaskName === ''){
      alert("Please Input Task Name");
    }else if(newTaskDesc === '') {
      alert("Please Input Description");
    }else{
      this.createTask()
    }
  }

  handleDescription = (event)=>{
    event.preventDefault();
    this.setState({newTaskDesc: event.target.value});
  }

  render() {
    return (
      <div className="taskList">
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Enter Name" value={this.state.newTaskName} onChange={this.handleChange} />
        </label>
        <label>
          <input type="text" placeholder="Enter Description" value={this.state.newTaskDesc} onChange={this.handleDescription} />
        </label>
        <input type="submit" value="Add" />
      </form>
        <TaskItems items={this.state.tasks}/>
      </div>
    );
  }
}
 
export default TaskManagerPanel;