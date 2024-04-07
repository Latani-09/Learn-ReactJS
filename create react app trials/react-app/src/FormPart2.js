import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import { formEntry,formContainer } from './styles';
import {Input} from './Components';
//console.log(jsonobj);

function FormPart2({onNextChange,onPrevChange,formData,setFormData}){
function onNameChange(){}

    return<>
    <div className='container-fluid ' style={formContainer}>
    <form >
    <div className="container">
        <h1>Family Details</h1>
        <div className='inputGrp'>
        <h4>Spouse Details</h4>
        <Input id="spouseName" type='text' label='Name' name='spouseName' setFormInput={setFormData} formData={formData} />
        <Input id="spouseAge" type='number' label='Age' name='spouseAge' setFormInput={setFormData} formData={formData} />
        <Input id="spouseOccupation" type='text' label='Occupation' name='occupation' setFormInput={setFormData} formData={formData} />
        </div>
        <div className='inputGrp'>
        <h4>Child Details</h4>
        
        <Input id="childName" type='text' label='Child Name' name='childName' setFormInput={setFormData} formData={formData} />
        <Input id="childAge" type='number' label='Child Age' name='childAge' setFormInput={setFormData} formData={formData} />
        <Input id="childNIC" type='number' label='Child Age' name='childNIC' setFormInput={setFormData} formData={formData} />
        <Input id="childOccupation" type='text' label='Occupation' name='occupation' setFormInput={setFormData} formData={formData} />
        </div>

     <div className='row'>
        <div className='col-4'>
     <button type='submit' style={formEntry}onClick={onPrevChange}>Prev</button></div>
     <div className='col-4'></div>
     <div className='col-4'>
     <button type='submit' style={formEntry} onClick={onNextChange}>Next</button></div>
     </div>
    </div>
</form>
</div>
</>
}
export default FormPart2;
