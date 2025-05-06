import { useEffect, useState } from "react";
import "./App.css";

// function counter() {
//   const [counter, setCounter] = useState(0);
//   const increment = () => {
//     if (counter < 10) {
//       setCounter(counter + 1);
//     }
//   };
//   const decrement = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };
//   return (
//     <>
//       <h1>counter: {counter}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//     </>
//   );
// }

function info() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((active) => active.json())
    .then((info)=>console.log(info, "info")
    )
  }, []);
}

// export default counter;
export default info;