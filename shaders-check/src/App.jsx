import React, { useState, useEffect } from "react";
import Utils from "./utils/utils";
import init from './utils/drag-n-drop.js'
import "./App.css";
import FormInput from "./components/formInput";
import FormInfo from "./components/formInfo";

function App() {
  const [beamAp, setBeamAp] = useState(null)
  const [dropFiles, setDropFiles] = useState(null)

  
  useEffect(() => {
    Utils.onLoad( async(beamAPI) => {
      setBeamAp(beamAPI)
    });
  },[])
  useEffect(() => {
    init(async (bytes, uploadDragFiles)=>{
      setDropFiles(uploadDragFiles[0]);
      console.log(beamAp)
      Utils.callApi('manager-view', 'invoke_contract', {
        				contract: bytes,
        				create_tx: false,
        			});
      let apiRes = json => {
        const apiAnswer = JSON.parse(json);
        console.log(apiAnswer.id)
    }
      console.log(beamAp.api.callWalletApiResult.connect(apiRes))
      console.log(apiRes)
   })
  }, [beamAp])
  return (
    <div className="App">
      <div className="container container__header" id="container">
        <FormInput onChange={beamAp}/>
       { dropFiles && <FormInfo  dropFilesInfo={dropFiles}/>}
      </div>
      <div className="container container__content" id="json">
        <div className="input__place"></div>
        <div id="output__place" className="output__place"></div>
      </div>
    </div>
  );
}

export default App;
