import React, { useState } from 'react';

import ForgeViewer from './components/ForgeViewer.jsx';
import TaskManagerPanel from './components/TaskManagerPanel.jsx';
import MetricsPanel from './components/MetricsPanel.jsx';
import ViewerPanel from './components/ViewerPanel.jsx';
import {Container, Row, Col} from 'react-bootstrap'

require('./index.css');

function App() {
  return (
      <Container fluid>
        <Row>
          <Col><h1>Forge AU Hackathon</h1></Col>
        </Row>
        <Row>
          <Col lg={7}><h2>Project Name</h2></Col>
          <Col lg={5}>
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
