import React, { useState } from "react";
import { createUserInFirebase } from "../utils/utils";

const AddToFirebase = () => {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event, newUser) => {
    event.preventDefault();
//     console.log(user, 'user')
    createUserInFirebase(user)
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: 200,
        border: "3px solid",
        borderRadius: "5px",
      }}
    >
      <form onClick={handleSubmit}>
        <input onChange={handleChange} placeholder="name" />
        <button type="submit">Create Your Account</button>
      </form>
    </div>
  );
};

export default AddToFirebase;
