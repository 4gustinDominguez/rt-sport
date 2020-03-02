import * as React from 'react';
import * as auth from '../firebase/auth';

export const SignOutButton = () => (
  <button type="button" onClick={auth.doSignOut}>
    Sign Out
  </button>
);
