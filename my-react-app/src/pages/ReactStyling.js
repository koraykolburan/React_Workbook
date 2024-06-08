import Garage from "../Garage";
import '../sass/my-sass.scss';

const ReactStyling = () => {
     return (
     
          <div className="divStyle">
               <h1>React CSS Styling</h1>
               <ol>
                    <li>
                    Inline Styling using with two set of curly braces {"{{}}"} <code>{"<h1 style={{color:'white'}}>Hello!!!</h1>"} <br /> 
                    Or we can create a <b>style object:</b> <br />
                    {"const Header = () => { const myStyle ={color: 'white', backgroundColor:'black'} "} <br /> 
                    {"return(<><h1 style={myStyle}>Hello!!!</h1></>)"}
                    </code>
                    </li>
                    <li>
                         <b>CSS Stylesheet:</b> We can write our CSS in a separate file like: App.css <br />
                         And we need to import our <code>import './App.css';</code>
                    </li>
                    <li>
                         <b>CSS Modules:</b> they are convenient for components that are placed in separate files.<br />
                         We created <b>my-style.module.css</b> and we inserted some css codes in it. <br />
                         We need to import the Stylesheet in our component: <br />
                         <code>{".bigblue {color: DodgerBlue; padding: 40px; font-family: Sans-Serif;text-align: center;}"}</code>
                         <code>import style from './my-style.module.css'</code>
                    </li>
               </ol>
               <span>The output is:</span> <br />
               <Garage />
               <br /><hr />
               <h1>React Sass Styling (Syntactically Awesome Stylesheet)</h1>
               <ol>
                    <li>Sass is an extension to CSS</li>
                    <li>Sass is a CSS pre-processor</li>
                    <li>Sass is completely compatible with all versions of CSS</li>
                    <li>Sass reduces repetition of CSS and therefore saves time</li>
                    <li>We need to run this command in terminal: <b>npm i sass</b></li>
                    <li>Then, Create Sass file the same way as we create CSS files, however Sass files have the file extension <b>.scss</b></li>
                    <li>We can create a variable to define the color of the text or sth else:</li>
                    <code>
                         $myColor: purple; <br/>
                         $myCode: #015cc5; <br/>
                         $myWeight: bold; <br/>
                         $myCursor: pointer; <br/>
                         <br/>
                         h1 {"{color: $myColor}"} <br />
                         code {"{color: $myCode; font-weight: $myWeight}"} <br />
                         </code>
                    <li>Finally, we can import the Sass file the same way as we imported a CSS file.</li>
                    <code> 'import './my-sass.scss';' or 'import '../sass/my-sass.scss';'</code>
               </ol>
          </div>
          
     )
}

export default ReactStyling;