import React, { useState } from 'react';
import ChildComponentA from './hoc1';
import ChildComponentB from './hoc2';

// Parent component managing shared count state
const ParentComponent = () => {
  const [count, setCount] = useState(0); // Manage count state here

  return (
    <div>
      <h1>Shared Count Example</h1>
      <ChildComponentA count={count} setCount={setCount} />
      <ChildComponentB count={count} setCount={setCount} />
    </div>
  );
};

export default ParentComponent;
