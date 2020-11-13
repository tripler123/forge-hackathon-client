import React, { Component } from "react";
require('./TaskCard.css');

class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
}

highlightSelected = async(task) =>{
  let dbid = task.dbid_array
  let state = JSON.parse(task.state)
  let {viewer} = this.props;
  await viewer.restoreState(state)
  await viewer.select(dbid)
}

  render() {
  return (
    <div className="taskcard" onClick={() =>{this.highlightSelected(this.props.task)}}>
      <div className="taskcard__title">
        <p className="taskcard__title--name">{this.props.task.name}</p>
        <p className="taskcard__title--date">11/11/2020</p>
      </div>
      <p className="taskcard__description">{this.props.task.description}</p>
    </div>
  )
  }
}

export default TaskCard
