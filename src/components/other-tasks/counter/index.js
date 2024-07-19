import React, { Component } from "react";

// Define the Counter class component, which extends React.Component
class Counter extends Component {
  // Initialize the state in the constructor
  constructor(props) {
    super(props);
    // State contains a single property: count, initialized to 0
    this.state = {
      count: 0,
    };
  }

  // Method to handle the button click event and increment the counter
  handleIncrement = () => {
    // Use setState to update the state
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Render method to display the component
  render() {
    return (
      <div>
        {/* Display the current count */}
        <h1>Counter: {this.state.count}</h1>
        {/* Button to increment the count */}
        <button
          className="border-[1px] border-black p-2 rounded-[5px] mt-3"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }
}

// Export the Counter component as the default export
export default Counter;
