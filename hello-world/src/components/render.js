/* import React, { useState, useEffect } from 'react';

// MouseTracker component using render props
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
         return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }; 
    }, []);

    return render(position); // Call render prop with current mouse position
};
  export default MouseTracker;   */


  import React, { useState } from 'react';

const Form = ({ render }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return render({ inputValue, handleChange }); // Call render prop with input value and change handler
};
export default Form;
