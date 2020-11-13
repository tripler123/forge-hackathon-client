import React from 'react';
import {Container, Row} from 'react-bootstrap'

import TopBar from './components/TopBar'
import MetricToolBar from './components/MetricToolBar'
import ForgeViewer from './components/ForgeViewer';
import TaskManagerPanel from './components/Tasks/TaskManagerPanel';

import "react-circular-progressbar/dist/styles.css";

require('./index.css');

function App() {
  return (
      <Container fluid className="general-bg" >
        <Row className="toolbar-bg">
            <TopBar />
        </Row>
        <Row className="metricbar-bg">
            <MetricToolBar />
        </Row>
        <Row className="custom-container" style={{margin: "0 auto", background: "#EAEAEA"}}>
            <ForgeViewer />
            <TaskManagerPanel></TaskManagerPanel>
        </Row>
      </Container>
  );
}

export default App;
