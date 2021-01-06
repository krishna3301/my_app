import React from "react";
import "../Display/dialog.css";

function Dialog(props) {
  return (
    <div className="modal">
      <div className="modal-content">{props.children}</div>
    </div>
  );
}
export default Dialog;

/* class Dialog extends React.Component{
  render(){
    if(this.props.open)
    return(
    
    <div className="modal" >
     <div className="modal-content">
        {this.props.children}
    </div> 
  </div>
    );
    
  }

}
export default Dialog; */
