import React, { useState } from "react";
import { Input } from "../input/input";
import { Button } from "../button/button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    displayName: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = state;
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, {
        displayName,
      });
      setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("error", err.message);
    }
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <h2>I don't have an account</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="display-id"
          name="displayName"
          value={state.displayName}
          handlechange={handleChange}
          label="Display Name"
          required
        />
        <br />
        <Input
          type="email"
          id="email-id1"
          name="email"
          value={state.email}
          handlechange={handleChange}
          label="Email"
          required
        />
        <br />
        <Input
          type="password"
          id="password-id1"
          name="password"
          value={state.password}
          handlechange={handleChange}
          label="Password"
          required
        />
        <Input
          type="password"
          id="confirm-id"
          name="confirmPassword"
          value={state.confirmPassword}
          handlechange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
