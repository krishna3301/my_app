import React from "react";
import "../Display/dialog.css";

function DialogActions(props) {
  return <div className="model-action">{props.children}</div>;
}
export default DialogActions;

/* class DialogActions extends React.Component{
  render(){
    return(
      <div className="model-action">
      {this.props.children}
      </div>
    );
  }
}
export default DialogActions; */
