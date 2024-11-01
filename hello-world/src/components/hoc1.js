import React from 'react';

// Child component A
const ChildComponentA = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1); // Increment the shared count
  };

  return (
    <div>
      <h2>Child Component A</h2>
      <button onClick={increment}>Increment Count A</button>
      <p>Current Count in A: {count}</p>
    </div>
  );
};

export default ChildComponentA;
