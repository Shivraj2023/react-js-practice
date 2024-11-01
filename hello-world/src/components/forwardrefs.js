import React, { forwardRef, useRef, useImperativeHandle } from 'react';

// Custom Button component with forwardRef
const CustomButton = forwardRef((props, ref) => {
  const localRef = useRef();

  // Expose the click method to the parent component
  useImperativeHandle(ref, () => ({
    click: () => {
        console.log("CustomButton: Custom click triggered");
      if (localRef.current) {
        localRef.current.click();
      }
    }
  }), []); // Adding an empty dependency array for stability

  return (
    <button ref={localRef} {...props}
    onClick={() => console.log("CustomButton: Actual button click")}>
      Custom Button
    </button>
  );
});

const ParentComponent = () => {
  const buttonRef = useRef();

  const handleClick = () => {
    if (buttonRef.current) {
        console.log("ParentComponent: Triggering custom click");
      buttonRef.current.click();
    }
  };

  return (
    <div>
      <CustomButton ref={buttonRef} />
      <button onClick={handleClick}>Trigger Custom Button Click</button>
    </div>
  );
};

export default ParentComponent;
