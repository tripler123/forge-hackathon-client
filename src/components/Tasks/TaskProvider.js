import React, { Component } from "react";
import TaskContext from './TaskContext';
const data = require('../fakeData.json');

class TaskProvider extends Component {
    state = {
        tasks: data.tasks,
        completed: 1,
        getTaskCount:()=>{},
        getTaskPercent: ()=>{},
        updateTasks: ()=>{},
    };

    render() {
        return (
            <TaskContext.Provider
                value={{
                    tasks: this.state.tasks,
                    getTaskCount: () =>{
                        return this.state.tasks.length
                    },
                    getTaskPercent: ()=>{
                        const count = this.state.tasks.length
                        const completed = this.state.completed
                        return ((completed/count)*100).toFixed();
                    },
                    updateTasks: (tasks) =>{
                        this.setState({
                            tasks: tasks
                        });
                    }
                }}
            >
                {this.props.children}
            </TaskContext.Provider>
        );
    }
}

export default TaskProvider;