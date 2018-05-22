import React, { Component } from "react";
import Icon from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/fontawesome-free-regular";
import {
  faRetweet,
  faArrowAltCircleDown,
  faArrowDown,
  faAngleDown
} from "@fortawesome/fontawesome-free-solid";
import {
  Wrapper,
  Header,
  OptionsToggle,
  Options,
  Share,
  Edit,
  Delete,
  Body,
  UserImage,
  Image,
  Content,
  User,
  Username,
  Date,
  Text,
  Meta,
  Like,
  Retweet,
  Comment
} from "./styles";

class Post extends Component {
  state = {
    showOptions: false
  };

  toggleOptions = e => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions
    }));
  };

  dismissOptions = e => {
    if (this.state.showOptions === true) {
      this.setState(prevState => ({ showOptions: false }));
    }
  };

  render() {
    return (
      <Wrapper onClick={this.dismissOptions}>
        <Header>Empty</Header>
        <OptionsToggle onClick={this.toggleOptions}>
          <Icon icon={faAngleDown} size="lg" />
        </OptionsToggle>
        <Options className={this.state.showOptions ? "active" : ""}>
          <Share onClick={this.sharePost}>Share</Share>
          <Edit onClick={this.editPost}>Edit</Edit>
          <Delete onClick={this.deletePost}>Delete</Delete>
        </Options>
        <Body onClick={this.dismissOptions}>
          <UserImage>
            <Image src="https://www.fillmurray.com/50/50" />
          </UserImage>
          <Content>
            <User>
              Abhinav Ramkumar
              <Username>● @rabhinav ●</Username>
              <Date>2d</Date>
            </User>
            <Text>
              {"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit soluta ea, beatae iure ipsam delectus quae voluptatum inventore consequatur, suscipit quo fugiat dolor eligendi minus molestias quis. Deleniti, asperiores architecto?".substring(
                0,
                239
              )}
            </Text>
            <Meta>
              <Comment>
                <Icon icon={faComment} />
                <p>21</p>
              </Comment>
              <Retweet>
                <Icon icon={faRetweet} />
                <p>45</p>
              </Retweet>
              <Like>
                <Icon icon={faHeart} />
                <p>101</p>
              </Like>
            </Meta>
          </Content>
        </Body>
      </Wrapper>
    );
  }
}

export default Post;
