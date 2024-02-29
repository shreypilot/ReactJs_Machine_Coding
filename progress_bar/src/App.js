import './App.css';
import {useEffect,useState} from "react";

import ProgressBar from "./components/ProgressBar"
function App() {
  const [value,setValue] = useState(0);
  const [success,setSuccess] = useState(false);

  useEffect(()=>{
    setInterval(()=>{

      setValue((val) => val + 1);

    },100)

  },[])
  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar value ={value}
      onComplete={()=>{setSuccess(true)}} />
      <span>{success ? "Complete!" : "LOading"}</span>
    </div>
  );
}

export default App;
