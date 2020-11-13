import React, { useState } from 'react';

import TopBar from './components/TopBar'
import MetricToolBar from './components/MetricToolBar'
import ForgeViewer from './components/ForgeViewer';

import TaskManagerPanel from './components/Tasks/TaskManagerPanel';
import MetricsPanel from './components/MetricsPanel';
import ViewerPanel from './components/ViewerPanel';
import {Container, Row, Col} from 'react-bootstrap'
import "react-circular-progressbar/dist/styles.css";

require('./index.css');

function App() {
  return (
      <Container fluid style={{background: "#EEEEEE"}}>
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
