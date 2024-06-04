import Bike2 from "../Bike2";

const Conditionals = () => {

     const x = 5;
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

          {/* -------------------------------------  React Conditionals -------------------------------------  */}
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
               
          </div>

     )
};

export default Conditionals;