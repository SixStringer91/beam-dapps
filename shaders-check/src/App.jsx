import React, { useState, useEffect,  useContext } from "react";
import Utils from "./utils/utils";
import init from './utils/drag-n-drop.js'
// import apiResult from "./components/inputPlace/apiResult";
import "./App.css";
import FormInput from "./components/formInput";
import FormInfo from "./components/formInfo";
import InputPlace from "./components/inputPlace";
// import apiResult from './components/inputPlace/index'
import ShaderContext from "./context";

function App() {
  // const [beamAp, setBeamAp] = useState(null)
  // const {allMethods, setAllMethods} = useContext(ShaderContext)
  const {dropFiles, setDropFiles} = useContext(ShaderContext)
  const {beamAp, setBeamAp} = useContext(ShaderContext)
  useEffect(() => {
    if(!beamAp){Utils.onLoad( async(beamAPI) => {
      setBeamAp(beamAPI)
    })}
  },[beamAp])
  useEffect(() => {
    if(beamAp){init(async (bytes, uploadDragFiles)=>{
      setDropFiles(uploadDragFiles[0]);
      Utils.callApi('manager-view', 'invoke_contract', {
        				contract: bytes,
        				create_tx: false,
        			});
   })}
  //  beamAp.api.callWalletApiResult.connect(apiResult);
  //  console.log(allApi)
  }, [beamAp])
  return (
    <div className="App">
      <div className="container container__header" id="container">
        <FormInput onChange={beamAp}/>
       { dropFiles && <FormInfo  dropFilesInfo={dropFiles}/>}
      </div>
      <div className="container container__content" id="json">
        <InputPlace />
        <div id="output__place" className="output__place"></div>
      </div>
    </div>
  );
}

export default App;
