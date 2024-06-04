import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import Conditionals from './pages/Conditionals.js';
import PropsComponents from './pages/PropsComponents.js';
import NoPages from './pages/NoPages.js';
import ClassComponents from './pages/ClassComponents.js';
import ReactEvents from './pages/ReactEvents.js';


import Bike2 from './Bike2.js';
import MyBikes3 from './MyBikes3.js';
import Car from './Car.js';
import Garage from './Garage.js';
import Football from './Shoot.js'
import Log from './IsLogin.js';
import Garage2 from './Garage2.js';
import MotorsGarage from './MotorsGarage.js';
import MyForm from './MyForm.js';
import MyForm2 from './MyForm2.js';
import MyForm3 from './MyForm3.js';

const bikes = ['Canyon', 'Cannondale', 'Mosso']; // This is for Garage2 && And Logical operator

const MyFirstElement = 
<div 
  id="container2" 
  style={{
    padding: '50px',
    lineHeight: '28px',
    fontFamily: 'verdana',
    fontSize:'15px',
    backgroundColor:'#15202B',
    color:"#e5e5e5"
  }}
>

  <h1>JS React!</h1> 
  {/* <h2>Using React, we render HTML in a web page in many ways.</h2>
  <h3>React renders HTML to the web page using a function called createRoot() and its method render().</h3>
  <ol>
    <li><b>The createRoot()</b></li>
    <span>
      This function takes ONE Argument, an HTML element.
      It defines the HTML element where a React COMPONENT should be Displayed!
    </span>
    <li><b>The render() method</b></li>
    <span>
    is then called to DEFINE the React COMPONENT that should be RENDERED. <br />
    There is another folder in the root directory of our React project, named <b>'public'</b>. In this folder: <br />
    There is an <b>'index.html'</b> file.<br />
    In this <b>'index.html'</b> page, there is SINGLE div tag in the body and its id is 'root'. <br />
    This is where our React Application will be rendered!!! <br />
    <u>#NOTE# -- The element id does not have to be called 'root', however this is the STANDARD CONVENTION.</u>
    </span>
    <li><b>The root node</b></li>
    <span>
      It is the HTML element where we want to DISPLAY the RESULT. <br />
      It is like a container for content managed by React. <br />
      It does NOT have to be a div element and it does NOT have to have the id=root: <br />
      It can be like this: header id = 'title' and <br />
      const container = doc....ById('title'); <br />
      const root = ReactDOM.createRoot(container);
      root.render( p tag Hallo);
    </span>
  </ol>
  <hr /> */}
  {/* <h2>What is JSX?</h2>
  <h3>JavaScript XML</h3>
  <h3>JSX allows us to write HTML in React</h3>
  <h2>Coding JSX</h2>
  <p>
  It gives us to write HTML elements in JS and place them in the DOM without any <b>createElement()</b> and <br />
  <b>appendChild()</b> methods. JSX converts HTML tags into React Elements.
  </p>
  <hr />
  <h2>Expressions in JS</h2>
  <p>
    With JSX we can write expressions inside curly braces '4 * 4' inside of the braces is: '{ 4 * 4 }'. <br /> 
    This expression can be a React variable or property or any other valid JS expression. <br />
    JSX will execute the expression and return the result. Like this: 4 + 4 inside of the braces is = {4+4}
  </p>
  <hr />
  <h2>Inserting a Large Block of HTML</h2>
  <p>
    If we want to write HTML on <b>multiple lines</b>, we need to put the HTML inside parentheses: <br />
  </p>
  const mySmoothie = (
      <ul>
        <li>Spaniach</li>
        <li>Mint</li>
        <li>Parsley</li>
      </ul>
    );
    <p>
      If we want to <b>write TWO Paragraph</b>, we must put them inside a <b>parent element like a div:</b>
    </p>
    const myBikes = (
      <div>
        <h2>Canyon</h2>
        <h2>Cannondale</h2>
      </div>
    )
    <p>
      Or we can use <b>"Fragment"</b> to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM. <br />
      A fragment is like this: <br />
    </p>
    const myBikes2 = (
      <>
      <p>This is my old bike.</p>
      <p>This is my new bike.</p>
      </>
    )
    <p>
      JSX follows XML rules, thus HTML elements must be properly closed like this: <br />
    </p>
    const myInput = <input type='text' />
    <hr />
    <h2>JSX Attribute class = className</h2>
    <p>
      The <b>class</b> attribute is a much used attribute in HTML. <br />
      However is rendered as JS, and the <b>Class</b> keyword is a <b>Reserved word</b> in JS, we're not allowed to use it in JSX. <br />
      That's why we will use attribute <b>className</b> instead of class. <br />
      When JSX is rendered, it translates <b>className</b> attributes into <b>class</b> attribute.
    </p>
    const myElement2 = <h3 className='myclass'>This is className example.</h3>
    <hr /> */}
    {/* -------------------------------------  React Conditionals ------------------------------------- 
    <h2>Conditions - If Statements</h2>
    <p>
      We need to use <b>Ternary Expressions</b> instead of if statements in JSX. <br />
      However, If we want to use if statement in JSX, we need to write <b>if</b> statements outside of the JSX. <br />
      The syntax is: <span><b>{"{(x) < 1 ? 'Welcome!'' : 'Tschüss!' }"}</b></span><br />
    <span>{(x) < 1 ? "Welcome!" : "Tschüss!" }</span> <br />
    In attempt toembed a JS expression inside JSX, the JS must be wrapped with <b>curly braces</b>.
    </p>
    <hr />
    <h2>React Components</h2>
    <p>
      <b>Components</b> are like <b>functions</b> that return HTML elements. <br />
    </p>
      <ol>
        <li>Components are <b>independent</b> and <b>reusable</b> bits of code.</li>
        <li>They serve the same purpose as JS functions, however they work <b>in isolation</b> and return <b>HTML.</b></li>
        <li>Components come in TWO TYPES, <b>1) Class Components</b> and <b>2) Function Components.</b></li>
        <li>The <b>Component's name</b> MUST start with <b>upper case</b> letter.</li>
      </ol>
    <h3>1) Class Component</h3>
    <p>
      A class Component must include <b>extends React.Component</b> statement. <br />
      This statement creates an inheritance to <b>React.Component</b>. <br />
      And it gives our component access to <b>React.Component's Functions.</b> <br />
      The Component also requires a <b>render()</b> method, this method returns <b>HTML.</b> <br />
      The example of the <b>Class Component</b> is: <br />
    <b>{"class Bike2 extends React.Component {"}<br />
      {"render() {"}<br />
        {"return <span>Hi, I'm a Bike!</span>;"}<br />
      {"}"}
    {"}"} </b>
    </p> */}
    <h3>2) Function Component</h3>
    <p>
      We used the same example with the Class Component but created using a Function Component. <br />
      A Function Component also returns HTML, and behaves much the same way as a Class Component. <br />
      However, Function Components can be written using much less code, are eaiser to understand.<br />
      Ex: <b>{"function Bike2() { "} <br />
            {"return <h2>Hi I'm a Bike!</h2>;"} <br />
            {"}"}{"}"}</b>
    </p>
    <hr />
    <h2>Rendering a Component</h2>
    <p>
      The syntax is: <b>{"<Bike2 />"}</b>
    </p>
    <span><Bike2 />{/* This is for rendering A Component */}</span>
    <hr />

    {/* -------------------------------------  PROPS -------------------------------------  */}
    <h2>Props</h2>
    <p>
      Props are arguments passed into React components. <br />
      Props are passed to components via HTML attributes. <br />
      ##NOTE -- <b>props</b> stands for <b>properties.</b> <br />
      Components can be passed as <b>props,</b> which stands for properties. <br />
      <b>Props</b> are like function arguments, and we send them into the <b>component attributes.</b> <br />
      Props are also how we pass data from one component to another, <b>as parameters.</b> <br />
      We send the <b>brand</b> property from the Garage component to the Bike3 component: <br />
      <br />
      <span>
        <b>
        {"function Bike3(props) {" } <br />
        {"return <h3>I am a {props.brand.model} Bike! My brand is {props.brand.name}, and my color is {props.brand.color}</h3>"} <br />
        {"}"}  <br />
        <br />
        
        {"function Garage() {"}  <br />
        {/* {"const bikeName = 'Canyon'"}  <br /> */}
        {"const bikeInfo = { name: 'Canyon', model : 'Road Bike', color : 'Grey' }"}  <br />
        {"return ("}  <br />
        {"<>"}  <br />
        {"<h2>Which Brands I have in my Garage?</h2>"}  <br />
        {"<Bike3 brand= { bikeInfo } />"}  <br />
        {"</>"}  <br />
        {"}"}  <br />
        And the render: {"root.render(<Garage />);"}  <br />
        </b>
      </span>
      <span>
        ##NOTE -- React Props are <b>Read-Only!</b>  <br />
        We will get an error if we try to change their value! <br />
      </span>
    </p>
    <span>The output is: </span> <Garage />
    <hr />

    {/* -------------------------------------  COMPS. IN COMPS. -------------------------------------  */}
    <h2>Components in Components</h2>
    <MyBikes3 />
    <hr />
    <h2>Components in Files</h2>
    <p>
      React is all about <b>re-using</b> code, and it recommended to split our components into separate files. <br/>
      To do that, create a new file with a <b>.js</b> file extension and put the code inside it like this: <br />
      ##NOTE -- The <b>filename</b> MUST start with an UpperCase character. <br />
      We created a file named <b>"Bike.js":</b> <br />
    </p>
    <h3>To able to use the Bike Component, we have to IMPORT the file in our Application</h3>
    <h4>Export inside of "Bike2.js" File:</h4>
    <p> 
      In the <b>"Bike.js"</b> file: export! <br />
      <b>
      {"function Bike2() {"} <br />
      {"return <h2>Hi I'm a Bike!</h2>;"} <br />
      {"}"} <br />
    </b>
    <b>export default Bike2;</b>
    <br />
    </p>
    <h4>Import inside of "Bike2.js" File:</h4>
    <p>
    In the <b>"index.js"</b> file import! (at the top of the page) <br />
    <b>import from './Bike2.js'</b>
    </p>

    {/* -------------------------------------  React Class Components -------------------------------------  */}
    <hr />
    <h2>React Class Components</h2>
    <p>
      Before React 16.8, Class components were the only way to track state and lifecycle on a React component. <br />
      Function components were considered 'state-less'. <br />
      With the addition of <b>Hooks,</b> Function components are now almost equivalent to Class components. <br />
      When creating a React Component, it's name must start with an upper-case letter. <br />
      Also the component has to include the <b>extends React.Component</b> statement to inheritance to React.Component. <br />
      And it gives our component <b>access</b> to React.Component's functions. <br />
      The component also requires a <b>render()</b> method, this method return HTML. <br />
      <br />
      <span style={{fontSize:'16px', color:'red', fontFamily:'monospace'}}>
      <b>
      {"class Car extends React.Component {"} <br/>
      {"constructor() {"} <br/>
      {"super(); "} <br/>
      {"this.state = {color:'red'}; "} <br/>
      {"} "} <br/>
      {"render() {"} <br/>
      {"return <span>This is {this.state.color} BMW!</span>;"} <br/>
      {"}}"} <br/>
      </b> <br />
      This is for rendering: <br />
      <b>
      {"const root = ReactDOM.createRoot(document.getElementById('root'));"} <br />
      {"root.render(<Car />)"} <br />
      </b> <br />
      </span>
      If there is a <b>constructor()</b> function in our component, this function will be called when the components gets initiated. <br />
      The <b>conctructor</b> function is where we initiate the component's properties. <br />
      In React, component properties should be kept in an object called <b>state.</b>
      Also, we need to use the statement <b>super()</b> that executes the parent component's constructor function. <br />
      And our component has access to all functions of the parent component(React.Component). <br />
      </p>

      The output is: <Car derived="getDerivedStateFromProps - this will not change!"/> <br />
      <p>
      Or we can use the <b>props</b> instead of <b>state</b>: <br />
      {"I am a {this.props.color} Car!"}; <br />
      {"<Car color='red'/>"} <br />
      <br /><br />
      If we have a constructor function, the <b>props</b> always be passed to the constructor and also the React.Component via the <b>super()</b> method. <br />
      <span style={{fontSize:'16px', color:'red', fontFamily:'monospace'}}>
      <b>
      {"class Car extends React.Component {"} <br/>
      {"constructor(props) {"} <br/>
      {"super(props); "} <br/>
      {"render() {"} <br/>
      {"return <span>This is {this.props.model} BMW!</span>;"} <br/>
      {"}}"} <br/>
      </b> <br />
      This is for rendering: <br />
      <b>
      {"const root = ReactDOM.createRoot(document.getElementById('root'));"} <br />
      {"root.render(<Car model='i20'/>)"} <br />
      </b> <br />
      </span>
    </p>
    <h3>Creating the state Object</h3>
    <p>
      The state object can contain as many properties as we like: <br />
      Refet to the <b>state</b> object anywhere in the component by using the <b>this.state.propertyname</b> syntax: <br />
    <span style={{fontSize:'16px', color:'red', fontFamily:'monospace'}}>
      <b>
      {"class Car extends React.Component {"} <br/>
      {"constructor(props) {"} <br/>
      {"super(props); "} <br/>
      {"this.state = {brand :'BMW'"}; <br/>
      {"color :'blue'"}; <br/>
      {"model :'ie20'"}; <br/>
      {"year :'2024'"}; <br/>
      {"}}"} <br/>
      {"changeColor = () => {"} <br/>
      {"this.setState({color: <b>red</b>})"} <br/>
      {"render() {"} <br/>
      {"return (<div>"} <br/>
      {"<h1>This is my car{this.state.brand}</h1> "} <br/>
      {"<p> "} <br/>
      {"Its color is: {this.state.color} "} <br/>
      {"Its model is: {this.state.model} "} <br/>
      {"Its year is: {this.state.year} "} <br/>
      {"</p> "} <br/>
      {"<button type='button' onClick={this.changeColor}>Change Properties "} <br/>
      {"</button> "} <br/>
      {"</div>"} <br/>
      {")}}"} <br/>
      </b> <br />
      This is for rendering: <br />
      <b>
      {"const root = ReactDOM.createRoot(document.getElementById('root'));"} <br />
      {"root.render(<Car model='i20'/>)"} <br />
      </b> <br />
      </span>
    </p>
    <h2>Lifecycle of Components</h2>
    <p>
      Each component in React has a lifecycle which we can monitor and manipulate during its 3 main phases: <br />
      <b>1: Mounting</b> means: putting elements into the DOM. <br />
      a) constructor(), b) getDerivedStateFromProps(), c) render(), d)c omponentDidMount() <br />
      <b>2: Updating</b> A component is updated whenever there is a change in the component's <b>state or props.</b><br />
      a) getDerivedStateFromProps(), b) shouldComponentUpdate(), c) render(), d) getSnapshotBeforeUpdate(), e) componentDidUpdate() <br />
      <b>3: Unmounting</b> means: deleting elements from the DOM. <br />
    </p>
    <hr />

    {/* -------------------------------------  React Events -------------------------------------  */}
    <h2>React Events</h2>
    <p>
      React events are written in camelCase syntax: <br />
      Like: <b>onClick</b>. <br />
      React event handlers are written inside curly braces: <br />
      <b>onClick={"{shoot}"}</b>
    </p>
    <h3>Passing Arguments</h3>
    <span>To pass an argument to an event handler, use an arrow function:</span> <br />
    <span>
    {"function Football() {"} <br />
    {" const shoot = (a) => {"} <br />
        {"alert(a);"} <br />
     {"}"} <br />
     {"return ("} <br />
     {"<button onClick={() => shoot('Goal!!!')}>Free Kick!</button>"} <br />
     {"); }"} <br />
    </span>
    The output is: <Football />
    <h3>React Event Object</h3>
    <span>Event handlers have access to the React event that triggered the function.</span> <br />
    <span>In our Example below, the event is the "click" event.</span> <br />
    <span>Arrow function: sending the event object manually:</span> <br />
    <span>
    {"function Football() {"} <br />
    {" const shoot = (a, b) => {"} <br />
        {"alert(b.type);"} <br />
        {"/* 'b' represents the React event that triggered the function. In this case, the 'click' event*/"}
     {"}"} <br />
     {"return ("} <br />
     {"<button onClick={(event) => shoot('Goal!!!', event)}>Free Kick!</button>"} <br />
     {"); }"} <br />
    </span>
    <Football /> The output is gonna be 'click' because we wrote {"alert(b.type);"} to onClick event.
    <br />
    <hr />

    {/* --------------------------------- React Conditional Rendering ---------------------------------  */}
    <h2>React Conditional Rendering</h2>
    <p>
      In React, we can conditionally render components.<br />
      There are several ways to do this.<br />
      If statements:<br />
      <b>
      {"function Login() {"} <br />
      {"return <h1>Welcome Your Profile!</h1>"} <br />
      {"}"} <br />
      {"function Logout() {"} <br />
      {"return <h2>Goodbye! See you soon...</h2>"} <br />
      {"}"} <br />
      {"function Log(props)"} <br />
      {"const isLogin = props.isLogin;"} <br />
      {"if (isLogin) {"} <br />
      {"return <Login />;"} <br />
      {"}"} <br />
      {"return <Logout />;"} <br />
      {"}"} <br />
      {"(<Log isLogin={true} />"} <br />
      </b>
    </p>
    <span>The output is:</span> <Log isLogin={true}/>
    <hr />
    <h3>Logical && Operator</h3>
    <p>
      Another way to conditionally render a React Component is by using the <b>&&</b> Operator. <br />
      <b>
      {"function Garage2 (props) {"} <br />
      {"const bikes = props.bikes;"} <br />
      {"return ("} <br />
      {"<>"} <br />
      {"<h2>My Garage</h2>"} <br />
      {"{bikes.length > 0 &&"} <br />
      {"<h2>I have {bikes.length} bikes in my garage.</h2>"} <br />
      {"}"} <br />
      {"</>"} <br />
      {")}"} <br />
      <br />
      <br />
      const bikes = ['Canyon', 'Cannondale', 'Mosso'];  <br />
      Render: {"<Garage2 bikes={bikes}/>"}
      </b>
    </p>
    The output is gonna: <Garage2 bikes={bikes}/> <br />
    <hr />
    <h3>Ternary Operator </h3>
    <p>
      condition ? true : false <br />
      We turned back to <b>Login and Logout</b> example:
      <b>
      {"function Login() {"} <br />
      {"return <h1>Welcome Your Profile!</h1>"} <br />
      {"}"} <br />
      {"function Logout() {"} <br />
      {"return <h2>Goodbye! See you soon...</h2>"} <br />
      {"}"} <br />
      {"function Log(props)"} <br />
      {"const isLogin = props.isLogin;"} <br />
      {"return ("} <br />
      {"<>"} <br />
      {"{ isLogin ? <Login /> : <Logout /> }"} <br />
      {"</>;"} <br />
      {")}"} <br />
      {"(<Log isLogin={true} />"} <br />
      </b>
    </p>
    The output (true) is: <Log isLogin={true} /> <br />
    OR the output (false) is: <Log isLogin={false} /> <br />
    <hr />

    {/* --------------------------------- React Lists ---------------------------------  */}
    <h2>React Lists</h2>
    <p>
      In React, we will render lists with some type of loop. <br />
      The JS <b>map()</b> array method is generally the <b>preferred</b> method. <br />
      If we don't write <b>keys</b>, React will give an error about unique key. <br />
      <b>
      {"function Motorbikes(props) {"} <br />
      {"return <li>This is a { props.brand } </li>"}; <br />
      {"}"} <br />
      {"function MotorsGarage() {"} <br />
      {"const motorbikes = ["} <br />
      {"{ id: 1, brand:'Harley Davidson'"} <br />
      {"{id: 2, brand: 'Triumph'}"} <br />
      {"{id: 3, brand: 'Ducati'}"} <br />
      {"];"} <br />
      {"return ("} <br />
      {"<>"} <br />
      {"<h2>Motorbikes in my Garage</h2>"} <br />
      {"<ul>"} <br />
      {"{motorbikes.map((motorbikes) => <Motorbikes key={motorbikes.id} brand={motorbikes.brand})}"} <br />
      {"</ul>"} <br />
      {"</>)}"} <br />
      </b>
    </p>
    The output is: <MotorsGarage />
    <hr />

    {/* --------------------------------- React Forms ---------------------------------  */}
    <h2>React Forms</h2>
    <p>
      Just like HTML, React uses forms to allow users to interact with the webpage. <br />
      When we use the <b>Forms</b> as like in the HTML, they will work as normal, the form will submit and the page will refresh. <br />
      We want to prevent this <b>default</b> behaviour and let React control the form. <br />
    </p>
    <h3>
      Handling Forms
    </h3>
    <p>
      In HTML, form data is usually handled by the <b>DOM.</b> <br />
      In React, form data is usually handled by the <b>components.</b> <br />
      When the data is handled by the components, all the data is stored in the components state. <br />
      We can control changes by adding event handlers in the <b>onChange</b> attribute. <br />
      We can use <b>useState Hook</b> <u>to keep track of each inputs value</u> and provide a "single source of truth" for the entire Application. <br />
    </p>
    <h3>
      Submitting Forms
    </h3>
    <p>
      We can control the submit action by adding an event handler in the <b>onSubmit</b> attribute for the {"<form>"}
    </p>
    <h3>
      Multiple Forms
    </h3>
    <p>
      We can control the values of more than one input field by adding a <b>name</b> attribute to each element. <br />
      We will initialize our state with an empty object. <br />
      To access the fields in the event handler use the <b>event.target.name</b> and <b>event.target.value</b> syntax. <br />
      <u>To update the state,</u> use square brackets [bracket notation] around the property name. <br />
      Please find the <b>MyForm Component</b> in the MyForm.js folder.
    </p>
    <MyForm />
    <h3>
      Textarea
    </h3>
    <p>
      The textarea element in React is slightly different from ordinary HTML. <br />
      In HTML the value of a textarea was the text between the start {"<textarea>"} and the end tag {"</textarea>"} <br /> 
      In React, the value of textarea is placed in a value attribute. <br /> 
       We'll use the <b>useState</b> Hook to <u>manage the value</u> of the textarea: <br />
    </p>
    <span>The output is:</span> <MyForm2 />
    <br />
    <h3>
      Select
    </h3>
    <p>
      In React, A drop down list, or a select box, also different from HTML. <br />
      In HTML, the selected value in the drop down list was defined with the <b>selected</b> attribute: <br />
      {"<select>"} <br />
      {"<option value='BMW'>BMW</option>"} <br />
      {"<option value='Aston Martin' selected>Aston Martin</option>"} <br />
      {"<option value='Mercedes'>Mercedes</option>"} <br />
      {"</select>"} <br /><br />
      In React, the <b>selected value</b> is defined with a <b>value</b> attribute on the <b>select</b> tag. <br />
    </p>
    <span>The output is:</span> <MyForm3 />
    <br />
    <p style={{fontSize:"28px", border:"1px solid white", borderRadius:"12px", padding:"10px", textAlign:"center"}}>
      ##NOTE ## <br /> 
      We are using the <b>useState</b> Hook to <u>keep track</u> of the Application.<br />
      <b>State</b>, in general, refers to <b>application data or properties</b> that need to be tracked. <br />
      Hooks can only be called inside React function components. <br />
      Hooks can only be called at the top level of a component. <br />
      Hooks cannot be conditional. <br />
    </p>
    <br />
    <hr />
    <h3>
      React Router
    </h3>
    <p>
      Add a React Router: To add React Router in our application, we need to run this in the terminal from the root directory of the application: <br />
      <b>npm i -D react-router-dom</b>
    </p>
    
  </div>

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Conditionals" element={<Conditionals  />} />
          <Route path="Props&Components" element={<PropsComponents />} />
          <Route path='ClassComponents' element={<ClassComponents />} />
          <Route path='ReactEvents' element={<ReactEvents />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(MyFirstElement);
root.render(<App />);