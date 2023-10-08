import React from "react";
import { Waveform } from "@uiball/loaders";

import "./loadingScreen.css";

const LoadingScreen = ({ text }) => {
  return (
    <div className="loading-screen" id="loading-screen">
      <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
      <p>{text}</p>
    </div>
  );
};

export default LoadingScreen;
