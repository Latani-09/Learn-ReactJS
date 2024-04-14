import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import { formEntry ,formContainer} from './styles';

//console.log(jsonobj);



function FormPart1({onNextChange,formData,setFormData}){

    let countryList=[];

    const [Country, setCountry]= useState("");

    const [countries,setCountries]=useState(countryList);


    function  onNext(){
       console.log(formData)
       onNextChange();

    }
    const inputObj=[
        {id:"Name",name:"Name",type:"text",onChange:(e)=>{setFormData({...formData,Name:e.target.value});console.log('form',formData)}},
        {id:"Age",name:"Age",type:"number",onChange:(e)=>{setFormData({...formData,Age:e.target.value});console.log('form',formData)}},
        {id:"Occupation",name:"Occupation",type:"text",onChange:(e)=>{setFormData({...formData,Occupation:e.target.value});console.log('form',formData)}},
        {id:"District",name:"District",type:"text",onChange:(e)=>{setFormData({...formData,District:e.target.value});console.log('form',formData)}},
        {id:"City",name:"City",type:"text",onChange:(e)=>{setFormData({...formData,City:e.target.value});console.log('form',formData)}}

    ]
    function onCountryChange(e){
        setCountry(e.target.value);
    }
    return<>
    <div style={formContainer}>
    <form >
    
    <div className="container ">
        <h1>Personal Details</h1>
        {inputObj.map((obj)=>(
        <div key={obj.id} className='row' style={formEntry}>
            <div className='col-4' style={{ textAlign:'left'}}>
                <label htmlFor={obj.id} >{obj.name}</label></div>
            <div className='col-8'>
                <input name={obj.name} id={obj.id} type={obj.type} onChange={obj.onChange} style={{ width:'100%'}} ></input>
            </div>
        </div>))
         }
        
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
export default FormPart1;