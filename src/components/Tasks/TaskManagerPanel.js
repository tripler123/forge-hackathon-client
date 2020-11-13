import React, { Component } from "react";
// import TaskItems from "./TaskItems";
import TaskCard from './TaskCard.jsx'
import axios from 'axios';
import  {tasks} from '../fakeData';

class TaskManagerPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskName: '',
      newTaskDesc: '',
      dbid_array: [],
      tasks: tasks
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
  }

  // componentDidMount = () => {
  //   // let {tasks} = this.state;
  //   window.getTasks = () =>{
  //     const tasks = this.state.tasks;
  //     console.log(tasks)
  //   }
  //   window.addEventListener('viewerLoaded', (e) => {
  //     let {tasks} = this.state;
  //     this.viewer = e.detail.viewer;
  //     this.viewer.select(tasks[0].dbid_array);
  //     this.viewer.restoreState(JSON.parse(tasks[0].state));
  //     this.setState({viewer: this.viewer});
  //   });
  // }
  
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
    this.setState({tasks: tasks, newTaskName: '', newTaskDesc=''});
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({newTaskName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // let {newTaskName, newTaskDesc, dbid_array} = this.state;
    let {newTaskName, newTaskDesc} = this.state;
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
      <div onClick={this.unSelectedElements} className="col-lg-4 tasklist-container">
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Enter Name" value={this.state.newTaskName} onChange={this.handleChange} />
        </label>
        <label>
          <input type="text" placeholder="Enter Description" value={this.state.newTaskDesc} onChange={this.handleDescription} />
        </label>
        <input type="submit" value="Add" />
      </form>
        {this.state.tasks.map((task) => {
          return (
            <TaskCard task={task} viewer={this.state.viewer}/>
          )
        })}
      </div>
    );
  }
}
 
export default TaskManagerPanel;