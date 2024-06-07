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
                         margin:"30px 25px 0 0", 
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
                         margin:"30px 25px 0 0",  
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
                         margin:"30px 25px 0 0", 
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
                         margin:"30px 25px 0 0", 
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
                         margin:"30px 25px 0 0",  
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
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0",  
                         listStyleType:"none"
                         }}>
                         <Link to="/ConditionalRendering" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
                         >
                         Conditional Rendering
                         </Link>
                    </li>
                    <li 
                    style={{
                         display:"inline-block", 
                         padding:"5px", 
                         margin:"30px 25px 0 0", 
                         listStyleType:"none"
                         }}>
                         <Link to="/Lists" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
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
                         <Link to="/Forms" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
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
                         <Link to="/ReactRouter" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
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
                         <Link to="/ReactMemo" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
                         >
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
                         <Link to="/ReactHooks" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
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
                         <Link to="/ReactStyling" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
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
                         <Link to="/NoPages" 
                              style={{textDecoration:"none", border:"1px solid black",
                                   borderRadius:"12px",
                                   color:"#e5e5e5",
                                   backgroundColor:"#15202B",
                                   padding:"15px"
                              }}
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