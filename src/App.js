import React, { useState } from "react";
import { Container, Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

import TabPanel from "./Components/TabPanel";
import DeezerPlayer from "./Components/DeezerPlayer";
import LyricsCard from "./Components/LyricsCard";
import WinCard from "./Components/WinCard";
import LostCard from "./Components/LostCard";
import AudioRecoder from "./Components/AudioRecoder";
import SpinnerCard from "./Components/SpinnerCard";

const searchOptions = [
  { value: "lyrics", label: "Lyrics" },
  { value: "humming", label: "Humming" }
];

const useStyles = makeStyles({
  container: {
    height: "100vh"
  },
  tabPanel: {
    padding: 0
  }
});

function App() {
  const classes = useStyles();
  const [searchMethod, setSearchMethod] = useState("lyrics");
  const [deezerId, setDeezerId] = useState(undefined);
  const [step, setStep] = useState(0);
  const [pending, setPending] = useState(false);

  const handleLyricsSend = async value => {
    setPending(true);
    const response = await fetch(
      `${
        process.env.REACT_APP_BACKEND_URL
      }/recognizeByLyrics?query=${encodeURIComponent(value)}`,
      { crossDomain: true }
    ).catch(e => console.log(e));
    const { deezerId } = await response.json();
    if (deezerId) {
      setPending(false);
      setDeezerId(deezerId);
    }
  };

  const handleHummingSend = async humming => {
    setPending(true);
    const formData = new FormData();
    formData.append("file", humming);

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/recognizeByHumming`,
      {
        method: "POST",
        body: formData
      }
    ).catch(e => console.error(e));

    if (response.status === 200) {
      const { deezerId } = await response.json();
      if (deezerId) {
        setPending(false);
        setDeezerId(deezerId);
      }
    }
  };

  const handleWin = () => {
    setStep("win");
  };

  const handleMismatch = () => {
    console.log("mismatch");
    const result = step + 1 > 5 ? "lost" : step + 1;
    setStep(result);
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
          {searchOptions.map(option => (
            <Tab key={option.value} value={option.value} label={option.label} />
          ))}
        </Tabs>
      </Paper>
      <TabPanel
        value="lyrics"
        className={classes.tabPanel}
        currentValue={searchMethod}
      >
        <LyricsCard onSubmit={handleLyricsSend} />
      </TabPanel>
      <TabPanel
        value="humming"
        className={classes.tabPanel}
        currentValue={searchMethod}
      >
        <AudioRecoder onSubmit={handleHummingSend} />
      </TabPanel>
      <SpinnerCard loading={pending} />
      {deezerId && !pending && step !== "win" && step !== "lost" && (
        <DeezerPlayer
          deezerId={deezerId}
          onWin={handleWin}
          onMismatch={handleMismatch}
        />
      )}
      {step === "win" && <WinCard />}
      {step === "lost" && <LostCard />}
    </Container>
  );
}

export default App;
