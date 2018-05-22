import React, { Component } from "react";
import axios from "axios";
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

  componentDidMount() {
    console.log("Home Mounted");
    // axios.get("/test").then(res => {
    //   console.log(res);
    // });
  }

  render() {
    return (
      <Wrapper>
        <Container />
      </Wrapper>
    );
  }
}

export default Home;
