import Bike3 from './Bike3.js';
import styles from './my-style.module.css';

function Garage() {
     //const bikeName = 'Canyon';
     const bikeInfo = {
          name: 'Canyon',
          model:'Road',
          color:'grey'
     }
     return (
          <>
          <h2 className={styles.bigblue}>Which Brands I have in my Garage?</h2>
          <Bike3  brand={ bikeInfo } />
          </>
     )
}

export default Garage;