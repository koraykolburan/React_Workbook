import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1() {
     const [user, setUser] = useState("Tom. H.");


     return (
          <UserContext.Provider value={user}>
          <h1>{`Welcome ${user}!`}</h1>
          <Component2 user={user} />
          </UserContext.Provider>
     )
}

function Component2() {
     const user = useContext(UserContext);
     return (
          <>
          <h1>Component 2</h1>
          <h2>{`Welcome to ${user}'s favorites.`}</h2>
          <Component3 />
          </>
     );
} 

function Component3() {
     const user = useContext(UserContext);
     return (
          <>
          <h1>Component 3</h1>
          <h2>{`Here is ${user}'s history.`}</h2>
          <Component4 />
          </>
     );
}

function Component4() {
     const user = useContext(UserContext);

     return (
          <>
          <h1>Component 4</h1>
          <h2>{`New Things for ${user} based on ${user}'s searching history.`} </h2>
          <Component5 />
          </>
     );
}

function Component5() {
     const user = useContext(UserContext);
     return (
          <>
          <h1>Component 5</h1>
          <h2>{`Goodbye ${user}!`}</h2>
          </>
     );
}

export default Component1;