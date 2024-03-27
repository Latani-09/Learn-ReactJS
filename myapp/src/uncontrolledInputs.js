/*In other words, you must pull the value from the field when needed.

Uncontrolled components are the simplest way to implement form inputs. There are certainly valued cases for them, especially when your form is straightforward. Unfortunately, they are not as powerful as their counterpart, so let's look at controlled inputs next.

Controlled Inputs */
const Form = () => { 
    const inputRef = useRef(null); 
    const fileref=useRef(null);
    const handleSubmit = () => { 
      const inputValue = inputRef.current.value; 
      const files = fileInput.current.files; 
      // Do something with the value 
    } 
    const [value, setValue] = useState(""); 
   
    const handleChange = (e) => { 
      setValue(e.target.value) 
    } 
   
    return ( 
        <div>
      <form onSubmit={handleSubmit}> 
        <input ref={inputRef} type="text"  ///uncontrolled      
         /> 
              <input    //file inputs are always uncontrolled
       ref={fileInput} 
       type="file" 
     /> 
      </form> 
            <form> 
            <input 
              value={value}    ///input as prop controlled component   input value is in sync with the handle change value
              onChange={handleChange} 
              type="text" 
            /> 
          </form> 
          </div>
    ); 
   }; 
  
/**  uncontrolled This flow pushes the value changes to the form component instead of pulling like the ref example from the uncontrolled version. Therefore, the Form component always has the input's current value without needing to ask for it explicitly.

As a result, your data (React state) and UI (input tags) are always in sync. Another implication is that forms can respond to input changes immediately, for example, by:

Instant validation per field 

Disabling the submit button unless all fields have valid data 

Enforcing a specific input format, like phone or credit card numbers 

Sometimes you will find yourself not needing any of that. In that case uncontrolled could be a more straightforward choice. */
