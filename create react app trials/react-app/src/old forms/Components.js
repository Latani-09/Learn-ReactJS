
import { formEntry } from "../styles";
export const Input=({id,type,label,name,setInput,onInputChange,formData})=>{

    function onChange(e){
        console.log('e',e)
        setInput(e.target.value);
        
    }
    return <>
         <div className='row' style={formEntry}>
     <div className='col-4' style={{ textAlign:'left'}}>
     <label htmlFor={id} >{label}</label></div>
        <div className='col-8'>
     <input name={name} id={id} type={type} onChange={onChange} style={{ width:'100%'}} ></input></div></div>
    </>

}
export const RadioInput=({id,type,label,name,setFormInput,formData,onInputChange})=>{
    console.log('name',name,'label',label);
    return <>
         <div className='row' style={formEntry}>
     <div className='col-4' style={{ textAlign:'left'}}>
     <label htmlFor={id[0]} >{label[0]}</label></div>
     <div className='col-4'>
     <input  name='maritalStatus' id={id[1]} type={type} value={name[0]}onChange={onInputChange} style={{ width:'50%'}}></input>
     <label htmlFor={id[1]}>{label[1]}</label></div>
     <div className='col-4'>
       
     <input  name='maritalStatus' id={id[2]} type={type} value={name[1]} ></input>
     <label htmlFor={id[2]}>{label[2]}</label></div>
     </div>

    </>


}

