import React from 'react';

class Child extends React.Component {
     componentWillUnmount() {
          alert("The component named Header is about to be unmounted!!!");
     }
     render(){
          return (
               <h2>This is my Car!</h2>
          )
     }
}

export default Child;