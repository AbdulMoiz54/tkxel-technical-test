import React, { useState } from "react";

// Define the Counter functional component
const CounterUsingFunctionalComponent = () => {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to handle the button click event and increment the counter
  const handleIncrement = () => {
    // Update the state using setCount, incrementing count by 1
    setCount(count + 1);
  };

  // Return the JSX to render the component
  return (
    <div>
      {/* Display the current count */}
      <h1>Counter: {count}</h1>
      {/* Button to increment the count */}
      <button
        className="border-[1px] border-black p-2 rounded-[5px] mt-3"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
};

// Export the CounterFunctional component as the default export
export default CounterUsingFunctionalComponent;
