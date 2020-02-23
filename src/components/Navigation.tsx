import * as React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import { AuthUserContext } from '../firebase/AuthUserContext';
import { SignOutButton } from './SignOutButton';
import styled from 'styled-components';

const Navbar = styled.div`
  background-color: #46acc2;
  display: flex;
  padding: 16px;
  font-family: sans-serif;
`;

const NavbarItems = styled.div`
  display: flex;
  padding-right: 8px;
`;

export const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <Navbar>
    <NavbarItems>
      <Link to={routes.LANDING}>Landing</Link>
    </NavbarItems>
    <NavbarItems>
      <Link to={routes.HOME}>Home</Link>
    </NavbarItems>
    <NavbarItems>
      <Link to={routes.ACCOUNT}>Account</Link>
    </NavbarItems>
    <NavbarItems>
      <SignOutButton />
    </NavbarItems>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar>
    <NavbarItems>
      <Link to={routes.LANDING}>Landing</Link>
    </NavbarItems>
    <NavbarItems>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </NavbarItems>
  </Navbar>
);
