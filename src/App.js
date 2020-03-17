import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import BingMap from './components/BingMap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CordForm from './components/CordForm/CordForm';
function App() {
  const [pingsOnMap, setPingsOnMap] = useState([]);
  return (
    <Container style={{ height: '100%' }}>
      <Row style={{ height: '100%' }}>
        <Col>
          <CordForm setPingsonMap={setPingsOnMap} pingsOnMap={pingsOnMap} />
        </Col>
        <Col>
          <BingMap pushPins={pingsOnMap} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
