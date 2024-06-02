import { useState } from "react";

function MyForm3() {
     const [myCar, setMyCar] = useState("BMW");

     const handleChange = (event) => {
          setMyCar(event.target.value)
     }

     return (
          <form>
               <select value={myCar} onChange={handleChange}>
                    <option value="Volvo">Volvo</option>
                    <option value="Aston Martin">Aston Martin</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                    <option value="Ford">Ford</option>
               </select>
          </form>
     )
}

export default MyForm3;