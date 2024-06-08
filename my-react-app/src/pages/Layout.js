import  { Outlet, Link } from "react-router-dom";

const Layout = () => {
     return (
          <>
          <nav>
               <ul className="myUl">
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0", 
                         listStyleType:"none",
                         }}>
                         <Link to="/" className="myLink">
                                   Home
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/Conditionals" className="myLink"
                         >
                                   Conditionals & Rendering 
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0", 
                         listStyleType:"none"
                         }}>
                         <Link to="/Props&Components" className="myLink"
                         >
                         Props & Components
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0", 
                         listStyleType:"none"
                         }}>
                         <Link to="/ClassComponents" className="myLink"
                         >
                         Class Components
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/ReactEvents" className="myLink"
                         >
                         React Events
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/ConditionalRendering" className="myLink"
                         >
                         Conditional Rendering
                         </Link>
                    </li>
               </ul>
               <ul className="myUl">
               <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0", 
                         listStyleType:"none"
                         }}>
                         <Link to="/Lists" className="myLink"
                         >
                         React Lists
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/Forms" className="myLink"
                         >
                         React Forms
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/ReactRouter" className="myLink"
                         >
                         React Router
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px",
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/ReactMemo" className="myLink">
                         React Memo
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px",
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/ReactHooks" className="myLink"
                         >
                         React Hooks
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px",
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/ReactStyling" className="myLink"
                         >
                         React Styling 
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px",
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/NoPages" className="myLink"
                         >
                         No Pages
                         </Link>
                    </li>
               </ul>
          </nav>

          <Outlet />
          </>
     )
}

export default Layout;