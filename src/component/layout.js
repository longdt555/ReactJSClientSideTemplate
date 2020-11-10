import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const ComponentLayout2Column = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{props.label}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{props.node}</Paper>
        </Grid>
      </Grid>
    </>
  );
};


export const RootLayout = () => {
  return (
    <></>
  )
}