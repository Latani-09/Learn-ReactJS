import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import { formEntry ,formContainer} from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonal,selectForm } from './formReducer';

//console.log(jsonobj);



function FormPart1({onNextChange,formData,setFormData}){
    let countryList=[];
    const [Country, setCountry]= useState("");
    const [countries,setCountries]=useState(countryList);
    const dispatch=useDispatch();
    const personalData=useSelector(selectForm)
    async function  onNext(){
       debugger
       dispatch(addPersonal(formData));
       onNextChange();    }
  
    function onCountryChange(e){
        setCountry(e.target.value);}
        const onInputChange = (e, field) => {
            setFormData({ ...formData,personal:{...formData.personal,[field]: e.target.value }});
            console.log('form', formData);
        };
    return<>
    <div style={formContainer}>
    <form >
    <div className="container ">
        <h1>Personal Details</h1>       
        <div>
            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label htmlFor="Name"><b>Name</b></label>
                </div>
                <div className='col-8'>
                    <input name="Name" id="Name" type="text" onChange={(e) => onInputChange(e, "Name")} style={{ width: '100%' }} />
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label htmlFor="DOB"><b>DOB</b></label>
                </div>
                <div className='col-8'>
                    <input name="DOB" id="DOB" type="date" onChange={(e) => onInputChange(e, "DOB")} style={{ width: '100%' }} />
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label htmlFor="Age"><b>Age</b></label>
                </div>
                <div className='col-8'>
                    <input name="Age" id="Age" type="number" onChange={(e) => onInputChange(e, "Age")} style={{ width: '100%' }} />
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label><b>Gender</b></label>
                </div>
                <div className='col-8'>
                    <div className='row'>
                    <div className='col-6'>
                        <input name="Gender" id="male" type="radio" value="male" onChange={(e) => onInputChange(e, "Gender")} />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className='col-6'>
                        <input name="Gender" id="female" type="radio" value="female" onChange={(e) => onInputChange(e, "Gender")} />
                        <label htmlFor="female">Female</label>
                    </div>
                    </div>
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label htmlFor="Occupation"><b>Occupation</b></label>
                </div>
                <div className='col-8'>
                    <input name="Occupation" id="Occupation" type="text" onChange={(e) => onInputChange(e, "Occupation")} style={{ width: '100%' }} />
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label><b>Source of income</b></label>
                </div>
                <div className='col-8'>
                    <div className='row'>
                    <div className='col-3'>
                        <input name="SourceOfIncome" id="Business" type="radio" value="Business" onChange={(e) => onInputChange(e, "SourceOfIncome")} />
                        <label htmlFor="Business">Business</label>
                    </div>
                    <div  className='col-3'>
                        <input name="SourceOfIncome" id="Employment" type="radio" value="Employment" onChange={(e) => onInputChange(e, "SourceOfIncome")} />
                        <label htmlFor="Employment">Employment</label>
                    </div>
                    <div  className='col-3'>
                        <input name="SourceOfIncome" id="Investment" type="radio" value="Investment" onChange={(e) => onInputChange(e, "SourceOfIncome")} />
                        <label htmlFor="Investment">Investment</label>
                    </div>
                    <div  className='col-3'>
                        <input name="SourceOfIncome" id="Others" type="radio" value="Others" onChange={(e) => onInputChange(e, "SourceOfIncome")} />
                        <label htmlFor="Others">Others</label>
                    </div>
                    </div>
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label htmlFor="Citizenship"><b>Citizenship</b></label>
                </div>
                <div className='col-8'>
                    <input name="Citizenship" id="Citizenship" type="text" onChange={(e) => onInputChange(e, "Citizenship")} style={{ width: '100%' }} />
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label htmlFor="Country"><b>Country</b></label>
                </div>
                <div className='col-8'>
                    <input id="Country" list='countries' name='Country' onChange={onCountryChange} style={{ width: '100%' }} />
                    <datalist id="countries">
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>))}
                    </datalist>
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-4' style={{ textAlign: 'left' }}>
                    <label htmlFor="maritalStatus"><b>Marital Status</b></label>
                </div>
                <div className='col-8'>
                    <input type='radio' id='single' name='maritalStatus'></input>
                    <label htmlFor='single'>Single</label>
                    <input type='radio' id='married' name='maritalStatus'></input>
                    <label htmlFor='married'>Married</label>
                </div>
            </div>

            <div className='row' style={formEntry}>
                <div className='col-8'>
                </div>
                <div className='col-4'>
                    <button type='button' onClick={onNext}><b>Save and Continue</b></button>
                </div>
            </div>
        </div>
    </div>
</form>
</div>
</>
}
export default FormPart1;


/**
 *   const inputObj=[
        {id:"Name",name:"Name",label:'Name',type:"text",onChange:(e)=>{setFormData({...formData,Name:e.target.value});console.log('form',formData)}},
        {id:"DOB",name:"DOB",label:'DOB',type:"date",onChange:(e)=>{setFormData({...formData,DOB:e.target.value});console.log('form',formData)}},
        {id:"Age",name:"Age",label:'Age',type:"number",onChange:(e)=>{setFormData({...formData,Age:e.target.value});console.log('form',formData)}},
        {id:["male","female"],name:"Gender",label:["Male","Female"],type:"radio",onChange:(e)=>{setFormData({...formData,Gender:e.target.value});console.log('form',formData)}},
        {id:"Occupation",name:"Occupation",label:'Occupation',type:"text",onChange:(e)=>{setFormData({...formData,Occupation:e.target.value});console.log('form',formData)}},
        {id:['Business','Employment','Investment','Others'],name:"Source of income",label:['Business','Employment','Investment','Others'],type:"radio",onChange:(e)=>{setFormData({...formData,SourceOfIncome:e.target.value});console.log('form',formData)}},
        {id:"Citizenship",name:"Citizenship",label:'Citizenship',type:"text",onChange:(e)=>{setFormData({...formData,Citizenship:e.target.value});console.log('form',formData)}},
       ]
 */