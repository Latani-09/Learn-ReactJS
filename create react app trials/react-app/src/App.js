import logo from './logo.svg';
import './App.css';
import FormPart1 from './features/FormPart1.js';
import FormPart2 from './features/FormPart2.js'
import { Children, useState } from 'react';
import { Counter } from './features/Counter.js';
function App() {
  const [currentPart,setCurrentPart]=useState(1);
  const [formData,setFormData]=useState({personal:{},spouse:{},Children:[{}]})

  
  return (
    <div className="App">
      <header className="App-header">
        {(currentPart==1)?(<FormPart1 onNextChange={()=>{setCurrentPart(2);}} formData={formData} setFormData={setFormData}/>):(<FormPart2 onPrevChange={()=>setCurrentPart(1)}formData={formData} setFormData={setFormData} />)}
        
      </header>
    </div>
  )
}

export default App;
