import React, { Component } from "react";
import {Card} from 'react-bootstrap'

class TaskItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.url_base = 'https://forge-hackathon-api.herokuapp.com/'
    }

    showTask=(task)=> {
    return (
        <Card key={`${task.id}`} id={task.id} onClick={this.highlightSelected(task)}>
            {task.name}
            <br/>
            {task.description}
        </Card>
        );
    };
    
    highlightSelected = (task) =>{
        let {tasks} = this.state;
    }

    render() {
    return (
        this.props.items.map(this.showTask)
    );
    }
}
 
export default TaskItems;