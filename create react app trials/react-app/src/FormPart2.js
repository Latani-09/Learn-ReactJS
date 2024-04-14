import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import { formEntry ,formContainer} from './styles';

//console.log(jsonobj);



function FormPart2({onPrevChange,formData,setFormData}){

    

    function  onNext(){
       console.log(formData)
       onPrevChange();

    }
    const inputObj=[
        {id:"SpouseName",name:"Name",type:"text",onChange:(e)=>{setFormData({...formData,spouse:{...formData.spouse,Name:e.target.value}});console.log('form',formData)}},
        {id:"SpouseAge",name:"Age",type:"number",onChange:(e)=>{setFormData({...formData,spouse:{...formData.spouse,age:e.target.value}});console.log('form',formData)}},
        {id:"Occupation",name:"Occupation",type:"text",onChange:(e)=>{setFormData({...formData,spouse:{...formData.spouse,Occupation:e.target.value}});console.log('form',formData)}}
    ]

    return<>
    <div style={formContainer}>
    <form >
    
    <div className="container ">
        <h1>Spouse Details</h1>
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
     <div className='col-8'></div>
     <div className='col-4'>
     <button type='button' style={formEntry} onClick={onNext} >Next</button></div>
     </div>
    </div>
</form>
</div>
</>
}
export default FormPart2;