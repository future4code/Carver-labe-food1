import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e86e5a',
    },
    secondary: {
      main: '#fefefe',
      contrastText: '#8e8e93',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});