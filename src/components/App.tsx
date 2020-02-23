import * as React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as routes from '../constants/routes';
import { firebase } from '../firebase';
import { withAuthentication } from '../firebase/withAuthentication';
import { Account } from '../pages/Account';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import { PasswordForget } from '../pages/PasswordForget';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Navigation } from './Navigation';

const Container = styled.div`
  background-color: #f5ca3c;
  display: -webkit-flex;
  display: flex;
  width: 960px;
  margin: 0 auto;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: flex-start;
  align-items: flex-start;
`;

const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
`;

const AppComponent = (props: any) => {
  const [authUser, setAuthUser] = React.useState(null);

  React.useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser ? setAuthUser(() => ({ authUser })) : setAuthUser(() => ({ authUser: null }));
    });
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Navigation />
        <hr />
        <Switch>
          <Route exact={true} path={routes.LANDING} component={Landing} />
          <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
          <Route exact={true} path={routes.SIGN_IN} component={SignIn} />
          <Route exact={true} path={routes.PASSWORD_FORGET} component={PasswordForget} />
          <Route exact={true} path={routes.HOME} component={Home} />
          <Route exact={true} path={routes.ACCOUNT} component={Account} />
        </Switch>

        <Footer>Footer</Footer>
      </Container>
    </BrowserRouter>
  );
};

export const App = withAuthentication(AppComponent);
