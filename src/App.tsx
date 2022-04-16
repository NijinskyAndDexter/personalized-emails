import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import EmailBuilderDemo from './Components/EmailBuilderDemo/EmailBuilderDemo';
import Overview from './Components/Overview/Overview';
import BackgroundRemover from './Components/BackgroundRemover/BackgroundRemover';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/">
                      <Overview/>
                      <BackgroundRemover/>
                  </Route>
                  <Route exact path="/email-builder-demo">
                      <EmailBuilderDemo/>
                  </Route>   
              </Switch>
          </BrowserRouter>
      </ThemeProvider>
  </>
  );
}


const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code"',
    button: {
      textTransform: 'none'
    }
  },
  palette: {
      primary: {
          main: '#D81e5b', // pink
          dark: '#A21645',
      }, 
      secondary: {
          light: '#E0CA3C',
          main: '#1D1710',
      }
  },
  components: {
      MuiTooltip: {
          styleOverrides: {
              tooltip: {
                  color: '#1D1710',
                  backgroundColor: '#D81e5b',
                  fontSize: '1rem',
              }
          },
      },
  }
});

export default App;
