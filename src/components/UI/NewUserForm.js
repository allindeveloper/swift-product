import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import { useTranslation } from "react-i18next";

const NewUserForm = ({submitButton,id,history}) => {
  const [validated, setValidated] = useState(false);
  const { t } = useTranslation();

  const [email, setemail] = useState("")


  const handleInputChange = (event) =>{
    setemail(event.target.value)
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.preventDefault();
      event.stopPropagation();
    }
    // history.push("/success")
    setValidated(true);
    
  };

  return (
    <Form noValidate action="/success" validated={validated} id={id} onSubmit={handleSubmit}>
    <Form.Row>
      <Form.Group as={Col} md="12" controlId="email">
        <Form.Label style={{color:"#041644"}}>{t('emailAddress')}</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Email"
          defaultValue=""
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
            Please provide a valid email address
          </Form.Control.Feedback>
      </Form.Group>
      
      
    </Form.Row>
    
    {/* <Button type="submit">Submit form</Button> */}
    {submitButton}
  </Form>
  );
};

export default withRouter(NewUserForm);
