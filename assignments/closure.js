// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const steps = () => {
  let step = 0;
  return () => {
    return ++step + ' I am running';
  }
}

const run = steps();

console.log(run());
console.log(run());
console.log(run());





/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    return ++count;
  }
};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());





// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
// };
const counterFactory = () => {
  let count = 0;
  function changeBy(x) {
    count += x;
  }
  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
    value: () => {
      return count;
    }
  }
};

let counter1 = counterFactory();
let counter2 = counterFactory();
console.log(counter1.value());
// console.log(counter2.value());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.decrement());
// alert(counter1.increment());
// alert(counter1.increment());
// alert(counter1.increment());
// alert(counter1.increment());
// alert(counter1.decrement());

// alert(counter2.increment());
// alert(counter2.increment());
// alert(counter2.increment());
// alert(counter2.increment());
// alert(counter2.decrement());