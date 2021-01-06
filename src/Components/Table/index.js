import React from "react";
import { connect, useSelector } from "react-redux";
//import { withRouter } from "react-router-dom";
import "./table.css";
import RowItem from "./RowItem";

function EditTable(props) {
  const users = useSelector((state) => state.userList);
  return (
    <div className="">
      <br />
      <br />
      <table className="content-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data) => (
            <RowItem user={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
/* const mapStateToProps = (state) => {
  return { users: state?.userList }
    } */

export default connect()(EditTable);

/* 
class EditTable extends React.Component {
    
constructor(props) {
  super(props);

  this.handleClick = this.handleClick.bind(this);
  }

 handleClick(event){

    event.preventDefault();

  }
 
render(){
  return(
  
        <div className ="">
        <br/><br/>
            <table className="content-table" >
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                
                    {this.props.users.map((data) => (
                          <RowItem user={data} /> 
                    ))}

                </tbody>
            </table>
        </div>
  );
   
  }
}

  const mapStateToProps = (state) => {
  return { users: state?.userList }
    }

export default connect(mapStateToProps) (EditTable); */
