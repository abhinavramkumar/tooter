import React, { Component } from "react";
import IconAi from "./assets/ai.svg";
import {
  Wrapper,
  Welcome,
  Container,
  CenteredColumn,
  Image
} from "./styles.js";

class Home extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <CenteredColumn>
            <Welcome>Tooter -your fav Twitter client</Welcome>
          </CenteredColumn>
        </Container>
      </Wrapper>
    );
  }
}

export default Home;
