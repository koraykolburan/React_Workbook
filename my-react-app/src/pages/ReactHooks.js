import { useState } from "react";
import FavoriteBike from "../FavoriteBike";

const ReactHooks = () => {
     return (
          <div
          style={{
               padding: '50px',
               lineHeight: '28px',
               fontFamily: 'verdana',
               fontSize:'15px',
               // backgroundColor:'#15202B',
               // color:"#e5e5e5"
          }}
          >
               <h1>React Hooks</h1>
               <p>
                    Hooks were a new addition in React 16.8. <br />
                    They let us use <b>state</b> and other React Features and Lifecycle methods without wiriting a class. <br />
                    We can use the <b>useState</b> Hook to Keep Track of each application states, like <b>inputs values</b>. <br />
                    This let us to provide a <u>single source of truth</u> for the entire application. <br />
                    <b>State</b> generally refers to application data or properties that need to be tracked. <br />
                    <br />
                    <code style={{color:"#015CC5"}}>
                         {"function FavoriteBike() { "} <br />
                              {"//Declare a new state variable, which we call 'count'"} <br />
                              {"const [brand, setBrand] = useState('Cannondale');"} <br />
                              {"<h1>My favorite bike is {brand}</h1>"} <br />
                              {"<button type='button' onClick='() => setBrand('Cannondale')'>Cannondale</button"} <br />
                              {"<button type='button' onClick='() => setBrand('Mosso')'>Mosso</button>"} <br />
                              {"<button type='button' onClick='() => setBrand('Vitus Venon')>Vitus Venon</button>'"} <br />
                              {"<button type='button' onClick='() => setBrand('Allez')>Allez</button>'"} <br />
                              {"<button type='button' onClick='() => setBrand('Canyon')>Canyon</button>'"} <br />
                         {"}"}
                    </code>
               </p>
               <FavoriteBike />
               <br />
               <br />
               <hr />
               <span>
                    There are 3 rules for Hooks: <br />
               </span>
               <ul>
                    <li>Hooks can only be called inside React function components.</li>
                    <li>Hooks can only be called at the top level of a component.</li>
                    <li>Hooks cannot be conditional.</li>
               </ul>
               <span>
                    Also, we can build our own <b>Custom Hooks</b>, if we have a logic that needs to be reused in several components. <br />
               </span>
               <br />
               <hr />
               <h1>React useState Hook</h1>
               <p>
                    The react useState Hook allows us to <b>track state</b> in a function component. <br />
                    Staten generally <u>refers to data or properties</u> that need to be tracking in an application. <br />
                    At the top of our component, we need to <b>import</b> the <b>useState</b> Hook. <br />
               </p>
               <code style={{color:"#015CC5"}}>
                    {"import { useState } from 'react';"} <br />
               </code>
               <p>
                    We are destructuring <b>useState</b> from <b>react</b> as it is a named export. <br />
                    <code style={{color:"#015CC5"}}>
                         {"import { useState } from 'react'"} <br />
                    </code>
                    We initialize our state by calling <b>useState</b> in our function component. <br />
                    <b>useState</b> accepts an initial state and returns two values: <br />
                    1)The current state. <br />
                    2)A function that updates the state. <br />
                    <code style={{color:"#015CC5"}}>
                         {"function FavoriteBike() { "} <br />
                         {"const [color, setColor] = useState(''); "} <br />
                         {"}"} <br />
                    </code>
                    <span>
                         We are <u>destructuring</u> the returned values from <b>useState.</b> <br />
                         1)The first value, <b>color</b>, is our <u>current state.</u> <br />
                         2)The second value, <b>setColor</b>, is the function that is used to <u>update</u> our state. <br />
                         We set the initial state to an <u>empty</u> string: <b>{"useState('')"}</b>.
                         Now, we can include our state anywhere in our component. <br />
                    </span>
                    <code style={{color:"#015CC5"}}>
                         {"function FavoriteBike() { "} <br />
                         {"const [color, setColor] = useState('blue'); "} <br />
                         <br />
                         {"return <h2>My favorite bike's color is {'color'}! </h2>"} <br />
                         {"}"} <br />
                    </code>
               </p>
               <hr />
               <h2>Update State</h2>
               <p>
                    To update our state, we use our state updater function. <br />
                    <b>##NOTE## We should never directly update state. Ex: color = 'orange' is not allowed.</b> <br />
                    We can use a button to update the state: <br />
                    <code style={{color:"#015CC5"}}>
                         {"function FavoriteBike() { "} <br />
                              {"const [color, setColor] = useState('blue'); "} <br />
                              <br />
                              {"return ("} <br />
                              {"<>"} <br />
                              <b>{"<button type='button' onClick={() => setColor('orange')} "}</b> <br />
                              <b>{">Orange</button>"}</b> <br />
                              {"</>"} <br />
                         {")}"} <br />
                    </code> <br />
               </p>
               <hr />
               <h3>Multiple State Hooks</h3>
               <p>
                    The <b>useState</b> Hook can be used to keep track of <u>strings, numbers, booleans, arrays, objects, and combinationof these</u>. <br />
                    We could create <b>multiple state Hooks</b> to track individual values. <br />
                    <code style={{color:"#015CC5"}}>
                         {"function motorbike() { "} <br />
                              {"const [brand, setBrand] = useState('Harley Davidson'); "} <br />
                              {"const [model, setModel] = useState('Iron 883'); "} <br />
                              {"const [year, setYear] = useState('2019'); "} <br />
                              {"const [color, setColor] = useState('Steel Grey'); "} <br />
                              <br />
                              {"return ("} <br />
                              {"<>"} <br />
                              <b>{"<h1>My {brand}</h1>"}</b> <br />
                              <b>{"<p>It is a {color}, {model} from {year}</p>"}</b> <br />
                              {"</>"} <br />
                         {")}"} <br />
                    </code> <br/>
               </p>
               <hr />
               <h3>One State Hook and A Single Object</h3>
               <p>
                    <b>One State</b> and include <b>an OBJECT</b> instead. <br />
                    Create a <b>single Hook</b> that holds an <b>object.</b> <br /> <br />
                    <code style={{color:"#015CC5"}}>
                         {"function motorbike() { "} <br />
                              <b>{"const [motorbike, setMotorbike] = useState({ "}</b> <br />
                              {"brand: 'Harley Davidson',"} <br />
                              {"model: 'Iron 883',"} <br />
                              {"year: '2019',"} <br />
                              {"color: 'Steel Grey',"} <br />
                              {"});"} <br />
                              <br />
                              {"return ("} <br />
                              {"<>"} <br />
                              <b>{"<h1>My {motorbike.brand}</h1>"}</b> <br />
                              <b>{"<p>It is a {motorbike.color}, {motorbike.model} from {motorbike.year}</p>"}</b> <br />
                              {"</>"} <br />
                         {")}"} <br />
                    </code>
               </p>
               <hr />
               <h3>Updating Objects and Arrays in State</h3>
               <p>
                    When state is updated, the entire state gets overwritten.<br />
                    If we only called <code style={{color:'#015CC5'}}>{"setMotorbike({color: 'Steel Black'})"}</code>, <br />
                    this would <b>remove</b> the brand, model and year from our state. <br />
                    That's why we use the JavaScript <b>spread</b> operator to help us. <br /> <br />
               </p>
               <code style={{color:"#015CC5"}}>
                         {"function motorbike() { "} <br />
                              <b>{"const [motorbike, setMotorbike] = useState({ "}</b> <br />
                              {"brand: 'Harley Davidson',"} <br />
                              {"model: 'Iron 883',"} <br />
                              {"year: '2019',"} <br />
                              {"color: 'Steel Grey',"} <br />
                              {"});"} <br />
                              <br />
                              <b>
                              {"const updateColor = () => {"} <br />
                              {"setMotorbike(previousState => {"} <br />
                              {"return { ...previousState, color: 'Steel Black'"} <br />
                              {"})"} <br />
                              {"}"} <br />
                              </b>
                              {"return ("} <br />
                              {"<>"} <br />
                              <b>{"<h1>My {motorbike.brand}</h1>"}</b> <br />
                              <b>{"<p>It is a {motorbike.color}, {motorbike.model} from {motorbike.year}</p>"}</b> <br />
                              <b>{"<button type='button' onClick={updateColor}>Steel Black!</button>"}</b> <br />
                              {"</>"} <br />
                         {")}"} <br />
                    </code>
          </div>
     )
}

export default ReactHooks;