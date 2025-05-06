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

function Info() {
  const [details, setDetails] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((active) => active.json())
      .then((info) => setDetails(info));
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div>
      {details.slice(0, visibleCount).map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      ))}

      {visibleCount < details.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}

export default Info;

// export default counter;