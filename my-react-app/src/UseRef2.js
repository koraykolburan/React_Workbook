import { useRef } from "react";

function App2() {
     const inputElement = useRef();

     const focusInput = () => {
          inputElement.current.focus();
     };

     return (
          <>
               <input type="text" ref={inputElement} /> &nbsp;
               <button onClick={focusInput}>Focus Input</button>
          </>
     )
}

export default App2;