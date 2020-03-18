import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import BingMap from './components/BingMap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CordForm from './components/CordForm/CordForm';
import MapContextProvider from './context/ContextMapData';

const StyledRow = styled(Row)`
  height: 100%;
  padding: 30px;
  color: #fff;
`;
function App() {
  return (
    <Container style={{ height: '100%' }}>
      <MapContextProvider>
        <StyledRow>
          <Col sm={4}>
            <CordForm />
          </Col>
          <Col sm={8}>
            <BingMap />
          </Col>
        </StyledRow>
      </MapContextProvider>
    </Container>
  );
}

export default App;
