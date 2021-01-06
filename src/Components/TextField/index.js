import React from "react";
import "../Registration/regis.css";

function TextField(props) {
  return (
    <div
      style={{
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <input
        type={props.type}
        name="name"
        class="question"
        id="nme"
        required
        style={{ border: props.error ? "1px solid red" : "1px solid blue" }}
        onChange={props.onChange}
      />
      <label for="nme">
        <span>{props.label}</span>
      </label>
      {props.error && (
        <span style={{ color: "red", paddingBottom: "10px" }}>
          {props.helperText}
        </span>
      )}
    </div>
  );
}
export default TextField;

/* class TextField extends React.Component {

render(){
  return( 
    <div style={{ padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
    <input type={this.props.type} name="name" class="question" id="nme" required 
    style={{ border: this.props.error ? '1px solid red' : '1px solid blue'}}
    onChange={this.props.onChange}
    />
  <label for="nme"><span>{this.props.label}</span> 

  </label>
  {this.props.error &&
  <span style={{ color: 'red', paddingBottom: '10px' }}>
  {this.props.helperText}
  </span>
  }
  </div>
  );
}

}

export default TextField;

 */

//     <div className="box" >
//       <input type={this.props.type} name={this.props.name} onChange={this.props.onChange} className="company"  value= {this.props.value}
//         required={this.props.required}
//         style={{ border: this.props.error ? '1px solid red' : '1px solid blue'}}
//         style={{ border: this.props.fullWidth ? 'width: 100%' : ''}}
//       />
//        <label className="label">

//        {/* <span>{this.props.helperText ? this.props.helperText : this.props.name} </span> */}
//           <div>{this.props.name}</div>
//           <span> {this.props.error ? this.props.helperText : ""} </span>
//        </label>

// </div>
