import React, { Component } from "react";
import axios from "axios";
import IconAi from "./assets/ai.svg";
import { CreatePost } from "../../components";
import {
  Wrapper,
  Welcome,
  Container,
  CenteredColumn,
  Image
} from "./styles.js";

class Home extends Component {
  state = {};

  componentDidMount() {
    console.log("Home Mounted");
    // axios.get("/test").then(res => {
    //   console.log(res);
    // });
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <h2>create Post component</h2>
          <CreatePost />
        </Container>
      </Wrapper>
    );
  }
}

export default Home;
