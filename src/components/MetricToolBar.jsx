import React from 'react'
require('./MetricToolBar.css')
function MetricToolBar() {
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
      <div className="metric">
      </div>
    </div>
  )
}

export default MetricToolBar
