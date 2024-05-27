import React from 'react';
import ReactDOM from 'react-dom/client';

const myfirstElement = <h1>JS React!</h1>

/* Classes ES6
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name); //we cal the parent's constructor method and get access to the parent's properties and methods.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("BMW", "i7E");
document.write(mycar.show());

*/
/*Arrow function ES6
hello = () => {
  return 'Hello Reacts!';
}

hello = (val) => 'Hallo ' + val;  OR  hello = val => 'Hallo ' + val;



*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myfirstElement);


