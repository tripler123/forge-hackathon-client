import React from 'react';
import {Container, Row} from 'react-bootstrap'

import TopBar from './components/TopBar'
import MetricToolBar from './components/MetricToolBar'
import ForgeViewer from './components/ForgeViewer';
import TaskManagerPanel from './components/Tasks/TaskManagerPanel';
import TaskProvider from './components/Tasks/TaskProvider';
import TaskContext from "./components/Tasks/TaskContext"

import "react-circular-progressbar/dist/styles.css";

require('./index.css');

function App() {
  return (
    <TaskProvider>
        <Container fluid className="general-bg" >
          <Row className="toolbar-bg">
              <TopBar />
          </Row>
          <Row className="metricbar-bg">
            <TaskContext.Consumer>
              {context => (
                <MetricToolBar context={context}/>
              )}
            </TaskContext.Consumer>
          </Row>
          <Row className="custom-container" style={{margin: "0 auto", background: "#EAEAEA"}}>
            <ForgeViewer/>
            <TaskContext.Consumer>
              {context => (
                <TaskManagerPanel context={context}></TaskManagerPanel>
              )}
            </TaskContext.Consumer>
          </Row>
        </Container>
    </TaskProvider>
  );
}

export default App;
