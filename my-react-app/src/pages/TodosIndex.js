import { useState } from "react"
import Todos from "../Todos"

const IncApp = () => {
     const [count, setCount] = useState(0);
     const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);

     const increment = () => {
          setCount((c) => c + 1);
     };

     return (
          <>
          <Todos todos={todos} />
          <hr />
          <div>
               Count: {count} 
               &nbsp;&nbsp;&nbsp;
               <button onClick={increment}> + </button>
          </div>
          </>
     )
}

export default IncApp;