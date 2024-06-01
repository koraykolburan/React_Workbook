import { useState } from "react";

function MyForm() {
     const [name, setName] = useState(""); //This is for Handling Forms

     const handleSubmit = (event) => { //This is for submitting Forms
          event.preventDefault();
          alert(`The name you entered was: ${name}`)
     }

     return (
          <form onSubmit={handleSubmit}> 
               <label for="names">
               Your E-mail: <br />
               <input
               type="text"
               value={name} 
               onChange={(e) => setName(e.target.value)} 
               id="names" 
               name="names" 
               /> <br />
               <input type="submit" />
               </label>
          </form>
     )
}

export default MyForm;