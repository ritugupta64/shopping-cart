import React, { useState } from "react";
import { Input } from "../input/input";
import { Button } from "../button/button";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {
      email, password
    } = state

    try{
      await auth.signInWithEmailAndPassword(email, password);
      setState({
        email:'',
        password:''
      })
      // console.log(email, password)
    }
    catch(err){
      console.log('error', err.message)
    }
   
  }

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email-id"
          name="email"
          value={state.email}
          handlechange={handleChange}
          label="Email"
          required
        />
        <br />
        <Input
          type="password"
          id="password-id"
          name="password"
          value={state.password}
          handlechange={handleChange}
          label="Password"
          required
        />
        <Button type="submit">Sign in</Button>
        <button type="button" onClick={signInWithGoogle}>Sign in with Google</button>
       
      </form>
     
    </div>
  );
};
