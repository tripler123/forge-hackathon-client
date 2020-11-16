import React from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
require('./MetricToolBar.css');

function MetricToolBar(context) {
  // const data = require('./fakeData.json');
  // const taskCount = data.project.data.taskCount;
  // const completedTasks = data.project.data.tasksCompleted;
  // const percentage = ((completedTasks/taskCount)*100).toFixed();
  return (
      <div className="metricbar custom-container">
        <div className="project">
          <img className="project__img"
            src="https://static.dezeen.com/uploads/2016/02/danish-maritime-museum-bjarke-ingels-big-rasmus-hjortsh-_dezeen_1568_2.jpg"
            alt="project" />
          <div className="project__text">
            <p className="project__text--name">PARQUE REPUBLICA II</p>
            <p>Lima - Perú</p>
          </div>
        </div>
        <div className="metrics">
          <div className="metrics__count">
            <p className="metrics__count--number">{context.context.getTaskCount()}</p>
            <p className="metrics__count--text">number of</p>
            <p className="metrics__count--text">tasks saved</p>
          </div>
          <div className="metrics__count--saparator">
            
          </div>
          <div className="metrics__percent">
            <p className="metrics__count--number">{context.context.getTaskPercent()}%</p>
            <p className="metrics__count--text">Percentage of</p>
            <p className="metrics__count--text">tasks solved</p>
          </div>
        </div>
      </div>
  )
}

export default MetricToolBar
