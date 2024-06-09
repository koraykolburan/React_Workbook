import { useState, useEffect, useRef } from "react";

function App() {
     const [inputvalue, setInputValue] = useState("");
     const count = useRef(0);


     useEffect(() => {
          count.current = count.current + 1;
     });

     return (
          <>
               <input
                    type="text"
                    value={inputvalue}
                    onChange={(e) => setInputValue(e.target.value)}
               />
               <h1>Render Count: {count.current}</h1>
          </>
     )
}

export default App;