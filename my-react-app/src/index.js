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
  
  </div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myfirstElement);

