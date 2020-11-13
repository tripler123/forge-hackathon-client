import React, { useState } from 'react';

import TopBar from './components/TopBar'
import ForgeViewer from './components/ForgeViewer';
import TaskManagerPanel from './components/Tasks/TaskManagerPanel';
import MetricsPanel from './components/MetricsPanel';
import ViewerPanel from './components/ViewerPanel';
import {Container, Row, Col} from 'react-bootstrap'
import "react-circular-progressbar/dist/styles.css";

require('./index.css');

function App() {
  return (
      <Container fluid>
        <Row className="bg-red">
            <TopBar />
        </Row>
        <Row>
          <Col lg={8}><h2>Project Name</h2></Col>
          <Col lg={4}>
            <MetricsPanel></MetricsPanel>
          </Col>
        </Row>
        <Row>
          <Col lg={8} style={{}} >
            {/* <ViewerPanel /> */}
            <ForgeViewer />
          </Col>
          <Col lg={4}>
            <TaskManagerPanel></TaskManagerPanel>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
