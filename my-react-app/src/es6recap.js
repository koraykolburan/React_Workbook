//QUICK RECAP -- JS ES6 

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

(this)With an arrow function, this represents the Header object no matter who called the function:

*/

/* Variables ES6 --
let and const have a block scope.
const is a variable that once it has been created, its value can never change.
cosnt keyword does not define a constant value. It defines a constant reference to a value.
There are many JS Array methods. One of the most useful in React is the .map() array method.
It runs a function on EACH item in the array, returning a new arrayas the result.
the map() method can be used to generate lists.

*/

/* Destructuring ES6 --------------------------------------------------------------------------------------------
Destructuring is like: we may have an array or object that we are working with, but we only need SOME of the items contained in these.
Destructuring makes it easy to extract only what is needed.

-- This is oldway of assigning array items to a variable:
const vehicles = ['mustang', 'f-150', 'expedition'];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

-- Here is the new way of assigning array items to a variable:
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;

The order that variables are declared is Important! like this:
const [car,, suv] = vehicles;
And also, Destructuring comes in handy when a function returns an array.

Third item from the array below?
const vehicles = ['mustang', 'f-150', 'expedition'];

const [,,suv] = vehicles; // ANSWER is this.

Here is the old way of using an object inside a function:
myVehicle(vehicleOne);
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

Here is the new way of using an object inside a function:
myVehicle(vehicleOne);
function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

We can even destructure deeply nested objects like this:
const person = {
  name: 'Jesse',
  age: 30, 
  address: {        // here it is: deeply nested object - question
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

displayMessage(person)

function displayMessage({ 
address: { state } //here it is: deeply nested object - ANSWER is this.
 }) {
  const message = 'I live in ' + state + '.';
}
*/

/* Spread Operator ES6 -------------------------------------------------------------------------------------------
It allows us to quickly COPY all or part of an existing array or object into another array or object.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
document.write(numbersCombined);
The output is: 1,2,3,4,5,6
OR
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne, ...arrayTwo];

The SPREAD operator is often used in combination with DESTRUCTURING.
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
The output is: 1 
2
3,4,5,6

We can use the spread operator with objects too:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
The output is: {
  brand: 'Ford',
  color: 'yellow',
  type: 'car',
  year: 2021
}

*/

/* Modules ES6 -------------------------------------------------------------------------------------------
JS Modules allows us to BREAK UP our code into Separate Files.
This makes it eaiser to maintain the code-base.
ES Modules rely on the IMPORT and EXPORT Statements.

We can Export a Function or Variable from ANY FILE.
We have person.js file and, we want to Export.

EXPORT -- -- -- -- --

There are TWO TYPEs of exports: 1)Named and 2)Default:

1) Name: a)In-line individually, b) All At Once at the BOTTOM;
a) export const name = 'Jay'
   export const age = 50

b)const name = 'Jay'
  const age = 50

  export { name, age }

2) Default: (we have message.js file)
WE CAN ONLY ONE DEFAULT EXPORT IN A FILE!!!
const message = () => {
  const name = 'Jay'
  const age = 50
  return name + ' is ' + age + 'years old.'; 
};

export default message;


IMPORT -- -- -- -- -- --
We can import Modules into a FILE in TWO WAYS, based on if they are NAMEd exports or DEFAULT exports.
Named exports must be DESTRUCTURED using CURLY BRACES. DEFAULT exports DO NOT!.
1) IMPORT NAME:
import { name, age } from "/../person.js";

2)IMPORT a DEFAULT EXPORT from the file message.js:
import message from "/../message.js";
*/

/* Ternary Operators ES6 ----------------------------------------------------------------------------------------

The ternary operator is a simplified conditional operator like if/else.
Syntax: condiiton ? <expression if true> : <expression if false>

if(authenticated) {
  renderApp();
} else {
  renderLogin();
}

The SAME Example above With Ternary:
authenticated ? renderApp() : renderLogin();

*/
