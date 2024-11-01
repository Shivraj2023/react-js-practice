import React from 'react';

// Child component B
const ChildComponentB = ({ count, setCount }) => {
  const decrement = () => {
    setCount(count - 1); // Decrement the shared count
  };

  return (
    <div>
      <h2>Child Component B</h2>
      <button onClick={decrement}>Decrement Count B</button>
      <p>Current Count in B: {count}</p>
    </div>
  );
};

export default ChildComponentB;
