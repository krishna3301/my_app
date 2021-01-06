import React, { useState } from "react";
import "./regis.css";
//import ReactDOM from 'react-dom';
import { withRouter, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import TextField from "../TextField";
import { addDetails } from "../Redux/actions/registration.action";
//import store from '../Redux/store';
import { connect, useDispatch } from "react-redux";

function Regis(props) {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [mnumber, setMnumber] = useState();
  const [addr, setAddr] = useState();
  const [psw, setPsw] = useState();
  const [fNameError, setFnameError] = useState(false);
  const [lNameError, setLnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pswError, setPswError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fname === "") {
      setFnameError(true);
      return;
    } else {
      setFnameError(false);
    }

    if (lname === "") {
      setLnameError(true);
      return;
    } else {
      setLnameError(false);
    }

    if (email === "") {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (psw === "") {
      setPswError(true);
      return;
    } else {
      setPswError(false);
    }

    if (
      fNameError === false &&
      lNameError === false &&
      emailError === false &&
      pswError === false
    ) {
      let userList = {
        fname: fname,
        lname: lname,
        email: email,
        mnumber: mnumber,
        addr: addr,
        psw: psw,
      };
      dispatch(addDetails(userList));
      history.push("/Login");
    }

    //    props.dispatch(addDetails(userList));
    //    props.history.push("/Login");
  };

  return (
    <div className={"paper"}>
      <Typography component="h1" variant="h5">
        Registration Form
      </Typography>
      <form className={"form"}>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              error={fNameError}
              helperText={fNameError ? "Empty field!" : " "}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              error={lNameError}
              helperText={lNameError ? "Empty field!" : " "}
            />
          </Grid>{" "}
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Empty field!" : " "}
            />
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Mobile Number"
              name="mnumber"
              value={mnumber}
              onChange={(e) => setMnumber(e.target.value)}
            />
          </Grid>{" "}
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="addr"
              label="Address"
              name="addr"
              type="text"
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
            />
          </Grid>{" "}
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              name="psw"
              label="Password"
              type="password"
              id="psw"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              error={pswError}
              helperText={pswError ? "Empty field!" : " "}
            />
          </Grid>
        </Grid>
        <br />
        <Grid>
          <Button
            type="submit"
            value="submit"
            fullWidth={false}
            style={{ width: "100%" }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Grid>
        <br /> <hr />
        <Typography component="p" variant="p">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              By creating an account you agree to our{" "}
              <Link to="/">Terms & Privacy</Link>.
            </Grid>
            <Grid item xs={12} sm={6}>
              Already have an account? <Link to="/Login">Sign in</Link>.
            </Grid>
          </Grid>
        </Typography>
      </form>
    </div>
  );
}

export default connect()(withRouter(Regis));

/* 
class Regis extends React.Component {
constructor(props) {
  super(props);
    this.state = {fname: '',
                  lname: '',
                   email: '',
                   mnumber: '',
                   addr: '',
                   psw: '',
                   fNameEror: false,
                   lNameEror: false,
                   emailError: false,
                   pswError: false
                  };

  this.handleFname = this.handleFname.bind(this);
  this.handleLname = this.handleLname.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  this.handleMnumber = this.handleMnumber.bind(this);
  this.handleAddr = this.handleAddr.bind(this);
  this.handlePsw = this.handlePsw.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleFname(event){
  this.setState({fname: event.target.value});
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

handleSubmit(event){
  event.preventDefault();
if(this.state.fname === '')
  {
   this.setState({
     fNameEror: true
   })
   return
  }else{
    this.setState({fNameEror: false});
  }

  if(this.state.lname === '')
  {
   this.setState({
     lNameEror: true
   })
   return
  }else{
    this.setState({lNameEror: false});
  }

  if(this.state.email === '')
  {
   this.setState({
     emailError: true,
   })
   return
  }else{
    this.setState({emailError: false});
  }

  if(this.state.psw === '')
  {
   this.setState({
     pswError: true
   })
   return
  }else{
    this.setState({pswError: false});
  }

            // let userList = JSON.parse(localStorage.getItem('user_list'))
            // if(userList && Array.isArray(userList)){
            //   userList.push({
            //     fname: this.state.fname,
            //     lname: this.state.lname,
            //     email: this.state.email,
            //     mnumber: this.state.mnumber,
            //     addr: this.state.addr,
            //     psw: this.state.psw 
            //   })
            // } else {
            //   userList = []
            //   userList.push(this.state)
            // }
          // const dispatch = useDispatch(); 

 const userList = {
                  fname: this.state.fname,
                  lname: this.state.lname,
                  email: this.state.email,
                   mnumber: this.state.mnumber,
                   addr: this.state.addr,
                   psw: this.state.psw
                } 
         
          // this.props.dispatch({ type: 'Add_User_IN_List',
          //                   payload: userList })                   
  
this.props.dispatch(addDetails(userList));


                    //dispatch(addDetails()); 
                    // localStorage.setItem('user_list', JSON.stringify(userList));
                    // //const userDetails = JSON.parse(localStorage.getItem('user_list')) 
                    // this.setState({fname: '',
                    //                 lname: '',
                    //                  email: '',
                    //                  mnumber: '',
                    //                  addr: '',
                    //                  psw: '',
                                    
                    //                  })


 this.props.history.push("/Login");                  
 
}

static getDerivedStateFromProps(props, state)
{
  console.log("getDerivedStateFromProps")
}

componentDidMount(){
  console.log("ComponentDidMount")
}
shouldComponentUpdate(nextProps, nextState)
{
    console.log(nextProps)
    console.log(nextState)
    console.log("shouldComponentUpdate ")
}
getSnapshotBeforeUpdate(prevProps, prevState)
{
  console.log(prevProps)
  console.log(prevState)
  console.log("getDerivedStateFromProps")
}
componentWillUnmount()
{
  console.log("componentWillUnmount")
}

render() {
 console.log("render");
    return (
      <div className={"paper"}>
      <Typography component="h1" variant="h5">
          Registration Form
        </Typography>
        <form className={"form"}>
    */
/* <FormControl variant="filled">
                          <InputLabel htmlFor="component-filled" className={"text"} htmlFor="component-simple">First Name</InputLabel>
                            <Input type="text" placeholder="Enter your FirstName" noValidate autoComplete="off" value={this.state.fname} onChange={this.handleFname} required/> <br/>
                            </FormControl> */

/* <br/>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
      
              <TextField
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={this.state.fname} 
                onChange={this.handleFname}
                error={this.state.fNameEror}
                helperText={this.state.fNameEror? 'Empty field!' : ' '} 
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={this.state.lname} 
                onChange={this.handleLname}
                error={this.state.lNameEror}
                helperText={this.state.lNameEror? 'Empty field!' : ' '}  
              />
            </Grid> <br/><br/><br/><br/>
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={this.state.email} 
                onChange={this.handleEmail}
                error={this.state.emailError}
                helperText={this.state.emailError ? 'Empty field!' : ' '}
              />
            </Grid><br/><br/><br/><br/>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mobile Number"
                name="mnumber"
                value={this.state.mnumber} 
                onChange={this.handleMnumber}
              />
            </Grid> <br/><br/><br/><br/>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="addr"
                label="Address"
                name="addr"
                type="text"
                value={this.state.addr} 
                onChange={this.handleAddr}
              />
            </Grid> <br/><br/><br/><br/>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="psw"
                label="Password"
                type="password"
                id="psw"
                value={this.state.psw} 
                onChange={this.handlePsw}
                error={this.state.pswError}
                helperText={this.state.pswError ? 'Empty field!' : ' '}
              />
            </Grid>
            </Grid><br/> 

            <Grid>
            <Button
            type="submit"
            value="submit"
            fullWidth ={false}
           style={{width: '100%'}}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
            >
            Register
          </Button>
          </Grid>
<br/>
       <hr />
       <Typography component="p" variant="p">
       <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.
            </Grid>
            <Grid item xs={12} sm={6}>
            Already have an account? <Link to="/Login">Sign in</Link>.
            </Grid>
           </Grid> 
       </Typography>    

      </form>
        </div>
    );
  }
}
 

export default connect()(withRouter(Regis));
 */
