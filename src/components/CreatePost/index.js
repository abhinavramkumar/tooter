import React, { Component } from "react";
import Icon from "@fortawesome/react-fontawesome";
import Dropzone from "react-dropzone";
import { faPaperPlane, faImage } from "@fortawesome/fontawesome-free-solid";
import {
  Wrapper,
  Content,
  Image,
  TextWrapper,
  Text,
  Meta,
  SelectImage,
  WordCount,
  Button,
  DropzoneWrapper,
  Placeholder,
  FileItem,
  FilesList,
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
        tweetBody: value
      }));
    }
  };

  onToggleDropzone = () => {
    this.setState(prevState => ({
      showDropzone: !prevState.showDropzone
    }));
  };

  onFileDrop = (accepted, rejected) => {
    console.log(accepted);
    this.setState(prevState => ({
      accepted: [...prevState.accepted, ...accepted]
    }));
  };

  deselectImage = e => {
    e.stopPropagation();
    console.log(e.target.dataset.target);
    this.setState(prevState => ({
      accepted: prevState.accepted.filter(
        (file, index) => index !== e.target.dataset.target
      )
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
                <button onClick={this.deselectImage} data-target={index}>
                  Remove
                </button>
              </PreviewWrapper>
            ))}
        </PreviewList>
      </Wrapper>
    );
  }
}

export default CreatePost;
