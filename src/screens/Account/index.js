import React, { Component } from "react";
import { connect } from "react-redux";
import { AccountForm } from "../../components";
import { Wrapper, Container } from "./styles";

class Account extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <AccountForm {...this.state.user} />
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Account);
