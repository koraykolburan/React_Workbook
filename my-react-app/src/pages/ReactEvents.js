import Football from "../Shoot.js";

const ReactEvents = () => {
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
          <h2>React Events</h2>
          <p>
               React events are written in camelCase syntax: <br />
               Like: <b>onClick</b>. <br />
               React event handlers are written inside curly braces: <br />
               <b>onClick={"{shoot}"}</b>
          </p>
          <h3>Passing Arguments</h3>
          <span>To pass an argument to an event handler, use an arrow function:</span> <br />
          <span>
          {"function Football() {"} <br />
          {" const shoot = (a) => {"} <br />
               {"alert(a);"} <br />
               {"}"} <br />
               {"return ("} <br />
               {"<button onClick={() => shoot('Goal!!!')}>Free Kick!</button>"} <br />
               {"); }"} <br />
          </span>
          The output is: <Football />
          <h3>React Event Object</h3>
          <span>Event handlers have access to the React event that triggered the function.</span> <br />
          <span>In our Example below, the event is the "click" event.</span> <br />
          <span>Arrow function: sending the event object manually:</span> <br />
          <span>
          {"function Football() {"} <br />
          {" const shoot = (a, b) => {"} <br />
               {"alert(b.type);"} <br />
               {"/* 'b' represents the React event that triggered the function. In this case, the 'click' event*/"}
               {"}"} <br />
               {"return ("} <br />
               {"<button onClick={(event) => shoot('Goal!!!', event)}>Free Kick!</button>"} <br />
               {"); }"} <br />
          </span>
          <br />
          <Football /> 
          <br />
          <span>
          The output is gonna be 'click' because we wrote {"alert(b.type);"} to onClick event.
          </span>

     </div>
     )
     
}

export default ReactEvents;