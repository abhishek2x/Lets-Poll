import { createMuiTheme, Fab, Paper, ThemeProvider } from '@material-ui/core';
import Homepage from './components/Homepage'
import "./App.css";

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Raleway, Arial',
    },
    palette: {
      primary: {
        light: '#f5f4ff',
        main: '#f5f4ff',
        dark: '#f5f4ff'
      },
      secondary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#ffffff'
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
