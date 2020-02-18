import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Theme } from '../../app.theme';
import { fontFaces } from '../fonts/app.fonts';

type ThemeStyledProviderProps = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle`  
 ${fontFaces}
  :root{
    font-size: ${({ theme: { typography } }): string => `${typography.fontSize}`};
  }
  body{
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: ${({ theme: { typography } }): string => typography.fontFamily};
    color: ${({ theme: { palette } }): string => palette.text};
    background-color: ${({ theme: { palette } }): string => palette.background};
  transition[1]};
  }
`;

export const ThemeStyledProvider: React.FC<ThemeStyledProviderProps> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
