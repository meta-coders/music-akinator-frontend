import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, makeStyles } from "@material-ui/core";
import { PlayArrow, Stop } from "@material-ui/icons";
import { ReactMic } from "react-mic";

const useStyles = makeStyles({
  lyricsContainer: {
    width: "100%",
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  audio: {
    width: "100%"
  },
  submitButton: {
    marginTop: "1em"
  }
});

const AudioRecoder = ({ onSubmit }) => {
  const [humming, setHumming] = useState(null);
  const [isRecording, setRecording] = useState(false);
  const classes = useStyles();

  const handleStartRecoding = () => {
    setRecording(true);
  };

  const handleStopRecording = () => {
    setRecording(false);
  };

  const handleStop = blob => {
    setHumming(blob);
  };

  const handleSubmit = () => {
    if (!!humming) {
      onSubmit(humming.blob);
    }
  };

  return (
    <Card className={classes.lyricsContainer}>
      <audio
        className={classes.audio}
        controls
        src={humming ? humming.blobURL : humming}
      />
      <ReactMic
        strokeColor="#19857b"
        onStop={handleStop}
        record={isRecording}
      />
      <div className={classes.controls}>
        <Button
          disabled={isRecording}
          onClick={handleStartRecoding}
          startIcon={<PlayArrow />}
        >
          Start
        </Button>
        <Button
          disabled={!isRecording}
          onClick={handleStopRecording}
          startIcon={<Stop />}
        >
          Stop
        </Button>
      </div>
      <Button
        className={classes.submitButton}
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        Send
      </Button>
    </Card>
  );
};

AudioRecoder.propTypes = {
  onSubmit: PropTypes.func
};

export default AudioRecoder;
