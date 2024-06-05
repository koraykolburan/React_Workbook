import Garage2 from "../Garage2";
import Log from "../IsLogin";

const bikes = ['Canyon', 'Cannondale', 'Mosso']; // This is for Garage2 && And Logical operator

const ConditionalRendering = () => {
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
          <h2>React Conditional Rendering</h2>
          <p>
               In React, we can conditionally render components.<br />
               There are several ways to do this.<br />
               If statements:<br />
               <code style={{color:"#015CC5"}}>
               {"function Login() {"} <br />
               {"return <h1>Welcome Your Profile!</h1>"} <br />
               {"}"} <br />
               {"function Logout() {"} <br />
               {"return <h2>Goodbye! See you soon...</h2>"} <br />
               {"}"} <br />
               {"function Log(props)"} <br />
               {"const isLogin = props.isLogin;"} <br />
               {"if (isLogin) {"} <br />
               {"return <Login />;"} <br />
               {"}"} <br />
               {"return <Logout />;"} <br />
               {"}"} <br />
               {"(<Log isLogin={true} />"} <br />
               </code>
          </p>
          <span>The output is:</span> <Log isLogin={true}/>
          <hr />
          <h3>Logical && Operator</h3>
          <p>
               Another way to conditionally render a React Component is by using the <b>&&</b> Operator. <br />
               <code style={{color:"#015CC5"}}>
               {"function Garage2 (props) {"} <br />
               {"const bikes = props.bikes;"} <br />
               {"return ("} <br />
               {"<>"} <br />
               {"<h2>My Garage</h2>"} <br />
               {"{bikes.length > 0 &&"} <br />
               {"<h2>I have {bikes.length} bikes in my garage.</h2>"} <br />
               {"}"} <br />
               {"</>"} <br />
               {")}"} <br />
               <br />
               <br />
               const bikes = ['Canyon', 'Cannondale', 'Mosso'];  <br />
               Render: {"<Garage2 bikes={bikes}/>"}
               </code>
          </p>
          The output is gonna: <Garage2 bikes={bikes}/> <br />
          <hr />
          <h3>Ternary Operator </h3>
          <p>
               condition ? true : false <br />
               We turned back to <b>Login and Logout</b> example: <br />
               <code style={{color:"#015CC5"}}>
               {"function Login() {"} <br />
               {"return <h1>Welcome Your Profile!</h1>"} <br />
               {"}"} <br />
               {"function Logout() {"} <br />
               {"return <h2>Goodbye! See you soon...</h2>"} <br />
               {"}"} <br />
               {"function Log(props)"} <br />
               {"const isLogin = props.isLogin;"} <br />
               {"return ("} <br />
               {"<>"} <br />
               {"{ isLogin ? <Login /> : <Logout /> }"} <br />
               {"</>;"} <br />
               {")}"} <br />
               {"(<Log isLogin={true} />"} <br />
               </code>
          </p>
          The output (true) is: <Log isLogin={true} /> <br />
          OR the output (false) is: <Log isLogin={false} /> <br />
     </div>
     )
     
}

export default ConditionalRendering;