import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import FormPart2 from './FormPart2'
import { useState } from 'react';
function App() {
  const [currentPart,setCurrentPart]=useState(1);
  const [formData,setFormData]=useState({Name:'',Age:null,Country:'',District:'',spouseName:'',spouseAge:null,shildName:'',childeAge:null,childOccupation:'',spouseOccupation:''})

  
  return (
    <div className="App">
      <header className="App-header">
        {(currentPart==1)?(<Form onNextChange={()=>{setCurrentPart(2);}} formData={formData} setFormData={setFormData}/>):(<FormPart2 onPrevChange={()=>setCurrentPart(1)}formData={formData} setFormData={setFormData} />)}
        

      </header>
    </div>
  )
}

export default App;
