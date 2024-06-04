import  { Outlet, Link } from "react-router-dom";

const Layout = () => {
     return (
          <>
          <nav>
               <ul>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         listStyleType:"none",
                         }}>
                         <Link to="/" style={{
                              textDecoration:"none",
                              border:"1px solid black",
                              borderRadius:"12px",
                              color:"#e5e5e5",
                              backgroundColor:"#15202B",
                              padding:"15px"
                              }}>
                                   Home
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         listStyleType:"none"
                         }}>
                         <Link to="/Conditionals" 
                              style={{
                                   textDecoration:"none",
                                   border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
                         >
                                   Conditionals & Rendering 
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         listStyleType:"none"
                         }}>
                         <Link to="/Props&Components" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
                         >
                         Props & Components
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         listStyleType:"none"
                         }}>
                         <Link to="/ClassComponents" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
                         >
                         Class Components
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         listStyleType:"none"
                         }}>
                         <Link to="/ReactEvents" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
                         >
                         React Events
                         </Link>
                    </li>
               </ul>
          </nav>

          <Outlet />
          </>
     )
}

export default Layout;