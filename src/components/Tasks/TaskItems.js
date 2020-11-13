import React, { Component } from "react";

class TaskItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: []
        };
        this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
      }

      showTask(task) {
        return <li
          className={"taskItem"}
          key={`${task.id}`}
          id={task.id}
        >
          {task.name}
        </li>
      };
    

      render() {
        return (
            <ul className="task-list text-white">
                {
                    this.props.items.length !== 0 ?
                        this.props.items.map(this.showTask) :
                        <label className="font-weight-bold">You have no tasks for this project.</label>
                }
            </ul>
        );
      }
}
 
export default TaskItems;