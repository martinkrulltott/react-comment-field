import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import './CommentEditor.css';

class CommentEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
			editing: false
		};
	}

	onChange = editorState => {
		this.setState({
			editorState
		});
	};

	handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(
			this.state.editorState,
			command
		);
		if (newState) {
			this.onChange(newState);
			return "handled";
		}
		return "not-handled";
	};

	onContainerClick = () => {
		this.setState({
            editing: true
        })
	};

	onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
	};

	render() {
		return (
			<div className={"editor-container " + (this.state.editing ? 'editing' : '')} onClick={this.onContainerClick}>
				{ this.state.editing &&
					<div className="toolbar">
						<button onClick={this.onBoldClick} className="button button-bold">B</button>
						<button onClick={this.onItalicClick} className="button button-italic">I</button>
						<button onClick={this.onUnderlineClick} className="button button-underline">U</button>
					</div>
				}
				<div className="editor">
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						placeholder="Write a comment"
					/>
				</div>
			</div>
		);
	}
}

export default CommentEditor;
