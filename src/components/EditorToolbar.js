import React from "react";
import PropTypes from "prop-types";
import './EditorToolbar.scss';
import EditorButton from './EditorButton';

export default class EditorToolbar extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
      };
    
      handleClick = buttonName => {
        this.props.clickHandler(buttonName);
      };

	render() {
		return (
			<div className="editor-toolbar">
				<EditorButton action="bold" clickHandler={this.handleClick} />
				<EditorButton action="italic" clickHandler={this.handleClick} />
				<EditorButton action="underline" clickHandler={this.handleClick} />
			</div>
		);
	}
}
