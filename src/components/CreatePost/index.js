import React, { Component } from "react";
import Icon from "@fortawesome/react-fontawesome";
import Dropzone from "react-dropzone";
import {
  faPaperPlane,
  faImage,
  faTimes
} from "@fortawesome/fontawesome-free-solid";
import {
  Wrapper,
  Content,
  Image,
  ImageCount,
  TextWrapper,
  Text,
  Meta,
  SelectImage,
  WordCount,
  Button,
  DropzoneWrapper,
  Placeholder,
  PreviewImage,
  PreviewList,
  PreviewWrapper,
  PreviewCaption
} from "./styles";

class CreatePost extends Component {
  state = {
    tweetBody: "",
    showDropzone: false,
    accepted: [],
    rejected: []
  };

  onTweetChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    if (value.length <= 240) {
      this.setState(prevState => ({
        tweetBody: value,
        showDropzone: false
      }));
    }
  };

  onToggleDropzone = () => {
    this.setState(prevState => ({
      showDropzone: !prevState.showDropzone
    }));
  };

  onFileDrop = (accepted, rejected) => {
    this.setState(prevState => ({
      accepted: [...prevState.accepted, ...accepted]
    }));
  };

  deselectImage = e => {
    let target = e.currentTarget.dataset.target;
    console.log(target);
    this.setState(prevState => ({
      accepted: prevState.accepted.filter(file => file.name !== target)
    }));
  };

  onDropzoneChange = e => {};

  render() {
    return (
      <Wrapper>
        <Content>
          <Image src="https://www.fillmurray.com/100/100" alt="Test" />
          <TextWrapper>
            <Text
              rows="6"
              columns="30"
              value={this.state.tweetBody}
              onChange={this.onTweetChange}
            />
            <SelectImage onClick={this.onToggleDropzone}>
              <Icon icon={faImage} size="lg" />
            </SelectImage>
          </TextWrapper>
          <Meta>
            {this.state.accepted.length > 0 ? (
              <ImageCount>{this.state.accepted.length} images</ImageCount>
            ) : (
              <ImageCount>No images selected!</ImageCount>
            )}
            <WordCount>{this.state.tweetBody.length} / 240</WordCount>
            <Button onClick={this.onPostTweet}>
              Post
              <Icon icon={faPaperPlane} />
            </Button>
          </Meta>
        </Content>

        <DropzoneWrapper className={this.state.showDropzone ? "active" : ""}>
          <Dropzone
            className="dropzone"
            style={{}}
            onDrop={this.onFileDrop}
            onChange={this.onDropzoneChange}
            accept="image/jpeg,image/png,image/jpg"
          />
          <Placeholder className={this.state.showDropzone ? "active" : ""}>
            Drag Images here or Click here to browse system
          </Placeholder>
        </DropzoneWrapper>

        <PreviewList className={this.state.accepted.length > 0 ? "active" : ""}>
          {this.state.accepted &&
            this.state.accepted.map((file, index) => (
              <PreviewWrapper key={index}>
                <PreviewImage
                  key={index + 1}
                  src={file.preview}
                  alt={file.name}
                />
                <PreviewCaption key={index + 2}>
                  {file.name}{" "}
                  <span>{`${(file.size / (1024 * 1024)).toFixed(2)} MB`}</span>
                </PreviewCaption>
                <button onClick={this.deselectImage} data-target={file.name}>
                  <Icon icon={faTimes} />
                </button>
              </PreviewWrapper>
            ))}
        </PreviewList>
      </Wrapper>
    );
  }
}

export default CreatePost;
