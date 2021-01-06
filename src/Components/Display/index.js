import React, { useState } from "react";
import "../Registration/regis.css";
import "../Table/table.css";
import Button from "@material-ui/core/Button";
//import Dialog from '@material-ui/core/Dialog';
//import { createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "./Dialog";
import DialogContent from "./DialogContent";
import DialogTitle from "./DialogTitle";
import DialogActions from "./DialogActions";
import { connect, useSelector } from "react-redux";
//import { showDetails } from '../Redux/actions/registration.action';
import EditTable from "../Table";

/* const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 10,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  }); */

function Display(props) {
  const [display, setDisplay] = useState(false);
  const [displayList, setDisplayList] = useState(false);
  const user = useSelector((state) => state.userDetails);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setDisplay(true);
  };

  const handleClickList = () => {
    setDisplayList(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Show Details
      </Button>
      {display && (
        <Dialog open={display} fullScreen={fullScreen} className="dialog">
          <DialogTitle handleClose={handleClose}>{"User Details"}</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              {user.map((data) => (
                <Typography gutterBottom component="p">
                  Name: {data.fname} {data.lname} &nbsp; Email: {data.email}{" "}
                  &nbsp;
                  <br />
                  Mobile Number: {data.mnumber} <br />
                  Address: {data.addr}
                </Typography>
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => setDisplay(!display)}
              color="primary"
              className="okButton"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
      &nbsp;&nbsp;
      <Button variant="outlined" color="primary" onClick={handleClickList}>
        Show UserList
      </Button>
      {displayList && (
        <div>
          <EditTable />

          <button
            className="button button1"
            onClick={() => setDisplayList(!displayList)}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

/* const mapStateToProps = (state) => {
  return { user: state?.userDetails }
} */

export default connect()(withRouter(Display));
