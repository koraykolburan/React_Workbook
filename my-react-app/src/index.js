import React from 'react';
import ReactDOM from 'react-dom/client';


const x = 5; //This is for Ternary Expressions in 
// A Function Component
function Bike2() {
  return <h2>Hi I'm a Bike!</h2>;
}

const myfirstElement = 
<div id="container2">
  <h1>JS React!</h1> 
  <h2>Using React, we render HTML in a web page in many ways.</h2>
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
  <hr />
  <h2>What is JSX?</h2>
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
    <hr />
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
    </p>
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
    <h2>Props</h2>
    <p>
      Components can be passed as <b>props,</b> which stands for properties. <br />
      
    </p>
  </div>
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myfirstElement);

