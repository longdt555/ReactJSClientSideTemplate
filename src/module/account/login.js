import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { ComponentLayout2Column } from "../../component/layout";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default () => {
  const classes = useStyles();

  const [name, setName] = useState("dungpv");

  const onClickHandle = () => {
    setName("longdt");
  };

  return (
    <>
      <ComponentLayout2Column
        label={"username"}
        node={
          <>
            <TextField id="standard-basic" label="Standard" value={name} />
            <Button variant="contained" color="primary" onClick={onClickHandle}>
              Primary
            </Button>
          </>
        }
      />
    </>
  );
};

export { }