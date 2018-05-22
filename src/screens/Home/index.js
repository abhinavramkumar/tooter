import React, { Component } from "react";
import axios from "axios";
import IconAi from "./assets/ai.svg";
import {
  Wrapper,
  Container,
  HomeSidebar,
  PostsContainer,
  PostsWrapper
} from "./styles.js";
import { Post, CreatePost, Sidebar } from "../../components";

class Home extends Component {
  state = {
    test: [
      {
        id: "08437025408149",
        body: "this is my first ever tweet! Hello Tooter!",
        images: []
      }
    ]
  };

  componentDidMount() {
    console.log("Home Mounted");
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <HomeSidebar />
          <PostsContainer>
            <CreatePost />
            <PostsWrapper>
              {this.state.test ? (
                this.state.test.map(post => <Post key={post.id} {...post} />)
              ) : (
                <p>No Tweets yet!</p>
              )}
            </PostsWrapper>
          </PostsContainer>
          <Sidebar />
        </Container>
      </Wrapper>
    );
  }
}

export default Home;
