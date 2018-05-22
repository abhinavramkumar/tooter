import React, { Component } from "react";
import { CreatePost, ProfileData, Post, Bio, Sidebar } from "../../components";
import { Wrapper, PostsContainer, Main, PostsWrapper } from "./styles";

class Profile extends Component {
  state = {
    test: [
      {
        id: "08437025408149",
        body: "this is my first ever tweet! Hello Tooter!",
        images: []
      }
    ]
  };

  render() {
    return (
      <Wrapper>
        <ProfileData />
        <Main>
          <Bio />
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
        </Main>
      </Wrapper>
    );
  }
}

export default Profile;
