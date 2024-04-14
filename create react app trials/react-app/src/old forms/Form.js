import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import { formEntry ,formContainer} from '../styles';
import {Input,RadioInput} from './Components';

import jsonobj from '../countries.json';

//console.log(jsonobj);



function Form({onNextChange,formData,setFormData}){

    let countryList=[];
    const [form,    setForm]   = useState({name:'',country:'',age:null})
    const [input,   setInput]  = useState();
    const [Name,    setName]   = useState("");
    const [Country, setCountry]= useState("");
    const [Age,     setAge]    = useState("");
    const [District,     setDistrict]    = useState("");

    function submit(){

    }
    const [countries,setCountries]=useState(countryList);


    function  onNext(){
        console.log('onNext-----------------------',Name,Age,Country);
        setInput('input set');
        console.log(input);
        setForm({...form,name:"myName",age:"myAge",country:"mycountry"});
       setForm({name:{Name},age:{Age},country:{Country}});
       console.log('form',form);
       
       setFormData({...formData,name:{Name},age:{Age},country:{Country}})
       console.log('formData',formData);
       onNextChange();

    }
    function onCountryChange(e){
        setCountry(e.target.value);
    }
    return<>
    <div style={formContainer}>
    <form >
    
    <div className="container ">
        <h1>Personal Details</h1>
        <Input id="Name" type='text' label='Name' name='Name' setInput={setName}  />
        <Input id="Age" type='number' label='Age' name='Age' setInput={setAge}  />
        <div className='row ' style={formEntry}>
        <div className='col-4' style={{ textAlign:'left'}}>
        <label>Country</label></div>
        <div className='col-8'>
        <input id="Country" list='countries' label='Country' name='Country' onChange={onCountryChange} style={{ width:'100%'}}  />
        <datalist id="countries" >
            {countries.map((country, index) => (
        <option key={index} value={country}>{country}</option>))}</datalist>
        </div>
        </div>
        <Input id="District" label="District" name="District" setInput={setDistrict} ></Input>
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
     <button type='button' style={formEntry} onClick={onNext} >Next</button></div>
     </div>
    </div>
</form>
</div>
</>
}
export default Form;