import * as React from 'react';
import * as firebase from 'firebase';

import { Container } from "@components";

export const Landing = () => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser && setUser(authUser);
    });
  }, []);

  return (
    <Container>
      <h2>Landing Page</h2>
      {user && <p>Email : {user.email}</p>}
    </Container>
  );
};
