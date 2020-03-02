import * as React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import { AuthUserContext } from '../firebase/AuthUserContext';
import { SignOutButton } from './SignOutButton';
//import { Header, Navbar, NavbarItems } from '../components/common/Header';

import { Header, Navbar, NavbarItems } from "@components";

export const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <Header>
    <h2 className="logoHeader"><a href="#">Logo</a></h2>
    <Navbar className="nav">
      <NavbarItems className="navItem">
        <Link to={routes.LANDING}>Landing</Link>
      </NavbarItems>
      <NavbarItems className="navItem">
        <Link to={routes.HOME}>Home</Link>
      </NavbarItems>
      <NavbarItems className="navItem">
        <Link to={routes.ACCOUNT}>Account</Link>
      </NavbarItems>
      <NavbarItems className="navItem">
        <Link to={routes.TOURNAMENT_LIST}>Tournaments</Link>
      </NavbarItems>
      <NavbarItems className="navItem">
        <SignOutButton />
      </NavbarItems>
    </Navbar>
  </Header>
);

const NavigationNonAuth = () => (
  <Header>
    <h2 className="logoHeader"><a href="#">Logo</a></h2>
    <Navbar className="nav">
      <NavbarItems className="navItem">
        <Link to={routes.LANDING}>Landing</Link>
      </NavbarItems>
      <NavbarItems className="navItem">
        <Link to={routes.SIGN_IN}>Sign In</Link>
      </NavbarItems>
    </Navbar>
  </Header>
);
