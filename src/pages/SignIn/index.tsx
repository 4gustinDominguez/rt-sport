import * as React from "react";
import { withRouter } from "react-router-dom";
import { PasswordForgetLink } from "../PasswordForget";
import { SignUpLink } from "../SignUp";
import { SignInForm } from "./SignInForm";
import { Container } from "@components";

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <Container>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
    <PasswordForgetLink />
  </Container>
);

export const SignIn = withRouter(SignInComponent);
