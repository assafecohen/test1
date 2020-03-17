import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const CordForm = ({ setPingsonMap, pingsOnMap }) => {
  const [XCoord, setXCoord] = useState('');
  const [YCoord, setYCoord] = useState('');
  return (
    <div>
      <form
        onSubmit={e => {
          console.log(pingsOnMap);
          e.preventDefault();
          setPingsonMap([
            ...pingsOnMap,
            {
              location: [+XCoord, +YCoord],
              option: { color: 'red' },
              addHandler: { type: 'click', callback: console.log('working') }
            }
          ]);
        }}
      >
        <h1>Coordinates Form</h1>
        <Form.Group>
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            className='form-control'
            value={XCoord}
            onChange={e => setXCoord(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            className='form-control'
            value={YCoord}
            onChange={e => setYCoord(e.target.value)}
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
