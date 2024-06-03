import  { Outlet, Link } from "react-router-dom";

const Layout = () => {
     return (
          <>
          <nav>
               <ul>
                    <li style={{float:"left", padding:"15px", listStyleType:"none"}}>
                         <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                    </li>
                    <li style={{float:"left", padding:"15px", listStyleType:"none"}}>
                         <Link to="/blogs" style={{textDecoration:"none"}}>Blogs</Link>
                    </li>
                    <li style={{float:"left", padding:"15px", listStyleType:"none"}}>
                         <Link to="/contact" style={{textDecoration:"none"}}>Contact</Link>
                    </li>
               </ul>
          </nav>

          <Outlet />
          </>
     )
}

export default Layout;