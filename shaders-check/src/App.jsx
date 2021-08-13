import React, { useState, useEffect } from "react";
import Utils from "./utils";
import "./App.css";
import FormInput from "./components/formInput";
import FormInfo from "./components/formInfo";

function App() {
  const [beamApi, setBeamApi] = useState(null)
  useEffect(() => {
    Utils.onLoad( async(beamAPI) => {
      const beam = beamAPI
      // return setBeamApi(beam)
    },[]);
  })
  console.log(beamApi)
  return (
    <div className="App">
      <div className="container container__header" id="container">
        <FormInput />
        <FormInfo />
      </div>
      <div className="container container__content" id="json">
        <div className="input__place"></div>
        <div id="output__place" className="output__place"></div>
      </div>
    </div>
  );
}

export default App;
