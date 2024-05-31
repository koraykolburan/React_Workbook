import Motorbikes from "./Motorbikes";

function MotorsGarage() {
     const motorbikes = [
          {id: 1, brand: 'Harley Davidson'},
          {id: 2, brand: 'Triumph'},
          {id: 3, brand: 'Ducati'},
     ];
     return (
          <>
          <h2>Motorbikes in my Garage</h2>
          <ul>
               {motorbikes.map((motorbikes) => <Motorbikes key={motorbikes.id} brand={motorbikes.brand} />)}
          </ul>
          </>
     )
}

export default MotorsGarage;