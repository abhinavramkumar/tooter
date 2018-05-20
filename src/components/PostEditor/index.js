import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class PostEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    contentState: {}
  };

  onEditorChange = e => {
    console.log(e);
  };

  onContentStateChange = e => {
    console.log(e);
  };

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onEditorChange}
        onContentStateChange={this.onContentStateChange}
        contentState={this.state.contentState}
      />
    );
  }
}

export default PostEditor;
