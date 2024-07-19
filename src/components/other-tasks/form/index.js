import React, { useState } from "react";

// Function component for the form
export default function Form() {
  // useState hook to manage form data state
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Destructuring email and password from the data state
  const { email, password } = data;

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert("Email: " + email);
    alert("Password: " + password);
  };

  // Function to handle changes in form inputs
  const handleData = (key, e) => {
    const { value } = e.target; // Extracting the value from the event target
    // Updating the state with the new value
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Returning the form component
  return (
    <form
      className="flex flex-wrap items-center gap-[10px]"
      onSubmit={onSubmit}
    >
      <input
        className="border-[1px] border-black p-2 rounded-[5px] mt-3"
        onChange={(e) => handleData("email", e)} // Handling email input change
        type="email"
        placeholder="Enter Email"
        value={email} // Setting the value of email input
      />
      <input
        className="border-[1px] border-black p-2 rounded-[5px] mt-3"
        onChange={(e) => handleData("password", e)} // Handling password input change
        type="password"
        placeholder="Enter Password"
        value={password} // Setting the value of password input
      />
      <button
        className="border-[1px] border-black p-2 rounded-[5px] mt-3"
        type="submit"
      >
        Submit
      </button>{" "}
      {/* Submit button */}
    </form>
  );
}
