import { useEffect, useState } from "react";
import FavoriteBike from "../FavoriteBike";
import Car2 from '../Car2';
import Timer from "../SetTimeOut";
import Counter from "../SetCalculation";

const ReactHooks = () => {
     return (
          <div className="divStyle">
               <h1>React Hooks</h1>
               <p>
                    Hooks were a new addition in React 16.8. <br />
                    They let us use <b>state</b> and other React Features and Lifecycle methods without wiriting a class. <br />
                    We can use the <b>useState</b> Hook to Keep Track of each application states, like <b>inputs values</b>. <br />
                    This let us to provide a <u>single source of truth</u> for the entire application. <br />
                    <b>State</b> generally refers to application data or properties that need to be tracked. <br />
                    <br />
                    <code>
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
               <code >
                    {"import { useState } from 'react';"} <br />
               </code>
               <p>
                    We are destructuring <b>useState</b> from <b>react</b> as it is a named export. <br />
                    <code>
                         {"import { useState } from 'react'"} <br />
                    </code>
                    We initialize our state by calling <b>useState</b> in our function component. <br />
                    <b>useState</b> accepts an initial state and returns two values: <br />
                    1)The current state. <br />
                    2)A function that updates the state. <br />
                    <code >
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
                    <code >
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
                    <code>
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
               <code>
                         {"function Car2() { "} <br />
                              <b>{"const [car, setCar] = useState({ "}</b> <br />
                              {"brand: 'BMW',"} <br />
                              {"model: 'i20',"} <br />
                              {"year: '2024',"} <br />
                              {"color: 'Metalic Grey',"} <br />
                              {"});"} <br />
                              <br />
                              <b>
                              {"const updateColor = () => {"} <br />
                              {"setCar(previousState => {"} <br />
                              {"return { ...previousState, color: 'Metalic Blue'"} <br />
                              {"})"} <br />
                              {"}"} <br />
                              </b>
                              {"return ("} <br />
                              {"<>"} <br />
                              <b>{"<h1>My {car.brand}</h1>"}</b> <br />
                              <b>{"<p>It is a {car.color}, {car.model} from {car.year}</p>"}</b> <br />
                              <b>{"<button type='button' onClick={updateColor}>Metalic Blue!</button>"}</b> <br />
                              {"</>"} <br />
                         {")}"} <br />
               </code>
               <p>
                         We need to the <b>current value of state,</b> <br />
                         that's why we pass a function named <b>{"previousState => {}"}</b> into our <b>setCar</b> function. <br />
                         This function receives the <u>previous value</u>! <br />
                         Then we return an object, <u>spreading</u> the <b>previousState</b> and <u>overwriting</u> only the color. <br />
               </p>
               <span>The output is:</span> <Car2 />
               <br />
               <hr />
               <h1>React <b>useEffect</b> Hooks</h1>
               <p>
                    The <b>useEffect</b> Hook allows you to perform side effects in your components. <br />
                    Some examples of side effects are: fetching data, directly Updating the DOM, and timers. <br />
                    <b>useEffect</b> accepts two arguments. The second arguments is <b>optional</b>. <br />
                    <code>{"useEffect(<function>,<dependency>)"}</code> <br />
                    <code>
                         {"import { useState, useEffect } from 'react';"} <br />
                         {"function Timer() {"} <br />
                         {"const [count, setCount] = useState(0)"} <br />
                         {"useEffect(() => {"} <br />
                         {"setTimOut(() => {"} <br />
                         {"setCount((count) => count + 1"} <br />
                         {"},1000)"} <br />
                         {"}, []);"} We can optionally pass dependencies to <b>useEffect</b>in this effect []<br />
                         {"return <h1>I have rendered {count} times!</h1>"} <br />
                         {"}"} <br />
                    </code> <br />
                    We should always include the second parameter which accepts an <b>array.</b> <br />
                    We can optionally pass dependenciesto <b>useEffect</b> in this array. <br />
                    In this example, we used to the empty square brackets []. <br />
                    If we don't do this, component keep renders at every second. <br />
                    The output is:
               </p>
               <Timer /> <br />

               <Counter />

               <h2>Effect Cleanup</h2>
               <p>
                    Some effects require cleanup to reduce memory leaks. <br />
                    Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed. <br />
                    We do this by including a return function at the end of the <b>useEffect</b> Hook.
               </p>
          </div>
     )
}

export default ReactHooks;