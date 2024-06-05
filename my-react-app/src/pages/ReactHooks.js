import FavoriteBike from "../FavoriteBike";

const ReactHooks = () => {
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
               <h1>React Hooks</h1>
               <p>
                    Hooks were a new addition in React 16.8. <br />
                    They let us use <b>state</b> and other React Features and Lifecycle methods without wiriting a class. <br />
                    We can use the <b>useState</b> Hook to Keep Track of each application states, like <b>inputs values</b>. <br />
                    This let us to provide a <u>single source of truth</u> for the entire application. <br />
                    <b>State</b> generally refers to application data or properties that need to be tracked. <br />
                    <br />
                    <code style={{color:"#015CC5"}}>
                         {"function FavoriteBike() { "} <br />
                              {"//Declare a new state variable, which we call 'count'"} <br />
                              {"const [brand, setBrand] = useState('Cannondale');"} <br />
                              {"<h1>My favorite bike is {brand}</h1>"} <br />
                              {"<button type='button' onClick='() => setBrand('Cannondale')'>Cannondale</button"} <br />
                              {"<button type='button' onClick='() => setBrand('Mosso')'>Mosso</button>"} <br />
                              {"<button type='button' onClick='() => setBrand('Vitus Venon')>Vitus Venon</button>'"} <br />
                              {"<button type='button' onClick='() => setBrand('Allez')>Allez</button>'"} <br />
                         {"}"}
                    </code>
               </p>
               <FavoriteBike />
          </div>
     )
}

export default ReactHooks;