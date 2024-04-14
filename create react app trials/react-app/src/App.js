import logo from './logo.svg';
import './App.css';
import FormPart1 from './FormPart1.js';
import FormPart2 from './FormPart2.js'
import { Children, useState } from 'react';
function App() {
  const [currentPart,setCurrentPart]=useState(1);
  const [formData,setFormData]=useState({Name:'',Age:null,Country:'',District:'',spouse:{Name:'',Age:null},Children:[{Name:'',Age:null,Occupation:'',Occupation:''}]})

  
  return (
    <div className="App">
      <header className="App-header">
        {(currentPart==1)?(<FormPart1 onNextChange={()=>{setCurrentPart(2);}} formData={formData} setFormData={setFormData}/>):(<FormPart2 onPrevChange={()=>setCurrentPart(1)}formData={formData} setFormData={setFormData} />)}
        

      </header>
    </div>
  )
}

export default App;
