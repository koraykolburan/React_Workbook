import { useState } from "react";

function MyForm() {
     const [inputs, setInputs] = useState({}); //This is for Handling Forms useState()

     const handleChange = (event) => {
          const name = event.target.name; //To access the fields in the event handler 
          const value = event.target.value;
          setInputs(values =>({...values, [name]: value}))
     }

     const handleSubmit = (event) => {
          event.preventDefault();
          alert(`You name is: ${inputs.username}, and your age is: ${inputs.age}`)
     }

     return (
          <form onSubmit={handleSubmit}>
               <label>Name & Surname: <br />
               <input
               type="text"
               name="username"
               value={inputs.username || ""}
               onChange={handleChange}
               /> 
               </label><br />
               <label>Age: <br />
               <input
               type="number"
               name="age"
               value={inputs.age || ""}
               onChange={handleChange}
               /> <br />
               </label>
               <input type="submit" />
          </form>
     )
}

export default MyForm;