import { memo } from 'react';

const Todos2 = ({ todos, addTodo }) => {
     console.log("child render");

     return (
          <>
               <h2>My Todos List</h2>
               {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
               })}
               <button onClick={addTodo}>Add Todo</button>
          </>
     );
};

export default memo(Todos2);