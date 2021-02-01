import React from "react";
import { withStyles, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const MyCustom = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    // <div className={classes.root} noValidate>
      <MyCustom
        // className={classes.margin}
        label="Oi"
        variant="outlined"
        id="myId"
      />
    // </div>
  );
}