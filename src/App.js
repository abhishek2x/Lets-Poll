import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Homepage from './components/Homepage'
import "./App.css";
import { UserContextProvider } from "./context/userContext"

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
        light: 'rgba(0, 0, 0, 0.54)',
        main: 'rgba(0, 0, 0, 0.54)',
        dark: 'rgba(0, 0, 0, 0.54)'
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Homepage />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
