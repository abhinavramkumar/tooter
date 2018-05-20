import React, { Component } from "react";
import {
  Wrapper,
  Form,
  ImagePreview,
  FormGroup,
  Label,
  Input,
  Button
} from "./styles";

class AccountForm extends Component {
  state = {
    name: this.props.name ? this.props.name : "",
    username: this.props.username ? this.props.username : "",
    email: this.props.email ? this.props.email : "",
    phone: this.props.phone ? this.props.phone : "",
    photoURL: this.props.photoURL ? this.props.photoURL : ""
  };

  render() {
    return (
      <Wrapper>
        <Form>
          <FormGroup>
            <ImagePreview src={this.state.photoURL} />
            <input
              type="file"
              style={{ display: "none" }}
              ref={input => (this.input = input)}
              onChange={this.onFileSelect}
              multiple={false}
            />
          </FormGroup>
          <FormGroup>
            <Label>Display Name</Label>
            <Input
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input
              type="text"
              value={this.state.phone}
              onChange={this.onPhoneChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Do you want to deactivate your account?</Label>
            <Button onClick={this.deactivateAccount}>
              Yes, Deactivate Account
            </Button>
          </FormGroup>
          <FormGroup>
            <Button onClick={this.saveAccountChanges}>Save</Button>
          </FormGroup>
        </Form>
      </Wrapper>
    );
  }
}

export default AccountForm;
