import { ReactBingmaps } from 'react-bingmaps';
import React, { Component } from 'react';

const BingMap = ({ pushPins }) => {
  const polyline = {
    location: pushPins.map(pin => [pin.location[0], pin.location[1]])
  };
  return (
    <ReactBingmaps
      pushPins={pushPins}
      polyline={polyline}
      bingmapKey='ArmR5gKLVTxbfU5NtFRBIMVxIXW0w5G73c0oPDnHkPfN2zhNy2XkYnLGoFMqRiVt'
      center={[32.0853, 34.7818]}
      zoom={3}
    ></ReactBingmaps>
  );
};

export default BingMap;
