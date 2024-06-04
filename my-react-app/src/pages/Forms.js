import MyForm3 from "../MyForm3";
import MyForm2 from "../MyForm2";
import MyForm from "../MyForm";

const Forms = () => {
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
               <h2>React Forms</h2>
                    <p>
                         Just like HTML, React uses forms to allow users to interact with the webpage. <br />
                         When we use the <b>Forms</b> as like in the HTML, they will work as normal, the form will submit and the page will refresh. <br />
                         We want to prevent this <b>default</b> behaviour and let React control the form. <br />
                    </p>
                    <h3>
                         Handling Forms
                    </h3>
                    <p>
                         In HTML, form data is usually handled by the <b>DOM.</b> <br />
                         In React, form data is usually handled by the <b>components.</b> <br />
                         When the data is handled by the components, all the data is stored in the components state. <br />
                         We can control changes by adding event handlers in the <b>onChange</b> attribute. <br />
                         We can use <b>useState Hook</b> <u>to keep track of each inputs value</u> and provide a "single source of truth" for the entire Application. <br />
                    </p>
                    <h3>
                         Submitting Forms
                    </h3>
                    <p>
                         We can control the submit action by adding an event handler in the <b>onSubmit</b> attribute for the {"<form>"}
                    </p>
                    <h3>
                         Multiple Forms
                    </h3>
                    <p>
                         We can control the values of more than one input field by adding a <b>name</b> attribute to each element. <br />
                         We will initialize our state with an empty object. <br />
                         To access the fields in the event handler use the <b>event.target.name</b> and <b>event.target.value</b> syntax. <br />
                         <u>To update the state,</u> use square brackets [bracket notation] around the property name. <br />
                         Please find the <b>MyForm Component</b> in the MyForm.js folder.
                    </p>
                    <MyForm />
                    <h3>
                         Textarea
                    </h3>
                    <p>
                         The textarea element in React is slightly different from ordinary HTML. <br />
                         In HTML the value of a textarea was the text between the start {"<textarea>"} and the end tag {"</textarea>"} <br /> 
                         In React, the value of textarea is placed in a value attribute. <br /> 
                         We'll use the <b>useState</b> Hook to <u>manage the value</u> of the textarea: <br />
                    </p>
                    <span>The output is:</span> <MyForm2 />
                    <br />
                    <h3>
                         Select
                    </h3>
                    <p>
                         In React, A drop down list, or a select box, also different from HTML. <br />
                         In HTML, the selected value in the drop down list was defined with the <b>selected</b> attribute: <br />
                         {"<select>"} <br />
                         {"<option value='BMW'>BMW</option>"} <br />
                         {"<option value='Aston Martin' selected>Aston Martin</option>"} <br />
                         {"<option value='Mercedes'>Mercedes</option>"} <br />
                         {"</select>"} <br /><br />
                         In React, the <b>selected value</b> is defined with a <b>value</b> attribute on the <b>select</b> tag. <br />
                    </p>
                    <span>The output is:</span> <MyForm3 />
          </div>
     )
}

export default Forms;