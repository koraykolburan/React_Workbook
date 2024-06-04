import Garage from "../Garage.js";
import MyBikes3 from "../MyBikes3.js";


const PropsComponents = () => {
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
               {/* -------------------------------------  PROPS -------------------------------------  */}
               <h2>Props</h2>
               <p>
                    Props are arguments passed into React components. <br />
                    Props are passed to components via HTML attributes. <br />
                    ##NOTE -- <b>props</b> stands for <b>properties.</b> <br />
                    Components can be passed as <b>props,</b> which stands for properties. <br />
                    <b>Props</b> are like function arguments, and we send them into the <b>component attributes.</b> <br />
                    Props are also how we pass data from one component to another, <b>as parameters.</b> <br />
                    We send the <b>brand</b> property from the Garage component to the Bike3 component: <br />
                    <br />
                    <span>
                    <b>
                    {"function Bike3(props) {" } <br />
                    {"return <h3>I am a {props.brand.model} Bike! My brand is {props.brand.name}, and my color is {props.brand.color}</h3>"} <br />
                    {"}"}  <br />
                    <br />
                    
                    {"function Garage() {"}  <br />
                    {/* {"const bikeName = 'Canyon'"}  <br /> */}
                    {"const bikeInfo = { name: 'Canyon', model : 'Road Bike', color : 'Grey' }"}  <br />
                    {"return ("}  <br />
                    {"<>"}  <br />
                    {"<h2>Which Brands I have in my Garage?</h2>"}  <br />
                    {"<Bike3 brand= { bikeInfo } />"}  <br />
                    {"</>"}  <br />
                    {"}"}  <br />
                    And the render: {"root.render(<Garage />);"}  <br />
                    </b>
                    </span>
                    <span>
                    ##NOTE -- React Props are <b>Read-Only!</b>  <br />
                    We will get an error if we try to change their value! <br />
                    </span>
               </p>
               <span>The output is: </span> <Garage />
               <hr />
               {/* -------------------------------------  COMPS. IN COMPS. -------------------------------------  */}
                    <h2>Components in Components</h2>
                    <MyBikes3 />
                    <hr />
                    <h2>Components in Files</h2>
                    <p>
                         React is all about <b>re-using</b> code, and it recommended to split our components into separate files. <br/>
                         To do that, create a new file with a <b>.js</b> file extension and put the code inside it like this: <br />
                         ##NOTE -- The <b>filename</b> MUST start with an UpperCase character. <br />
                         We created a file named <b>"Bike.js":</b> <br />
                    </p>
                    <h3>To able to use the Bike Component, we have to IMPORT the file in our Application</h3>
                    <h4>Export inside of "Bike2.js" File:</h4>
                    <p> 
                         In the <b>"Bike.js"</b> file: export! <br />
                         <b>
                         {"function Bike2() {"} <br />
                         {"return <h2>Hi I'm a Bike!</h2>;"} <br />
                         {"}"} <br />
                    </b>
                    <b>export default Bike2;</b>
                    <br />
                    </p>
                    <h4>Import inside of "Bike2.js" File:</h4>
                    <p>
                    In the <b>"index.js"</b> file import! (at the top of the page) <br />
                    <b>import from './Bike2.js'</b>
                    </p>


          </div>
     )
};

export default PropsComponents;