import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import "./LoadingScreen.css"

const LoadingScreen = () => {
  return (
    <div className="loading">
      <ClimbingBoxLoader color="#ff7e39" />
    </div>
  );
};

export default LoadingScreen;