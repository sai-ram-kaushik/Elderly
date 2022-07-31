import React, { useContext, useState } from 'react'

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [user, setUser] = useState({
    name: "", email: "", country: "", city: "", password: "", conform_password: ""
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, confirm_password } = user;
    const res = await fetch("http://localhost:5100/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        email,
        password,
        name,
      }),
    })
    const data = await res.json();

    if (data.status === 201 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert("Registration Successfull");
      console.log("Successfull Registration");
    }
  }
  return (
    <BoxContainer>
      <FormContainer method='POST'>
        <Input type="text" name='name' placeholder="Full Name" value={user.name} onChange={handleInputs}/>
        <Input type="email" name='email' placeholder="Email" value={user.email} onChange={handleInputs}/>
        <Input type="password" name='password' placeholder="Password" value={user.password} onChange={handleInputs}/>
        <Input type="password" name='confirm_password' placeholder="Confirm Password" value={user.confirm_password} onChange={handleInputs} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={PostData}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
