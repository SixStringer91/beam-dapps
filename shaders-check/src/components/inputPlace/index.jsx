import React, {useState} from 'react'
import { useContext } from 'react'
import ShaderContext from '../../context'


function InputPlace() {
  const {beamAp, setBeamAp} = useContext(ShaderContext)
  const {allMethods, setAllMethods} = useContext(ShaderContext)

    
    const apiResult  = (json) => {
        const  apiAnswer = JSON.parse(json);
        if (apiAnswer.id == 'form-generator') {
            let shaderOut = apiAnswer;
            setAllMethods(JSON.parse(shaderOut.result.output))
      }
      }
   {beamAp && beamAp.api.callWalletApiResult.connect(apiResult)}

   console.log(allMethods)
//    const addedPizzas = allMethods &&  Object.keys(allMethods).map(key=>{
//     return allMethods.allMethods
// });
// console.log(addedPizzas)
    return (
        <div className="input__place">
     
        </div>
    )
}

export default InputPlace
