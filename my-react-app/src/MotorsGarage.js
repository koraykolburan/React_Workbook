import Motorbikes from "./Motorbikes";

function MotorsGarage() {
     const motorbikes = ['Harley Davidson', 'Triumph', 'Ducati'];
     return (
          <>
          <h2>Motorbikes in my Garage</h2>
          <ul>
               {motorbikes.map((motorbikes) => <Motorbikes brand={motorbikes} />)}
          </ul>
          </>
     )
}

export default MotorsGarage;