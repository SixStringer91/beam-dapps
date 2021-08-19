import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import ShaderContext from './context'
import './index.css'
import App from './App'

const Main = () =>{
  const [dropFiles, setDropFiles] = useState(null)
  const [allMethods, setAllMethods] = useState(null)
  const [beamAp, setBeamAp] = useState(null)


  return <React.StrictMode>
  <ShaderContext.Provider value={{dropFiles, setDropFiles, beamAp, setBeamAp, allMethods, setAllMethods} }>
  <App />
  </ShaderContext.Provider>
</React.StrictMode>
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
)
