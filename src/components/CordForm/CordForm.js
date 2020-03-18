import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ContextMapData } from '../../context/ContextMapData';

const CordForm = () => {
  const { addLocation } = useContext(ContextMapData);
  const [coordY, setCoordY] = useState('');
  const [coordX, setCoordX] = useState('');

  const setCoordXNumber = coordX => {
    setCoordX(+coordX);
  };
  const setCoordYNumber = coordY => {
    setCoordY(+coordY);
  };
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addLocation([coordX, coordY]);
        }}
      >
        <h1>Coordinates Form</h1>
        <Form.Group>
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            className='form-control'
            value={coordX}
            onChange={e => setCoordXNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            className='form-control'
            value={coordY}
            onChange={e => setCoordYNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Insert
        </Button>
      </form>
    </div>
  );
};

export default CordForm;
