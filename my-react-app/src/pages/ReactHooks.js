import { createContext, useContext, useEffect, useState } from "react";
import FavoriteBike from "../FavoriteBike";
import Car2 from '../Car2';
import Timer from "../SetTimeOut";
import Counter from "../SetCalculation";
import Component1 from "../Context";
import App from "../UseRef";
import App2 from "../UseRef2";
import App3 from "../UseRef3";

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
               <Timer /> <br /> <hr />
               <p>
                    Make a Counter using <b>useEffect dependencies</b> which is optional parameter.
               </p>
               <code>
                    {"import { useState, useEffect } from 'react'; "} <br />
                    {"function Counter(){"} <br />
                    {"const [count, setCounter] = useState(0);"} <br />
                    {"const [calculation, setCalculating] = useState(0);"} <br /> <br />
                    {"useEffect(() => {"} <br />
                    {"setCalculation(() => count * 2);"} <br />
                    {"}, [count] //add the count variable here"} <br />
                    {"return("} <br />
                    {"<>"} <br />
                    {"<p>Count: {count}</p>"} <br />
                    {"<button onClick={() => setCount((c) => c + 1)}>+</button>"} <br />
                    {"<p>Calculation: {calculation}</p>"} <br />
                    {"</>"} <br />
               </code> <br />
               <span>The output is:</span>

               <Counter />
               <hr />

               <h2>Effect Cleanup</h2>
               <p>
                    Some effects require cleanup to reduce memory leaks. <br />
                    <u>Timeouts</u>, <u>subscriptions</u>, <u>event listeners</u>, and other effects that are no longer needed should be disposed. <br />
                    We do this by including a <code><u>return function</u></code> at the end of the <b>useEffect</b> Hook. <br />
                    We initialized a <code>let timer =</code>. <br />
                    And then, we returned <code>{"return () => clearTimeout(timer)"}</code> before the display/main return.
               </p>
               <code>
                    {"function Timer() {"}
                         {"const [count, setCount] = useState(0);"} <br />
                         {"useEffect(() => {"} <br />
                         {"let timer = setTimeout(() => {"} <br />
                         {"setCount((count) => count + 1"} <br />
                    {"}, 1000);"} <br />
                    {"return () => clearTimeout(timer)"} <br />
                    {"}, []);"} <br />
                    {"return <h1>I've rendered {count} times!</h1>"} <br />
                    {"}"} <br />
               </code> <br /> 
               <hr/>
               <h1>React Context</h1>
               <p>
                    React Context is a way to manage state globally. <br />
                    State should be held by the highest parent component in the stack that requires access to the state. <br />
                    We have many nested components. The component at the top and bottom of the stack need access to the state.. <br />
                    To do this without Context, we will need to pass the state as "props" through each nested component. This is caled <u>"prop drilling."</u> <br />
               </p>
               <code>
                    {"import { useState } from 'react';"} <br /><br />
                    {"function Component1() {"} <br />
                    {"const [user, setUser] = useState('person1');"} <br /><br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<h1>{`Hello ${user}!`}</h1>"} <br />
                    {"<Component2 user={user} />"} <br />
                    {"</>"} <br />
                    {");}"} <br /><br />
                    {"function Component2({ user }) {"} <br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<h1>Component 2</h1>"} <br />
                    {"<Component3 user={user} />"} <br />
                    {"</>"} <br />
                    {");}"} <br /><br />
                    {"function Component3({ user }) {"} <br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<Component4 user={user} />"} <br />
                    {"</>"} <br />
                    {");}"} <br /><br />
                    {"function Component4({ user }) {"} <br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<Component5 user={user} />"} <br />
                    {"</>"} <br />
                    {");}"} <br /><br />
                    {"function Component5({ user }) {"} <br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<h1>Component5</h1>"} <br />
                    {"<h2>{`Hello ${user} again!`}</h2>"} <br />
                    {"</>"} <br />
                    {");}"} <br /><br />
               </code>
               <span>The output is:</span>
               <Component1 />
               <br />
               <p>
                    Even though, components 4 did not need the state, they had to pass the state along so that it could reach component5. <br />
                    The solution is to create context. <br />
                    Firstly, <code>{"import { useState, createContext } from 'react';"}</code> <br />
                    Secondly, initialize: <code>const UserContext = createContext()</code>
                    Next, we'll use the Context Provider to wrap the tree of components that need the State Context. <br />
               </p>
               <h2>Context Provider</h2>
               <span>Wrap child components in the Context Provider and supply the state value.</span> <br />
               <code>
                    {"function Component1() {"} <br />
                         {"const [user, setUser] = useState('First Person');"} <br />
                         {"return ("} <br />
                         {"<UserContext.Provider value={user}>"} <br />
                         {"<h1>{`Hello ${user}!`}</h1>"} <br />
                         {"<Component2 user={user} />"} <br />
                         {"</UserContext.Provider>"} <br />
                    {");}"}
               </code>
               <span>Now, all components in this tree will have access to the user Context.</span> <br />
               <h2>Use the <b>UseContext</b> Hook</h2>
               <p>
                    In order to use the Context in a child component, we need to access it using the <code>useContext</code> Hook. <br />
                    Firstly, we need to include the <code>UseContext</code> in the import statement. <br />
                    <code>{"import { useState, createContext, useContext } from 'react';"}</code> <br />
                    Then, we can access the user Context in <u>all components:</u> <br />
               </p>
               <code>
                    {"function Component4() {}"} <br />
                    {"const user = useContext(UserContext);"} <br /> <br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<h1>Component4</h1>"} <br />
                    {"<h2>{`Hello ${user} again!!`}</h2>"} <br />
                    {"</>"} <br />
                    {");}"} <br />
               </code> <br />
               <span>The output is changed, above.</span>
               <hr />
               <h1>React <b>useRef</b> Hook</h1>
               <p>
                    The <code>useRef</code> Hook allows us to persist values between renders. <br />
                    It can be used to store <u>a mutable value</u> that does not cause a re-render when updated. <br />
                    <b>It can be used to access a DOM element directly.</b> <br />
                    Does not cause Re-Renders <br />
                    If we tried to count how many times our application renders using the <code>useState</code> Hook, <br />
                    we would be caught in an infinite loop since this Hook itself causes re-render. <br />
                    To avoid this, we can use the <code>useRef</code> Hook.
               </p>
               <code>
                    {"import { useState, useEffect, useRef } from 'react';"} <br /> <br />
                    {"function App() {"} <br />
                    {"const [inputValue, setInputValue] = useState('');"} <br /> <br />
                    {"const count = useRef(0)"} <br /> <br />
                    {"useEffect(() => {"} <br />
                    {"count.current = count.current + 1;"} <br />
                    {"});"} <br /><br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<input "} <br />
                    {"type='text'"} <br />
                    {"value={inputValue}"} <br />
                    {"onChange={(e) => setInputValue(e.target.value)}"} <br />
                    {"/>"} <br />
                    {"<h1>Render Count: {count.current}</h1>"} <br />
                    {"</>"} <br />
                    {");"} <br />
                    {"}"} <br />
               </code>
               <span>Write something in here:</span>
               <App /> <br />
               <hr />
               <h2>Accessing DOM Elements</h2>
               <p>
                    Generally, we want to let React handle all DOM manipulation. <br />
                    However, there are some instances where <code>useRef</code> can be used without causing issues. <br />
                    In React, we can add a <code>ref</code> attribute to an element to access it directly in the DOM. <br />
                    
               </p>
               <code>
                    {"import { useRef } from 'react';"} <br />
                    {"function App2(){"} <br />
                    {"const inputElement = useRef();"} <br /><br />
                    {"const focusInput = () => {"} <br />
                    &nbsp;{"inputElement.current.focus(); "} <br />
                    {"};"} <br /><br />
                    {"return("} <br />
                    {"<>"} <br />
                    &nbsp;{"<input type='text' ref={inputElement} />"} <br />
                    &nbps;{"<button onClick={focusInput}"} <br />
                    {""} <br />
                    {""} <br />
               </code>
               <span>
                    When we clicked the Button, the input field will get focus. <br />
                    The output is:
               </span> <br />
               <App2 /> <br />
               <hr />
               <h2>Tracking State Changes</h2>
               <p>
                    The <b>useRef</b> Hook can also be used to <u>track of previous state</u> values. <br />
                    This is because we are able to persist <code>useRef</code> values between renders. <br />
               </p>
               <code>
                    {"import { useState, useEffect, useRef} from 'react';"} <br />
                    {"function App3(){"} <br />
                    {"const [inputValue, setInputValue] = useState('');"} <br />
                    {"const previousInputValue = useRef('');"} <br /><br />
                    {"useEffect(() => {"} <br />
                    {"previousInputValue.current = inputValue;"} <br />
                    {"}, [inputValue]);"} <br /><br />
                    {"return ("} <br />
                    {"<>"} <br />
                    {"<input"} <br />
                    {"type='text'"} <br />
                    {"value={inputValue}"} <br />
                    {"onChange={(e) => setInputValue(e.target.value)}"} <br />
                    {"/>"} <br />
                    {"<h2>Current Value: {inputValue}</h2>"} <br />
                    {"<h2>Previous Value: {previousInputValue.current}</h2>"} <br />
                    {"</>"} <br />
                    {");}"} <br />
               </code>
               <span>
                    While we writing in the input field and we will see the current-and previous values. <br />
                    In the <code>useEffect</code>, we are updating the <code>useRef</code> current value each time the <code>inputValue</code> is updated by entering text into the input field. <br />
                    The output is:
               </span>
               <App3 />
          </div>
     )
}

export default ReactHooks;