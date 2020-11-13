import React from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import StyledProgressbar from "./CustomProgressBars/StyledProgresssBar.js";

const MetricsPanel = () => {
  const percentage1 = 66;
  const percentage2 = parseInt((15 / 45)*100);

  return (
    <div>
      <h4>Metrics</h4>
      <div style={{ width: "100px", position: "absolute"}}>
        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
      </div>
      <div style={{ width: "100px", marginLeft: "130px"}}>
        <CircularProgressbar 
        value={percentage2}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt"
        })}
        text={`15/45`} />
      </div>
    </div>
  )
}
export default MetricsPanel;
