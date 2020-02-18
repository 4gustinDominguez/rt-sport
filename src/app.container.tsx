import * as React from 'react';

import { ThemeStyledProvider } from './providers';
import { defaultTheme } from './app.theme';
import { App } from './components/App';

type AppProps = {};

export const AppContainer: React.FC<AppProps> = () => {
  const theme = defaultTheme;

  return (
    <ThemeStyledProvider theme={theme}>
      <App />
    </ThemeStyledProvider>
  );
};
