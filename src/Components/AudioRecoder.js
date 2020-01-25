import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  lyricsContainer: {
    width: "100%",
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
  },
  submitButton: {
    marginTop: "2em"
  }
});

const FileInput = ({ onChange, ...props }) => {
  const inputProps = {
    accept: "audio/*"
  };
  return (
    <TextField
      {...props}
      onChange={onChange}
      type="file"
      inputProps={inputProps}
    />
  );
};

const AudioRecoder = ({ onSubmit }) => {
  const [humming, setHumming] = useState(null);
  const classes = useStyles();

  const handleChange = event => {
    const file = event.target.files[0];
    setHumming(file);
  };

  const handleSubmit = () => {
    if (!!humming) {
      onSubmit(humming);
    }
  };

  return (
    <Card className={classes.lyricsContainer}>
      <FileInput onChange={handleChange} />
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
