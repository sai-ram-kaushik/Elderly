import React, { useContext, useState } from "react";
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

export function LoginForm({handleChange}) {
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:5100/user/login', {
            method:"POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              email,
              password,
            }),
        })
        const data = res.json();
        if (res.status === 200 || !data){
            window.alert("Login Successfull")
        }
        else{
            window.alert("Invalid Credentials")
        }
    }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={() => handleChange('event', 1)}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
