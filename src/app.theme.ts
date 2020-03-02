export const defaultTheme = {
  typography: {
    fontFamily: `"'Nexa', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    primary: '#6772E5',
    secondary: '#000000',
    text: '#525F7F',
    navigationBackground: '#EDEFF8',
    background: '#f4f9fc',
    buttons: {
      success: '#2196F3',
      warning: '',
      disabled: 'grey'
    }
  },
  spacing: (factor: number): number => factor * 8,
  transition: ['0.2s ease-out', '0.5s ease-out'],
  breakpoints: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },
};

export type Theme = typeof defaultTheme;
