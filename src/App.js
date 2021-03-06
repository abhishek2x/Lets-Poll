import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Homepage from './Pages/Homepage'
import "./App.css";
import { UserContextProvider } from "./context/userContext"
import { Switch as RouterSwitch, BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './Pages/Profile';
import { database } from './firebase-config';
import { useEffect, useState } from 'react';
import { UidContextProvider } from './context/uidContext';

function App() {
  const [pollData, setPollData] = useState([])

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
  }, [pollData]);

  useEffect(() => {
    database.collection('polls').orderBy('created_at', 'desc')
      .onSnapshot((snap) => {
        const fetchedPolls = [];
        snap.forEach(document => {
          const fetchedPoll = {
            id: document.id,
            ...document.data()
          };
          fetchedPolls.push(fetchedPoll);
        });
        setPollData(fetchedPolls);
      })
    console.log("Wasting time in App.js")
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <UidContextProvider>
          <Router>
            <RouterSwitch>
              <Route exact path="/profile/:uid">
                <Profile pollData={pollData} />
              </Route>
              <Route path="/">
                <Homepage pollData={pollData} />
              </Route>
            </RouterSwitch>
          </Router>
        </UidContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
