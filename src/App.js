import React, {useState} from 'react';
import {Container, Paper, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';

import TabPanel from './Components/TabPanel';
import DeezerPlayer from "./Components/DeezerPlayer";

const useStyles = makeStyles({
  container: {
    height: "100vh"
  },
});

function App() {
  const classes = useStyles();
  const [searchMethod, setSearchMethod] = useState('lyrics');
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper square>
        <Tabs
          value={searchMethod}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => setSearchMethod(newValue)}
          variant="fullWidth"
        >
          <Tab value='lyrics' label="Lyrics" />
          <Tab value='humming' label="Humming" />
          <Tab value="not-sure" label="Not sure" />
        </Tabs>
      </Paper>
      <TabPanel value='lyrics' currentValue={searchMethod}>
        Item One
      </TabPanel>
      <TabPanel value='humming' currentValue={searchMethod}>
        Item Two
      </TabPanel>
      <TabPanel value='not-sure' currentValue={searchMethod}>
        Item Three
      </TabPanel>
      <DeezerPlayer/>
    </Container>
  );
}

export default App;
