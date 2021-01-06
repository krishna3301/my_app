import React from "react";
import "../Display/dialog.css";

function DialogContent(props) {
  return (
    <div dividers={props.dividers} className="modal-body">
      {props.children}
    </div>
  );
}
export default DialogContent;

/* class DialogContent extends React.Component{
  render(){
      return(
        <div dividers={this.props.dividers} className="modal-body">
          {this.props.children}
        </div>

      );
  }
}
export default DialogContent; */
