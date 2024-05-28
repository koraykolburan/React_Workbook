import React from 'react';
import ReactDOM from 'react-dom/client';

const myfirstElement = <div id="container2">
  <h1>JS React!</h1> 
  <h2>This is Component?</h2>
  <h3>Using React, we render HTML in a web page in many ways.</h3>
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
  <h2>What is JSX?</h2>
  <h3>JavaScript XML</h3>
  <h3>JSX allows us to write HTML in React</h3>
  <h2>Coding JSX</h2>
  <p>
  It gives us to write HTML elements in JS and place them in the DOM without any <b>createElement()</b> and <br />
  <b>appendChild()</b> methods. JSX converts HTML tags into React Elements.
  </p>
  <h2>Expressions in JS</h2>
  <p>
    With JSX we can write expressions inside curly braces '4 * 4' inside of the braces is: '{ 4 * 4 }'. <br /> 
    This expression can be a React variable or property or any other valid JS expression. <br />
    JSX will execute the expression and return the result. Like this: 4 + 4 inside of the braces is = {4+4}
  </p>
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
    <h2>JSX Attribute class = className</h2>
    <p>
      
    </p>
  </div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myfirstElement);

