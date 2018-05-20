import React, { Component } from "react";
import {
  Wrapper,
  Container,
  ProfileData,
  Image,
  UserData,
  Row,
  Stat,
  Title,
  Main
} from "./styles";

class Profile extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <ProfileData>
            <Image src="" />
            <UserData>
              <Row>
                <Stat>
                  <Title>Tweets</Title>
                  <p>200K</p>
                </Stat>
                <Stat>
                  <Title>Following</Title>
                  <p>810</p>
                </Stat>
                <Stat>
                  <Title>Followers</Title>
                  <p>119K</p>
                </Stat>
                <Stat>
                  <Title>Likes</Title>
                  <p>46.2K</p>
                </Stat>
              </Row>
            </UserData>
          </ProfileData>
          <Main />
        </Container>
      </Wrapper>
    );
  }
}

export default Profile;
