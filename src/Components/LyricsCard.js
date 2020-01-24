import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles({
  lyricsContainer: {
    width: '100%',
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  submitButton: {
    marginTop: '2em'
  }
});

const LyricsCard = ({onSubmit}) => {
  const [lyrics, setLyrics] = useState('');
  const classes = useStyles();
  return (
    <Card className={classes.lyricsContainer}>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        value={lyrics}
        onChange={e => setLyrics(e.target.value)}
        multiline
        rows="4"
        variant="outlined"
      />
      <Button className={classes.submitButton} variant="contained" color="secondary" onClick={() => onSubmit(lyrics)}>Send</Button>
    </Card>
  );
};

LyricsCard.propTypes = {
  onSubmit: PropTypes.string
};

export default LyricsCard;