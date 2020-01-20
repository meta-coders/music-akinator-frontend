import React from 'react';
import {Card, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

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

const DeezerPlayer = ({iframe}) => {
  const classes = useStyles();

  const iframeItem = () => {
    return {
      __html: iframe
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
  iframe: '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=true&width=300&height=300&color=ff0000&layout=dark&size=medium&type=tracks&id=85963521&app_id=1" width="300" height="300"></iframe>'
};

export default DeezerPlayer;