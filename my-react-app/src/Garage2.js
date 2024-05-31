function Garage2(props) {
     const bikes = props.bikes;
     return ( 
          <>
          <h2>My Garage</h2>
          {
               bikes.length > 0 &&
               <h2>
                    I have {bikes.length} bikes in my garage.
               </h2>
          }
          </>
     )
}
export default Garage2;