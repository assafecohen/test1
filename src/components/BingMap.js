import React, { useContext } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import { ContextMapData } from '../context/ContextMapData';

const BingMap = () => {
  const { locations } = useContext(ContextMapData);
  const polyline = {
    location: locations.map(pin => [pin.location[0], pin.location[1]])
  };

  return (
    <ReactBingmaps
      pushPins={locations}
      bingmapKey='ArmR5gKLVTxbfU5NtFRBIMVxIXW0w5G73c0oPDnHkPfN2zhNy2XkYnLGoFMqRiVt'
      center={[32.0702944, 34.7856111]}
      zoom={7}
      polyline={polyline}
    ></ReactBingmaps>
  );
};

export default BingMap;
