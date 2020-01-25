import React from "react";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  winContainer: {
    width: "100%",
    padding: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const LostCard = () => {
  const classes = useStyles();
  return <Card className={classes.winContainer}>Akinator Lost</Card>;
};

export default LostCard;
