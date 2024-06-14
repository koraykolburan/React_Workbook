import useFetch from "./UseFetch";

const Demo = () => {
     const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

     return (
          <>
               <b>
               {data &&
                         data.map((item) => {
                              return <p key={item.id}>{item.title}</p>
                         })
                    }
               </b>
          </>
     );
};

export default Demo;