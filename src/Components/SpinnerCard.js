import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { CircleLoader } from "react-spinners";

const useStyles = makeStyles({
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em"
  }
});

const SpinnerCard = ({ loading }) => {
  const classes = useStyles();
  return (
    <>
      {loading && (
        <Card className={classes.spinnerContainer}>
          <CircleLoader size={150} loading={loading} />
        </Card>
      )}
    </>
  );
};

export default SpinnerCard;
