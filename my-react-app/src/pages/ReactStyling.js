import Garage from "../Garage";

const ReactStyling = () => {
     return (
     
          <div className="divStyle">
               <h1>React CSS Styling</h1>
               <ol>
                    <li>
                    Inline Styling using with two set of curly braces {"{{}}"} <code style={{color:"#015cc5"}}>{"<h1 style={{color:'white'}}>Hello!!!</h1>"} <br /> 
                    Or we can create a <b>style object:</b> <br />
                    {"const Header = () => { const myStyle ={color: 'white', backgroundColor:'black'} "} <br /> 
                    {"return(<><h1 style={myStyle}>Hello!!!</h1></>)"}
                    </code>
                    </li>
                    <li>
                         <b>CSS Stylesheet:</b> We can write our CSS in a separate file like: App.css <br />
                         And we need to import our <code style={{color:"#015cc5"}}>import './App.css';</code>
                    </li>
                    <li>
                         <b>CSS Modules:</b> they are convenient for components that are placed in separate files.<br />
                         We created <b>my-style.module.css</b> and we inserted some css codes in it. <br />
                         We need to import the Stylesheet in our component: <br />
                         <code style={{color:"#015cc5"}}>{".bigblue {color: DodgerBlue; padding: 40px; font-family: Sans-Serif;text-align: center;}"}</code>
                         <code style={{color:"#015cc5"}}>import style from './my-style.module.css'</code>
                    </li>
               </ol>
               <span>The output is:</span> <br />
               <Garage />
          </div>
          
     )
}

export default ReactStyling;