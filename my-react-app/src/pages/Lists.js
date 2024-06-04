import MotorsGarage from "../MotorsGarage";

const Lists = () => {
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
                <h2>React Lists</h2>
                    <p>
                         In React, we will render lists with some type of loop. <br />
                         The JS <b>map()</b> array method is generally the <b>preferred</b> method. <br />
                         If we don't write <b>keys</b>, React will give an error about unique key. <br />
                         <b>
                         {"function Motorbikes(props) {"} <br />
                         {"return <li>This is a { props.brand } </li>"}; <br />
                         {"}"} <br />
                         {"function MotorsGarage() {"} <br />
                         {"const motorbikes = ["} <br />
                         {"{ id: 1, brand:'Harley Davidson'"} <br />
                         {"{id: 2, brand: 'Triumph'}"} <br />
                         {"{id: 3, brand: 'Ducati'}"} <br />
                         {"];"} <br />
                         {"return ("} <br />
                         {"<>"} <br />
                         {"<h2>Motorbikes in my Garage</h2>"} <br />
                         {"<ul>"} <br />
                         {"{motorbikes.map((motorbikes) => <Motorbikes key={motorbikes.id} brand={motorbikes.brand})}"} <br />
                         {"</ul>"} <br />
                         {"</>)}"} <br />
                         </b>
                    </p>
                    The output is: <MotorsGarage />
          </div>
     )
}

export default Lists;