
import React from 'react';
class Car extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
          vehicle:"car",
          brand:"BMW",
          color:"blue",
          model:"i20",
          year:2023,
          derived:'derived'
       };
     }
     shouldComponentUpdate() { //If this is going to be false, Component does not update!
          return true;
     }
     static getDerivedStateFromProps(props, state) {
          return {derived:props.derived}
     }
     componentDidMount() {
          setTimeout(() => {
               this.setState({year: <b>2024</b>})
          }, 3000)
     }
     changeColorVehicle = () => {
          this.setState({color: <b>red</b>});
          this.setState({vehicle:"E-Motor Bike"});
          this.setState({model:"EC 04"});
     }
     
     /* This is for unounting - deleting the header
     delHeader = () => {
          this.setState({show:false})
     }
     */

     render() {
       return (
          <div style={{border:'1px solid black', borderRadius:'12px', padding:'20px'}}>
               <h2>My {this.state.vehicle} is {this.state.brand}</h2>
               <p>
                    And its color is {this.state.color} , 
                    its model is {this.state.model}, 
                    from {this.state.year}.
                    This is for {this.state.derived}
               </p>
               <button
                    type='button'
                    onClick={this.changeColorVehicle}
               >
                    Change Color
               </button>
          </div>
       );
     }
   }

export default Car;