import { createContext, useContext, useEffect, useReducer, useState } from "react";
import FavoriteBike from "../FavoriteBike";
import Car2 from '../Car2';
import Timer from "../SetTimeOut";
import Counter from "../SetCalculation";
import Component1 from "../Context";
import App from "../UseRef";
import App2 from "../UseRef2";
import App3 from "../UseRef3";
import Todos from "../UseReducer";
import Profile from "../ImgEx";
import ShoppingList from "../RenderingLists";
import MyApp from "../UseStateApp";
import MyApp2 from "../UseStateApp2";
import App4 from "../UseCallback";
import App5 from "../UseMemo";
import Demo from "../CustomHook";

const ReactHooks = () => {
     return (
          <div className="divStyle">
               <h1>React Hooks</h1>
               <ul>
                    <li><b>Functions start with <u>use</u> are called Hooks.</b></li>
                    <li><code>useState</code> is a built-in Hook provided by React.</li>
                    <li>We can also write our own Hooks by combining the existing ones.</li>
                    <li>Hooks are more restrictive than other functions.</li>
                    <li>We can call Hooks at the top of our components(or other Hooks).</li>
                    <li>If we want to use <code>useState</code> in a condition or a loop, extract a new component and put it there.</li>
                    <li>Hooks were a new addition in React 16.8.</li>
                    <li>They let us use <b>state</b> and other React Features and Lifecycle methods without wiriting a class. </li>
                    <li>We can use the <b>useState</b> Hook to Keep Track of each application states, like <b>inputs values</b>.</li>
                    <li>This let us to provide a <u>single source of truth</u> for the entire application.</li>
                    <li><b>State</b> generally refers to application data or properties that need to be tracked.</li>
               </ul>
               <p>
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
                    Tracking the state. <br />
                    Sometimes, we'll want our component to 'remember' some information and display it. <br />
                    Such as, maybe we can want to count the number of times a button is clicked. <br />
                    To do this, add state to our component. <br />
                    After we import <code>{"import { useState } from 'react'; "}</code> <br />
                    We can declare a <b>state variable inside our component.</b> <br />
                    <code>{"const [something, setSomething]"}</code> <br />
               </p>
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
               <span>Example of Counters that update separately buttons:</span>
               <MyApp />
               <span>
                    Often we'll need components to <i>share data and always update together.</i> <br />
                    To make both <b>MyButton</b> components display the same <b>count</b> and update together,
                     we need to <b>move the state from the individual button 'upwards' to the closest component containing all of them.</b> <br />
                    ##NOTE## -- The information we pass down like this is called <b>props.</b> <br />
                    <code>{"<MyButton count={count} onClick={handleClick} />"}</code> <br />
                    Now, when we click either button, the <b>count</b> in MyApp2 will change, which will both of the counts in <b>MyButton.</b><br />
               </span>
               <MyApp2 />
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
                    In the <code>useEffect</code>, we are updating the <code>useRef</code> current value each time the
                     <code>inputValue</code> is updated by entering text into the input field. <br />
                    The output is:
               </span>
               <App3 />
               <br />
               <hr />
               <h1>React useREducer Hook</h1>
               <p>
                    <code>useReducer</code> is very similar to <code>useState</code>, however it lets us move the state update logic from event handlers into a single function outside of our component. <br />
                    Then we need to fill in the code that will calculate and return the next state. <br />
                    By <b>convention,</b> it is common to write it as <b>switch statement</b>. <br />
                    For each <b>case</b> in the <b>switch</b>, calculate and return some next state.
               </p>
               <ul>
                    <li>useReducer is a React hook that lets us add a reducer to our component.</li>
                    <li><code>const [state, dispatch] = useReducer(reducer, initialArg, init?)</code></li>
                    <li>Adding a reducer to a component</li>
                    <li>Writing the reducer function</li>
                    <li>Avoiding recreating the initial state</li>
                    <li></li>
               </ul>
               <code>
                    {"import { useReducer } from 'react';"} <br /><br />
                    {"function reducer(state, action) {"} <br />
                         {"//..."} <br />
                    {"}"} <br /><br />
                    {"function MyComponent() {"} <br />
                    {"const [state, dispatch] = useReducer(reducer, { age: 42 });"} <br />
                    {"}"} <br />
                    {"}"} <br />
               </code>
               <h3>Parameters:</h3>
               <ul>
                    <li>
                         <code>reducer:</code> The reducer function that specifies how the state gets updated. <br />It must be pure, should take the state and action as arguements, and should return the next state. State and action can be of any types.
                    </li>
                    <li>
                         <code>initialArg:</code>The value from which the initial state is calculated. <br />
                         It can be a value of any type. How the initial state is calculated from it depends on the next <code>init</code> argument.
                    </li>
                    <li>
                         optional <code>init:</code> The initializer function that should return the initial state. <br />
                         If it's not specified, the initial 
                    </li>
                    <li>
                         useReducer returns an array with exactly two values: <br />
                         1) The current state. During the first render, it's set to <b>init(initialArg) or initialArg</b> <br />
                         2) The <code>dispatch</code> function that lets us to update the state to a different value and trigger a re-render.
                    </li>
                    <li>
                         useReducer is a Hook, so we can only call it at the top level of our component or our own Hooks. We can't call it inside loops or conditions. <br />
                         If we need that, extract a new component and move the state into it.
                    </li>
                    <li>
                         In strict mode, React will call our reducer and initializer twice in order to help us to find accidental impurities. <br />
                         This is development-only behaviour and does not affect production. If our reducer and initializer are pure(as they should be), this should not affect our logic. <br />
                         The result from one of the calls is ignored.
                    </li>
               </ul>
               <code>dispatch</code> function: <br />
               <span>
                    The dispatch function returned by useReducer let us update the state to a different value and trigger a re-render. <br />
                    We need to pass the action as the only argument to the <b>dispatch</b> function:<br />
               </span><br />
               <code>
                    {"const [state, dispatch] = useReducer(reducer, { age: 39 });"} <br /><br />
                    {"function handleClick() {"} <br />
                    {"dispatch({ type: 'incremented_age' });"} <br />
               </code><br />
               <p>
                    ##NOTEs## -- The dispatch function only <b>updates the state variable for the next render.</b> <br />
                    If we read the state variable after calling the dispatch function, we will still get the old value that was on the screen before we call. <br />

               </p>

               <span>The output is:</span>
               <Todos />
               <span>
                    <b>We will going deeper later on.</b>
               </span>
               <hr />
               <p>
                    An example of images in React.
               </p>
               <Profile />
               <hr />
               <span>An example of rendering list items</span>
               <ShoppingList />
               <hr />
               <h1>React useCallBack Hook</h1>
               <p>
                    The react <code>useCallBack</code> Hook returns a memoized callback function. <br />
                    The <b>memoization</b> as caching a value so that it does not need to be recalculated. <br />
                    This allows us to isolate resource intensive functions so that they will not automatically run on every render. <br />
                    The <b>useCallBack</b> Hook only runs when one of its dependencies update. This can improve performance. <br />
                    <i>The <code>useCallBack</code> and <code>useMemo</code> Hooks are similar.</i>
                    <i>The main difference is that <code>useMemo</code> <b>returns a memoized value</b> and <code>useCallBack</code> <b>returns a memoized function</b>.</i> <br />
                    <i>The main reason is to use <code>useCallBack</code> is to prevent a component from re-rendering unless its props have changed.</i> <br />
                    The <i><b>"referential equality"</b></i>: every time a component re-renders, its functions get recreated. Because of this, the <code>addToDo</code> function has actually changed.<br />
                    So fix this, we can use <code>useCallBack</code> hook to prevent the function from being recreated unless unnecessary. <br />
                    Use the <code>useCallBack</code> Hook to prevent the <code>Todos</code> component from re-rendering needlessly.
               </p>

               <code>
                    {"import { useState, useCallBack } from 'react';"}; <br /><br />
                    {"const App4 = () => {"}; <br />
                    {"const [count, setCount] = useState(0)"}; <br />
                    {"const [todos, setTodos] = useState([])"}; <br /><br />
                    {"const increment = () => {"}; <br />
                    {"setCount ((c) => c + 1);"}; <br />
                    {"};"}; <br />
                    <u>{"const AddTodo = useCallback(() => {)"}; </u><br />
                    {"setTodos((t) => [...t, 'New Todo']);"}; <br />
                    {"}, [todos]"}; <br /><br />
                    {"return ("}; <br />
                    {"<>"}; <br />
                    {"<Todos todos={todos} addTodo={addTodo} />"}; <br />
                    {"<hr />"}; <br />
                    {"<div>"}; <br />
                    {"Count: {count}"}; <br />
                    {"<button onClick={increment}> + </button>"}; <br />
                    {"</div>"}; <br />
                    {"</>"}; <br />
                    {")};"}; <br />
               </code>

               <span>the output is:</span>
               <App4 />
               <br />
               <hr />
               <h1>React useMemo Hook</h1>
               <p>
                    The React useMemo Hook returns a memoized value. <br />
                    Think of memoization as caching a value so that it does not need to be calculated <br />
                    The useMemo Hook <u>only runs when one of its dependencies update.</u> <br />
                    This can improve performance.  <br />
                    The <code>useMemo</code> and <code>useCallback</code> Hooks are similar. <br />
                    The main difference is that <code>useMemo</code> returns a memozied value and <code>useCallback</code> returns a memoized function. <br />
                    The <code>useMemo</code> Hook can be used to keep expensive, resource intensive functions from needlessly running. <br />
               </p>
               <span>
                    The output is:
               </span>
               <App5 />
               <p>
                    To fix this performance issue, we used to <code>useMemo</code> Hook to memoizethe <code>expensiveCalculation</code> function. <br />
                    This will cause the function to only run when needed. <br />
                    We can wrap the expensive function call with <code>useMemo</code>.
                    The <code>useMemo</code> Hook accepts a <u>second parameter to declare dependencies.</u> <br />
                    The expensive function will only run when its dependencies have changed. <br />
                    In this example, the expensive function will only run when <code>count</code> is changed and not when todo's are added.
               </p>
               <br />
               <br />
               <hr />
               <h1>Custom Hooks</h1>
               <p>
                    Hooks are reusable functions. <br />
                    When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. <br />
                    Custom Hooks start with <code>"use"</code>. Example: <code>useFetch</code> <br />
               </p>
               <h2>Build a Hook</h2>
               <p>
                    In the following code, we are fetching data in our <code>Demo</code> component and displaying it. <br />
                    We used fecth fake data. <br />
                    The fetch logic may be needed in other components as well, so we will extract that into a custom Hook. <br />
                    Move the fetch logic to a new file to be used a <b>custom Hook.</b> <br />
               </p>
               <span>This is useFetch.js file</span> <br />
               <div className="customHooks">
                    <code>
                         {"import { useState, useEffect } from 'react';"} <br /> <br />
                         {"const useFetch = (url) => {"}<br />
                         {"const [data, setData] = useState(null);"}<br /><br />
                         {"useEffect (() => {"}<br />
                         {"fetch(url)"}<br />
                         {".then((res) => res.json())"}<br />
                         {".then((data) => setData(data));"}<br />
                         {"}, [url]);"}<br /><br />
                         {"return [data];"}<br />
                         {"};"}<br />
                    </code>
               </div>
               <span>This is Demo.js file</span> <br />
               <div className="customHooks">
                    <code>
                         {"import {useFetch} from './useFetch';"} <br /><br />
                         {"const Demo = () => {"} <br />
                         {"const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')"} <br /><br />
                         {"return ("} <br />
                         {"<>"} <br />
                         {"{data.map((item) => {"} <br />
                         {"return <p key={item.id}>{item.title}</p>"} <br />
                         {"})}"} <br />
                         {"</>"} <br />
                         {");"} <br />
                         {"};"} <br />
                    </code>
               </div>
                <br />
               <span>The output is:</span>
               <Demo />
               <p>
                    Explaining: <br />
                    We have created a new file called <code>useFetch.js</code> containing a function called <code>useFetch</code> which contains all of the logic needed to fetch our data. <br />
                    We removed the hard-coded URL and replaced it with a a <code>url</code> variable that can be passed to the custom Hook. <br />
                    Lastly, we are returning our data from our Hook. <br />
                    In <code>Demo.js</code>, we are importing our <code>useFetch</code> Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from. <br />
                    Now we can reuse this custom Hook in any component to fetch data from any URL.
               </p>
          </div>
     )
}

export default ReactHooks;