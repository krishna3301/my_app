import React from "react";
import "../Display/dialog.css";

function DialogTitle(props) {
  return (
    <div className="modal-header">
      {props.children}
      <span className="close" onClick={props.handleClose}>
        &times;{" "}
      </span>
    </div>
  );
}
export default DialogTitle;

/* class DialogTitle extends React.Component{
  render(){
      return(
        <div className="modal-header">
        
            {this.props.children} 
            <span className="close" onClick={this.props.handleClose}>&times; </span>
        </div>
      );
  }
} 
  export default DialogTitle;
 */
