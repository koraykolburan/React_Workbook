import { useState } from 'react';

function Car2() {
     const [car, setCar] = useState({
          brand: 'BMW',
          model: 'i20',
          year: 2024,
          color: <b><u>'Metalic Grey'</u></b>
     })

     const updateColor = () => {
          setCar(previousState => {
               return {...previousState, color: <b>"Metalic Blue"</b>}
          })
     }

     const oldColor = () => {
          setCar(previousState => {
               return {...previousState, color: <b>"Metalic Grey"</b>}
          })
     }

     return ( 
          <>
               <h1>My {car.brand}</h1>
               <p>
                    It is a {car.color} {car.model} from {car.year}. <br />
                    One click for <b>Metalic Blue {car.brand}</b> <br />
                    Double click for <b>Metalic Grey {car.brand}</b>
               </p>
               <button 
                    type='button'
                    onClick={updateColor}
                    onDoubleClick={oldColor}
               >Metalic Blue/Grey</button>
          </>
     )
}

export default Car2;