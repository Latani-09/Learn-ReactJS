import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import { formEntry ,formContainer} from './styles';
import {Input,RadioInput} from './Components';

import jsonobj from './countries.json';

//console.log(jsonobj);



function Form({onNextChange,formData,setFormData}){

    let countryList=[];
    const [form,setForm]=useState({name:'',country:'',age:null})
    function submit(){

    }
    const [countries,setCountries]=useState(countryList);

    const  onNameChange=(e)=>{
e.preventDefault();

    }
    const onNext=()=>{
        onNextChange();
        console.log(formData);
    }
    return<>
    <div style={formContainer}>
    <form >
    
    <div className="container ">
        <h1>Personal Details</h1>
        <Input id="Name" type='text' label='Name' name='Name' setFormInput={setFormData} formData={formData} />
        <Input id="Age" type='number' label='Age' name='Age' setFormInput={setFormData} formData={formData} />
        <Input id="Country" list='countries' label='Country' name='Country' setFormInput={setFormData} formData={formData} />
        <datalist id="countries" >
            {countries.map((country, index) => (
        <option key={index} value={country}>{country}</option>))}</datalist>

        <Input id="District" type='text' label='District' name='District' setFormInput={setFormData} formData={formData} />
        <RadioInput id="maritalStatus" type='radio' label={['Marital Status','Single','Married']} name={['Single','Married']} setFormInput={setFormData} formData={formData} />
        

     

     <div className='row ' style={formEntry}>
     <div className='col-4'>
     <label htmlFor="maritalStatus" >Marital Status</label></div>
        <div className='col-4'>
     <input type='radio' id='single' name='maritalStatus'></input>
     <label htmlFor='single'>Single</label></div>
     <div className='col-4'>
       
     <input type='radio' id='married' name='maritalStatus'></input>
     <label htmlFor='married'>Married</label></div>
     </div>

     <div className='row ' style={formEntry}>
     <div className='col-8'></div>
     <div className='col-4'>
     <button type='button' style={formEntry} onClick={onNext}>Next</button></div>
     </div>
    </div>
</form>
</div>
</>
}
export default Form;