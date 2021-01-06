import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateDetails } from "../Redux/actions/registration.action";
import "./table.css";

function RowItem(props) {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [mnumber, setMnumber] = useState();
  const [addr, setAddr] = useState();
  const [psw, setPsw] = useState();
  const [edit, setEdit] = useState(false);
  const { user } = props;

  useEffect(() => {
    setFname(user.fname);
    setLname(user.lname);
    setEmail(user.email);
    setMnumber(user.mnumber);
    setAddr(user.addr);
    setPsw(user.psw);
  }, [user]);

  const handleEdit = () => {
    setEdit(true);
  };
  const handleSave = () => {
    let userList = {
      fname: fname,
      lname: lname,
      email: email,
      mnumber: mnumber,
      addr: addr,
      psw: psw,
    };
    setEdit(false);
    props.dispatch(updateDetails(userList));
  };

  return (
    <tr>
      <td>
        {edit ? (
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        ) : (
          <span>{fname}</span>
        )}
      </td>
      <td>
        {edit ? (
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        ) : (
          <span>{lname}</span>
        )}
      </td>
      <td>
        {" "}
        <span>{props.user.email}</span>
      </td>
      <td>
        {edit ? (
          <input
            type="text"
            value={mnumber}
            onChange={(e) => setMnumber(e.target.value)}
          />
        ) : (
          <span>{mnumber}</span>
        )}
      </td>
      <td>
        {edit ? (
          <input
            type="text"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
          />
        ) : (
          <span>{addr}</span>
        )}
      </td>
      <td>
        {edit ? (
          <input
            type="text"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          />
        ) : (
          <span>{psw}</span>
        )}
      </td>
      <td>
        {edit ? (
          <button className="button button1" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="button button1" onClick={handleEdit}>
            {" "}
            Edit{" "}
          </button>
        )}
      </td>
    </tr>
  );
}

export default connect()(RowItem);

/* 
class RowItem extends React.Component {
    constructor(props) {
  super(props);
  this.state = {
                  fname: this.props.user.fname,
                  lname: this.props.user.lname,
                  email: this.props.user.email,
                  mnumber: this.props.user.mnumber,
                  addr: this.props.user.addr,
                  psw: this.props.user.psw,
                  edit: false
                };

  this.handleFname = this.handleFname.bind(this);
  this.handleLname = this.handleLname.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  this.handleMnumber = this.handleMnumber.bind(this);
  this.handleAddr = this.handleAddr.bind(this);
  this.handlePsw = this.handlePsw.bind(this); 
  this.handleEdit = this.handleEdit.bind(this);
  this.handleSave = this.handleSave.bind(this);
  }

handleSave = (event) => {

const userList = {
                  fname: this.state.fname,
                  lname: this.state.lname,
                   email: this.state.email,
                   mnumber: this.state.mnumber,
                   addr: this.state.addr,
                   psw: this.state.psw
                } 
  this.setState({edit: false})              
  this.props.dispatch(updateDetails(userList));
 
}
  handleEdit(event)
  {
     this.setState({edit: true})
  }
  handleFname(event){
    this.setState({fname: event.target.value})
  }
handleLname(event){
  this.setState({lname: event.target.value});
}
handleEmail(event){
  this.setState({email: event.target.value});
}
handleMnumber(event){
  this.setState({mnumber: event.target.value});
}
handleAddr(event){
  this.setState({addr: event.target.value});
}
handlePsw(event){
  this.setState({psw: event.target.value});
}

  render(){

    return(
        <tr>
          <td>{this.state.edit? <input type="text" value={this.state.fname} onChange={this.handleFname} /> : <span>{this.props.user.fname}</span>}</td>
          <td>{this.state.edit? <input type="text" value={this.state.lname} onChange={this.handleLname} /> : <span>{this.props.user.lname}</span>}</td>                
          <td> <span>{this.props.user.email}</span></td>
          <td>{this.state.edit? <input type="text" value={this.state.mnumber} onChange={this.handleMnumber} /> : <span>{this.props.user.mnumber}</span>}</td>
          <td>{this.state.edit? <input type="text" value={this.state.addr} onChange={this.handleAddr} /> : <span>{this.props.user.addr}</span>}</td>
          <td>{this.state.edit? <input type="text" value={this.state.psw} onChange={this.handlePsw} /> : <span>{this.props.user.psw}</span>}</td>  
          <td>{this.state.edit? <button className="button button1" onClick={this.handleSave}>Save</button> : <button className="button button1" onClick={this.handleEdit}> Edit </button>}</td>
          
        </tr>  

    );
  }

}
export default connect()(RowItem);
 */
