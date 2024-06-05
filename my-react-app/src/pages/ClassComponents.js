import Car from "../Car";

const ClassComponents = () => {
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
               <h2>React Class Components</h2>
               <p>
                    Before React 16.8, Class components were the only way to track state and lifecycle on a React component. <br />
                    Function components were considered 'state-less'. <br />
                    With the addition of <b>Hooks,</b> Function components are now almost equivalent to Class components. <br />
                    When creating a React Component, it's name must start with an upper-case letter. <br />
                    Also the component has to include the <b>extends React.Component</b> statement to inheritance to React.Component. <br />
                    And it gives our component <b>access</b> to React.Component's functions. <br />
                    The component also requires a <b>render()</b> method, this method return HTML. <br />
                    <br />
                    <code style={{color:"#015CC5"}}>
                    
                    {"class Car extends React.Component {"} <br/>
                    {"constructor() {"} <br/>
                    {"super(); "} <br/>
                    {"this.state = {color:'red'}; "} <br/>
                    {"} "} <br/>
                    {"render() {"} <br/>
                    {"return <span>This is {this.state.color} BMW!</span>;"} <br/>
                    {"}}"} <br/>
                    </code> <br />
                    This is for rendering: <br />
                    <code style={{color:"#015CC5"}}>
                    {"const root = ReactDOM.createRoot(document.getElementById('root'));"} <br />
                    {"root.render(<Car />)"} <br />
                    </code> <br />
                    
                    If there is a <b>constructor()</b> function in our component, this function will be called when the components gets initiated. <br />
                    The <b>conctructor</b> function is where we initiate the component's properties. <br />
                    In React, component properties should be kept in an object called <b>state.</b>
                    Also, we need to use the statement <b>super()</b> that executes the parent component's constructor function. <br />
                    And our component has access to all functions of the parent component(React.Component). <br />
                    </p>

                    The output is: <Car derived="getDerivedStateFromProps - this will not change!"/> <br />
                    <p>
                    Or we can use the <b>props</b> instead of <b>state</b>: <br />
                    {"I am a {this.props.color} Car!"}; <br />
                    {"<Car color='red'/>"} <br />
                    <br /><br />
                    If we have a constructor function, the <b>props</b> always be passed to the constructor and also the React.Component via the <b>super()</b> method. <br />
                    <span style={{fontSize:'16px', color:'red', fontFamily:'monospace'}}>
                    <code style={{color:"#015CC5"}}>
                    {"class Car extends React.Component {"} <br/>
                    {"constructor(props) {"} <br/>
                    {"super(props); "} <br/>
                    {"render() {"} <br/>
                    {"return <span>This is {this.props.model} BMW!</span>;"} <br/>
                    {"}}"} <br/>
                    </code> <br />
                    This is for rendering: <br />
                    <code style={{color:"#015CC5"}}>
                    {"const root = ReactDOM.createRoot(document.getElementById('root'));"} <br />
                    {"root.render(<Car model='i20'/>)"} <br />
                    </code> <br />
                    </span>
               </p>
               <h3>Creating the state Object</h3>
               <p>
                    The state object can contain as many properties as we like: <br />
                    Refer to the <b>state</b> object anywhere in the component by using the <b>this.state.propertyname</b> syntax: <br />
                    <code style={{color:"#015CC5"}}>
                    {"class Car extends React.Component {"} <br/>
                    {"constructor(props) {"} <br/>
                    {"super(props); "} <br/>
                    {"this.state = {brand :'BMW'"}; <br/>
                    {"color :'blue'"}; <br/>
                    {"model :'ie20'"}; <br/>
                    {"year :'2024'"}; <br/>
                    {"}}"} <br/>
                    {"changeColor = () => {"} <br/>
                    {"this.setState({color: <b>red</b>})"} <br/>
                    {"render() {"} <br/>
                    {"return (<div>"} <br/>
                    {"<h1>This is my car{this.state.brand}</h1> "} <br/>
                    {"<p> "} <br/>
                    {"Its color is: {this.state.color} "} <br/>
                    {"Its model is: {this.state.model} "} <br/>
                    {"Its year is: {this.state.year} "} <br/>
                    {"</p> "} <br/>
                    {"<button type='button' onClick={this.changeColor}>Change Properties "} <br/>
                    {"</button> "} <br/>
                    {"</div>"} <br/>
                    {")}}"} <br/>
                    <br />
                    This is for rendering: <br />
                    <b>
                    {"const root = ReactDOM.createRoot(document.getElementById('root'));"} <br />
                    {"root.render(<Car model='i20'/>)"} <br />
                    </b> <br />
                    </code>
               </p>
               <h2>Lifecycle of Components</h2>
               <p>
                    Each component in React has a lifecycle which we can monitor and manipulate during its 3 main phases: <br />
                    <b>1: Mounting</b> means: putting elements into the DOM. <br />
                    a) constructor(), b) getDerivedStateFromProps(), c) render(), d)c omponentDidMount() <br />
                    <b>2: Updating</b> A component is updated whenever there is a change in the component's <b>state or props.</b><br />
                    a) getDerivedStateFromProps(), b) shouldComponentUpdate(), c) render(), d) getSnapshotBeforeUpdate(), e) componentDidUpdate() <br />
                    <b>3: Unmounting</b> means: deleting elements from the DOM. <br />
               </p>
          </div>
     )
}

export default ClassComponents;