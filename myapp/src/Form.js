import { useState } from "react";
import  "./Form.css";

function Form(){
    const [username,setUsername]=useState('');
    const [nameText,setNameText]=useState('');
    const [purpose,setPurpose]=useState('');
    const [dob,setDob]=useState('');
    const checkContainUpper=()=>{
        const regex=new RegExp("[A-Z]");
        const result= regex.test(username)?(""):(<p style={{color:'red'}} >Must contain atleast one Upper Case letter</p>);
        return result;
    }
    const checkContainNumber=()=>{
        const regex=new RegExp("[0-9]");
        const result= regex.test(username)?(""):(<p style={{color:'red'}}>Must contain atleast one digit(0-9)</p>);
        return result;
    }
    const checkLength=()=>{

        const result= (username.length>=8)?(""):(<p style={{color:'red'}}>Must contain atleast 8 characters</p>);
        return result;
    }

    const handleUserNameChange=(e)=>{
        e.preventDefault();    //to prevent default behaviour of react form  automatical empty the input field
        setUsername(e.target.value);
    };
    const handleNameChange=(e)=>{
        e.preventDefault();    
        setNameText(e.target.value);
    };
    const handlePurposeChange=(e)=>{
        e.preventDefault();    //to prevent default behaviour of react form  automatical empty the input field
        setPurpose(e.target.value);
    };

    const getFormValidity=()=>{
       return dob&&nameText&&purpose&&!checkContainNumber()&&!checkContainUpper()&&!checkLength();
    }
    return(
        <div className="surveyForm">
        <form>
            <h4 className="formTitle">Registration Form</h4>
            <div className="box">
                <div className="col-3">
                    <label htmlFor="username">User name</label>
                </div>
                <div className="col-3">
                    <input type="text" id="username" value={username} onChange={e=>handleUserNameChange(e)}></input>
                    
                </div>
                <div className="col-6" style={{textAlign:'left' ,marginInline:'1px'}}>
                {checkContainNumber()}{checkContainUpper()}{checkLength()}
                </div>
                </div>
            <div className="box">
                <div className="col-3">
            <label  htmlFor="name" >Full Name</label>
           
            </div>
            <span style={{color:"red",float:"left",display:'inline'}}>*</span>
            <div className="col-6">
            
            <input id="name" placeholder="Name" value={nameText} onChange={handleNameChange}></input>  {/**Controlled component  */}
            </div></div>
            <div className="box">
              <div className="col-3">   
            <label for="purpose" >Purpose</label>  </div>
            <span style={{color:"red",float:"left",display:'inline'}}>*</span>
            <div className="col-6">
                <select value={purpose} onChange={handlePurposeChange}>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Charity">Charity</option>
            </select>
            </div></div>
            <div className="box">
                <div className="col-3">
            <label for="dob">DOB  </label>
            </div>
            <span style={{color:"red",float:"left",display:'inline'}}>*</span>
            <div className="col-6">
            <input type="date" id="dob" value={dob} onChange={e=>setDob(e.target.value)}></input>
            </div>
            </div>
            <div className="box">
                <div className="col-3">
            <label for="postContent" rows={4} cols={40}>textarea</label>
            </div>
            <div className="col-6">
            <textarea name="postContent" id="postContent" />
            </div>
            </div>  


            <div className="box">
                
            <div className="col-3">
            <label for="media" rows={4} cols={40}>Social media</label>
                </div>
            <div className="box">
                <div className="col-3">
            <label htmlFor="media" rows={4} cols={40}>Linked in</label>
                </div>
            <div className="col-3">

            <input type="checkbox" name="media" ></input>
            </div>
            </div>  
            <div className="box">
            <div className="col-3">

                </div>
                <div className="col-3">
            <label htmlFor="media" rows={4} cols={40}>Email</label>
                </div>
            <div className="col-3">

            <input type="checkbox" name="media" ></input>
            </div>
            </div>  
            </div>


            <button disabled={!getFormValidity()} type="submit" title="Fill required field before submit">Submit</button>
        </form>
        </div>
    )
}
export default Form;