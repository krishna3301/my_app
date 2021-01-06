import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../Registration/regis.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
//import TextField from '../TextField';
import { connect, useDispatch, useSelector } from "react-redux";
import { showDetails } from "../Redux/actions/registration.action";

function Login(props) {
  const [email, setEmail] = useState();
  const [psw, setPsw] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userList);

  const handleSignUp = () => {
    // props.history.push("/Regis");
    history.push("/Regis");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let currentUser = user.find((item) => item.email === email);
    let currentUserIndex = user.findIndex((item) => item.email === email);

    if (currentUser) {
      if (psw === currentUser.psw) {
        // props.dispatch(showDetails(currentUserIndex));
        // props.history.push("/Display");
        dispatch(showDetails(currentUserIndex));
        history.push("/Display");
      } else {
        alert("Invalid Password");
      }
    } else {
      alert("Email not Found");
    }
  };

  return (
    <div className={"paper"}>
      <Typography component="h1" variant="h5">
        Login Form
      </Typography>
      <form className={"form"} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autofocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="psw"
              label="Password"
              type="password"
              id="psw"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
            />
          </Grid>
        </Grid>{" "}
        <br />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          value="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
        </Button>{" "}
        <br />
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <button className="" onClick={handleSignUp}>
              {" "}
              Don't have an account? Sign Up{" "}
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

/* const mapStateToProps = (state) => {
  return { user: state?.userList }
    }
 */
export default connect()(withRouter(Login));

/* 
class Login extends React.Component {
constructor(props) {
  super(props);
    this.state = {
                   email: '',
                   psw: ''};

 this.handleEmail = this.handleEmail.bind(this);
 this.handlePsw = this.handlePsw.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 this.handleSignUp = this.handleSignUp.bind(this);                  
 }

 handleSignUp(){
   this.props.history.push("/Regis");
 }

 handleEmail(event){
  this.setState({email: event.target.value});
}
handlePsw(event){
  this.setState({psw: event.target.value});
}

static getDerivedStateFromProps(props, state)
{
 if (props.user[0].email !== state.email) {
      return {
        selected: props.user[0].fname,
      };
    }
    return null;
  
}

handleSubmit(event){
  event.preventDefault();
 //  let userList = JSON.parse(localStorage.getItem('user_list')) 
 const userList = this.props.user;

 //this.props.dispatch({ type: 'RETRIVE_User_FROM_List'})

  let currentUser = userList.find(item => item.email === this.state.email);
  let currentUserIndex = userList.findIndex(item => item.email === this.state.email);

if(currentUser)
{
  if(this.state.psw === currentUser.psw)
  {
    console.log("Logged In...");
    // this.props.dispatch({ type: 'MOVE_USER_TO_DISPLAY',
    //                         payload: userList })
    // localStorage.setItem('user', JSON.stringify(currentUser));

      this.props.dispatch(showDetails(currentUserIndex));


    this.props.history.push("/Display");
  }else
  {
    alert('Invalid Password')
  }
}else{
  alert("Email not Found")
}
 
// alert(isInArray)
//  if(this.state.email === )


//   const userDetails = JSON.parse(localStorage.getItem('user'))
//   if(this.state.email === userDetails.email)
//   {
//     if(this.state.psw === userDetails.psw)
//     {
//        this.props.history.push("/Display");  
//     }else
//     alert("Invalid Password")  
//   }else
//   {
//   alert("Invalid Mail Id")
//   return
//   } 
 
}

render() {
    return (
      <div className={"paper"}>
      <Typography component="h1" variant="h5">
          Login Form
        </Typography>
        <form className={"form"} onSubmit={this.handleSubmit}>

        <Grid container spacing={2}>
         <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              autofocus
                value={this.state.email} 
                onChange={this.handleEmail}
              />
             </Grid>
            <Grid item xs={12}> 
              <TextField
                variant="outlined"
                required
                fullWidth
                name="psw"
                label="Password"
                type="password"
                id="psw"
                value={this.state.psw} 
                onChange={this.handlePsw}
              />
            </Grid> 
            </Grid> <br />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
           <Button
            type="submit"
            value="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button> <br/>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <button className="" onClick={this.handleSignUp}> Don't have an account? Sign Up </button>

            </Grid>
          </Grid>

        </form> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state?.userList }
}

export default connect(mapStateToProps)(withRouter(Login));
 */
