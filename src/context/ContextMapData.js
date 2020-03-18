import React, { createContext, useState } from 'react';

export const ContextMapData = createContext();

const MapContextProvider = props => {
  const [locations, setLocation] = useState([]);

  const addLocation = location => {
    console.log('location added ', location);
    setLocation([...locations, { location }]);
  };
  return (
    <ContextMapData.Provider value={{ locations, addLocation }}>
      {props.children}
    </ContextMapData.Provider>
  );
};

export default MapContextProvider;
