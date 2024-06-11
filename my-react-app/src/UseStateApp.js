import { useState } from 'react';

export default function MyApp() {
     return (
          <div>
               <h1>'useState' Counting & Tracking the update buttons</h1>
               <h2>Counters that update separately</h2>
               <MyButton /> &nbsp;
               <MyButton />
          </div>
     )
}

function MyButton() {
     const [count, setCount] = useState(0);

     function handleClick() {
          setCount(count + 1);
     }

     return (
          <button onClick={handleClick}>
               Clicked {count} times
          </button>
     )
}