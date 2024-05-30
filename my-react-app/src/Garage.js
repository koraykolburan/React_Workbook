import Bike3 from './Bike3.js';

function Garage() {
     //const bikeName = 'Canyon';
     const bikeInfo = { name: 'Canyon', model:'Road', color:'grey' }
     return (
          <>
          <h2>Which Brands I have in my Garage?</h2>
          <Bike3 brand={ bikeInfo } />
          </>
     )
}

export default Garage;