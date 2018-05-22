import React from "react";
import {
  Container,
  Banner,
  Wrapper,
  Image,
  UserData,
  Row,
  Stat,
  Title
} from "./styles";

const ProfileData = props => {
  return (
    <Wrapper>
      <Banner src="https://www.fillmurray.com/1100/150" />
      <Container>
        <Image src="https://www.fillmurray.com/120/120" />
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
      </Container>
    </Wrapper>
  );
};

export default ProfileData;
