import React, {useState} from 'react';
import {Container, Paper, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';

import TabPanel from './Components/TabPanel';
import DeezerPlayer from "./Components/DeezerPlayer";
import LyricsCard from './Components/LyricsCard';

const searchOptions = [
  {value: 'lyrics', label: 'Lyrics'},
  {value: 'humming', label: 'Humming'}
];

const useStyles = makeStyles({
  container: {
    height: "100vh"
  },
  tabPanel: {
    padding: 0,
  }
});

function App() {
  const classes = useStyles();
  const [searchMethod, setSearchMethod] = useState('lyrics');
  const [deezerId, setDeezerId] = useState(undefined);
  const handleLyricsSend = async(value) => {
    const response = await fetch(
      `http://localhost:3001/recognizeByLyrics?query=${encodeURIComponent(value)}`,
      {crossDomain:true},
      );
    const {deezerId} = await response.json();
    if (deezerId) setDeezerId(deezerId);
  };
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
          {searchOptions.map((option => (
          <Tab value={option.value} label={option.label} />
          )))}
        </Tabs>
      </Paper>
      <TabPanel value='lyrics' className={classes.tabPanel} currentValue={searchMethod}>
        <LyricsCard onSubmit={handleLyricsSend}/>
      </TabPanel>
      <TabPanel value='humming' currentValue={searchMethod}>
        Item Two
      </TabPanel>
      {deezerId && <DeezerPlayer deezerId={deezerId}/>}
    </Container>
  );
}

export default App;
