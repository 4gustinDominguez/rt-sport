import * as React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as routes from '../constants/routes';
import * as firebase from 'firebase';
import { withAuthentication } from '../firebase/withAuthentication';
import { Account } from '../pages/Account';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import { PasswordForget } from '../pages/PasswordForget';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ListTournament } from '../pages/Tournament';
import { Navigation } from './Navigation';

import { Footer, Main } from "@components";

const AppComponent = (props: any) => {
  const [authUser, setAuthUser] = React.useState(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser ? setAuthUser(() => ({ authUser })) : setAuthUser(() => ({ authUser: null }));
    });
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Main className="main">
        <Switch>
          <Route exact={true} path={routes.LANDING} component={Landing} />
          <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
          <Route exact={true} path={routes.SIGN_IN} component={SignIn} />
          <Route exact={true} path={routes.PASSWORD_FORGET} component={PasswordForget} />
          <Route exact={true} path={routes.HOME} component={Home} />
          <Route exact={true} path={routes.TOURNAMENT_LIST} component={ListTournament} />
          <Route exact={true} path={routes.ACCOUNT} component={Account} />
        </Switch>
      </Main>
      <Footer>Footer</Footer>

    </BrowserRouter>
  );
};

export const App = withAuthentication(AppComponent);
