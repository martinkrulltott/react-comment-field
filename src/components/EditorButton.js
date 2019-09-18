import React from "react";
import PropTypes from "prop-types";
import './EditorButton.scss';

export default class EditorButton extends React.Component {
	static propTypes = {
		action: PropTypes.string,
		clickHandler: PropTypes.func,
	};

	handleClick = () => {
		this.props.clickHandler(this.props.action);
	};

	render() {
		const content = this.props.action.charAt(0);

		return (
			<button onClick={this.handleClick} className={"editor-button " + this.props.action} >{content}</button>
		);
	}
}
