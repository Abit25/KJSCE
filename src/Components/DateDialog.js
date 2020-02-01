import "date-fns";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function DateDialog({ text, heading, label, mychange }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [exp, setExp] = React.useState(0);
  const [pos, setPos] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleChange2 = event => {
    setExp(event.target.value);
  };

  const handleChange3 = event => {
    setPos(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    mychange({ pos, exp, value });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
          <TextField
            id="standard-basic"
            label={label}
            onChange={handleChange3}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Add a description"
            multiline
            rowsMax="4"
            value={value}
            style={{ width: "80%" }}
            onChange={handleChange}
          />

          <InputLabel
            id="demo-simple-select-label"
            style={{ marginTop: "20px" }}
          >
            Experience
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={exp}
            onChange={handleChange2}
            defaultValue={0}
          >
            <MenuItem value={"0"}>0</MenuItem>
            <MenuItem value={"1 - 3"}>1-3</MenuItem>
            <MenuItem value={"3 - 7"}>3-7</MenuItem>
            <MenuItem value={"8 - 15"}>8-15</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose2} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
