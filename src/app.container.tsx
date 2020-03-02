import * as React from 'react';

import { ThemeStyledProvider } from './providers';
import { defaultTheme } from './app.theme';
import { App } from './components/App';
import { ErrorBoundary } from './components/common/ErrorBoundary';



type AppProps = {};

export const AppContainer: React.FC<AppProps> = () => {
  const theme = defaultTheme;

  return (
    <ThemeStyledProvider theme={theme}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeStyledProvider>
  );
};
