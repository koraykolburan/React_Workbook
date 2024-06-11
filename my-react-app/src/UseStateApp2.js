import { useState } from "react";

export default function MyApp2(){
     const [count, setCount] = useState(0);

     function handleClick() {
          setCount(count + 1);
     }

     return (
          <div>
               <h1>Counters that update together!</h1>
               <MyButton count={count} onClick={handleClick} /> 
               &nbsp;
               <MyButton count={count} onClick={handleClick} />
          </div>
     );
} 

function MyButton({ count, onClick }) {
     return (
          <button onClick={onClick}>
               Clicked {count} times
          </button>
     );
}

// This is call "liting state up". By moving state up, we have shared it between components.