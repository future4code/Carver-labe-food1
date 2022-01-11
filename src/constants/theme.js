import { createTheme } from '@material-ui/core/styles';
export const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto'
    ]
  },
  palette: {
    primary: {
      main: '#E86E5A',
      contrastText: '#000'
    },
    secondary: {
      main: '#FEFEFE',
      contrastText: '#000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});