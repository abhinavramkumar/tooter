import React, { Component } from "react";
import { Wrapper, Trends, Title, Suggestions } from "./styles";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Trends>
          <Title>Trending</Title>
        </Trends>
        <Suggestions>
          <Title>Suggestions</Title>
        </Suggestions>
      </Wrapper>
    );
  }
}

export default Sidebar;
