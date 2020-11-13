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
          idproject: 0,
          name : "Do Something",
          description : "Do Something description",
          dbid_array: [4844, 5315, 5544, 5550, 5634, 5638],
          status: 0,
          state: '{"seedURN":"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c2FudG9yaW5pX2J1Y2tldC9MYW1iZGFTbWFsbEV4YW1wbGUucnZ0","objectSet":[{"id":[4844,5315,5544,5550,5634,5638],"idType":"lmv","isolated":[],"hidden":[],"explodeScale":0}],"viewport":{"name":"","eye":[-18.82012886309123,7.4277490227329315,2.873569841815601],"target":[-28.726220127952498,0.39014839729919615,0.0335087882100642],"up":[-0.18553355749395137,-0.13180890881653556,0.9737575214601595],"worldUpVector":[0,0,1],"pivotPoint":[-16.15822172164917,-0.4117450714111328,6.233595371246338],"distanceToOrbit":1.5433543835112524,"aspectRatio":1.204003063774893,"projection":"perspective","isOrthographic":false,"fieldOfView":53.13010235415598},"renderOptions":{"environment":"Boardwalk","ambientOcclusion":{"enabled":true,"radius":13.123359580052492,"intensity":1},"toneMap":{"method":1,"exposure":-7,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":true,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[],"floorGuid":null}'
        },
        {
          idproject: 1,
          name : "Structural Column Formwork",
          description : "Structural Column description",
          dbid_array: [5439, 5502, 5534, 5546, 5624, 5636],
          status: 0,
          state: '{"seedURN":"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c2FudG9yaW5pX2J1Y2tldC9MYW1iZGFTbWFsbEV4YW1wbGUucnZ0","objectSet":[{"id":[4854,4856,5197,5199],"idType":"lmv","isolated":[],"hidden":[],"explodeScale":0}],"viewport":{"name":"","eye":[49.12882876657487,-3.1372349915403452,12.761158731844295],"target":[1.475936834578512,-0.5792850291037346,-4.227258945435002],"up":[-0.33489159749732184,0.017976578430141932,0.9420851662952965],"worldUpVector":[0,0,1],"pivotPoint":[0,0,0],"distanceToOrbit":50.65518288063459,"aspectRatio":1.204003063774893,"projection":"orthographic","isOrthographic":true,"orthographicHeight":50.65518288063472},"renderOptions":{"environment":"Boardwalk","ambientOcclusion":{"enabled":true,"radius":13.123359580052492,"intensity":1},"toneMap":{"method":1,"exposure":-7,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":true,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[],"floorGuid":null}'
        },
        {
          idproject: 2,
          name : "Structural Framing",
          description : "Structural Framing description",
          dbid_array: [5092, 5101, 5113],
          status: 0,
          state: '{"seedURN":"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c2FudG9yaW5pX2J1Y2tldC9MYW1iZGFTbWFsbEV4YW1wbGUucnZ0","objectSet":[{"id":[4844,5315,5544,5550,5634,5638],"idType":"lmv","isolated":[],"hidden":[],"explodeScale":0}],"viewport":{"name":"","eye":[-12.794062591253605,13.452475933887392,-96.84153161753039],"target":[-12.579555406029149,-1.274233266084208,-0.16619396560968555],"up":[0.014398183784887575,-0.9884884060452446,-0.1506099711766409],"worldUpVector":[0,0,1],"pivotPoint":[0,0,0],"distanceToOrbit":97.79081187568654,"aspectRatio":1.204003063774893,"projection":"orthographic","isOrthographic":true,"orthographicHeight":97.79081187568656},"renderOptions":{"environment":"Boardwalk","ambientOcclusion":{"enabled":true,"radius":13.123359580052492,"intensity":1},"toneMap":{"method":1,"exposure":-7,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":true,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[],"floorGuid":null}'
        },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
  }

  componentDidMount = () => {
    let {tasks} = this.state;
    window.getTasks = () =>{
      const tasks = this.state.tasks;
      console.log(tasks)
    }
    window.addEventListener('viewerLoaded', (e) => {
      let {tasks} = this.state;
      this.viewer = e.detail.viewer;
      this.viewer.select(tasks[0].dbid_array);
      this.viewer.restoreState(JSON.parse(tasks[0].state));
      this.setState({viewer: this.viewer});
    });
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
        <TaskItems items={this.state.tasks} viewer={this.state.viewer}/>
      </div>
    );
  }
}
 
export default TaskManagerPanel;