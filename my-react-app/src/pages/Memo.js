import IncApp from "./TodosIndex";

const ReactMemo = () => {
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
               <h1>
                    React Memo
               </h1>
               <p>
                    Using <b>React.memo</b> memozies a functional component and its props. <br />
                    Doing so helps prevent unnecessary re-renderings that originate from the re-renderings of the component's parent/ancestors. <br />
                    It will cause React to skip rendering a component if its props have not changed. <br />
                    In this example, we used to <b>memo</b> to keep the <b>Todos</b> component from needlessly re-rendering. <br />
                    We wrapped the <b>Todos</b> component export in <b>memo</b>: <br />
               </p>
               <span>The output is:</span> <IncApp /> <br />
               <h2>Wrapping the Todos.js Component export in memo</h2>
               <ul>
                    <li>We need to <b>import</b> memo: <code style={{color:"#015CC5"}}>{"import { memo } from 'react';"}</code> at the top of the page</li>
                    <li>We need to <b>wrapped</b> the export: <code style={{color:"#015CC5"}}>{"export default memo(Todos);"}</code> like that.</li>
               </ul>
               <p>
                    Now, the Todos.js component only re-renders when the <b>todos</b> that are passed to it through props are updated.
               </p>
          </div>
     )
}

export default ReactMemo;