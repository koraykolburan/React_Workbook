
const ReactRouter = () => {
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
               <h3>
                    React Router
               </h3>
               <p>
                    Add a React Router: To add React Router in our application, we need to run this in the terminal from the root directory of the application: <br />
                    <b>npm i -D react-router-dom</b>
               </p>
               <h2>Folder Structure</h2>
               <p>
                    To create an application with multiple page routes, we created a folder named <b>pages</b>.<br />
                    <b>src/pages/</b> <br />
               </p>
               <ul>
                    <li>ClassComponents.js</li>
                    <li>Conditional.js</li>
                    <li>ConRendering.js</li>
                    <li>Forms.js</li>
                    <li>Lists.js</li>
                    <li>Home.js</li>
                    <li>Layout.js</li>
                    <li>NoPages.js</li>
                    <li>PropsComponents.js</li>
                    <li>ReactEvents.js</li>
                    <li>ReactRouter.js</li>
               </ul>
               <span>

               First, we need to import, Then, we need to export like this: <br /> 
               </span>
               <p style={{fontWeight:"bold"}}>
                    {"import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';"} <br />
                    {"import Layout from './pages/Layout';"} <br />
                   
                    {"export default function App() {"} <br />
                    {"return ("} <br />
                    {"<BrowserRouter>"} <br />
                    {"<Routes>"} <br />
                    {"<Route path='/' element={<Layout />} />"} <br />
                    {"<Route index element={Home />} />"} <br />
                    {"<Route path='Conditionals' element={<Conditionals />} />"} <br />
                    {"</Route>"} <br />
                    {"</Routes>"} <br />
                    {"</BrowserRouter>"} <br />
                    {")}"} <br />
               </p>
          </div>
     )
}

export default ReactRouter;