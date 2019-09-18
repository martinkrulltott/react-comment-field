import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import './CommentEditor.scss';
import EditorToolbar from './EditorToolbar';

export default class CommentEditor extends React.Component {
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

	handleClick = action => {
		switch(action) {
			case "bold":
				this.onBoldClick();
				break;
			case "italic":
				this.onItalicClick();
				break;
			case "underline":
				this.onUnderlineClick();
				break;
			default:
				break;
		}
	  };

	render() {
		return (
			<div className={"comment-editor " + (this.state.editing ? 'editing' : '')} onClick={this.onContainerClick}>
				{ this.state.editing &&
					<EditorToolbar clickHandler={this.handleClick}/>
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
