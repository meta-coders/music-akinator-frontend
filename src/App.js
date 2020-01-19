import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  container: {
    height: "100vh"
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      aaaa
    </Container>
  );
}

export default App;
