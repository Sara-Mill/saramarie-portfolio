import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "./portfolio.css";

const Contact = () => {
  const handleOnSubmit = {};

  return (
    <div className="Contact">
      <h4>
        Direct email is coming Soon! For now, please use the links below to
        connect via Github, LinkedIn, and StackOverflow. Thank you!
      </h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          class="form-field"
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          class="form-field"
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          class="form-field"
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button disabled type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
