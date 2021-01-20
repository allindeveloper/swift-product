import React from "react";
import { Form } from "react-bootstrap";


export default function CustomInput(props) {
  let type ;
  if(props.type === "password"){
    type = "password"
  }else if(props.type === "text"){
    type = "text"
  }else if(props.type === "number"){
    type = "number"
  }else{
    type = "text"
  }
  return (
    <div className="input-group mb-2" style={{ background: "0" }}>
      <Form.Group
        controlId="exampleForm.ControlInput1"
        style={{ width: "-webkit-fill-available" }}
      >
        <Form.Label style={{ float: "left" }}>{props.labelText}</Form.Label>
        <Form.Control
          type={type}
          isInvalid={props.showError}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          style={{ background: "#FFFFFF" }}
          disabled={props.disabled}
        />
        <Form.Control.Feedback
          type="invalid"
          style={{ marginBottom: "-1rem", textAlign: "left" }}
        >
          {props.errorText}
        </Form.Control.Feedback>

        <div
        // style={{
        //   color: "#5e4bce",
        //   fontWeight: "bold",
        //   cursor: "pointer",
        //   position: "absolute",
        //   right: "15px",
        //   top: "39px",
        // }}
        >
          {props.text}
        </div>
        <div
          style={{
            position: "absolute",
            right: "15px",
            top: "39px",
            cursor: "pointer",
          }}
        >
          {props.endIcon}
        </div>
      </Form.Group>
    </div>
  );
}
