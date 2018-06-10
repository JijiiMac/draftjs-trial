import React from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()}
  }

  onChange(editorState) {
    this.setState({editorState})
  }

  toggleBold() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  render() {
    // display raw entity for show
    const rawEntity = convertToRaw(this.state.editorState.getCurrentContent());
    return <div>
      <button
        onClick={() => {
          this.toggleBold();
        }}
      >
        Bold
      </button>
      <Editor
        onChange={(editorState) => this.onChange(editorState)}
        editorState={this.state.editorState}
        placeholder='Start typing...'
      />
      <div>
        {JSON.stringify(rawEntity)}
      </div>
    </div>;
  }
}