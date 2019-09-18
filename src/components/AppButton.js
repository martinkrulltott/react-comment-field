import React from "react";
import PropTypes from "prop-types";
import './AppButton.scss';

export default class AppButton extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		primary: PropTypes.bool,
	};

	render() {
		return (
			<button className={"app-button " + (this.props.primary ? 'primary' : '')}>{this.props.name}</button>
		);
	}
}
