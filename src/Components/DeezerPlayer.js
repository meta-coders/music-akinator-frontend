import React from 'react';
import {Card, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import deezerIframe from "../utils/deezerIframe";

const useStyles = makeStyles({
  deezerPlayerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '2em',
  },
  deezerCard: {
    paddingBottom: '2em',
    paddingTop: '2em',
  }
});

const DeezerPlayer = ({iframe, deezerId}) => {
  const classes = useStyles();

  const iframeItem = () => {
    return {
      __html: iframe(deezerId)
    }
  };


  return (
    <Card className={classes.deezerCard}>
      <div
        className={classes.deezerPlayerContainer}
        dangerouslySetInnerHTML={iframeItem()}>
      </div>
      <div className={classes.buttonBlock}>
        <Button variant="contained" color="secondary">
          ВГАДАВ
        </Button>
        <Button variant="contained" color="error">
          ОПЯТЬ МЫМО
        </Button>
      </div>
    </Card>
  );
};

DeezerPlayer.defaultProps = {
  iframe: deezerIframe
};

export default DeezerPlayer;