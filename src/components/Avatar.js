import React from "react";
import './Avatar.scss';
import avatar from '../avatar.jpg';

export default class Avatar extends React.Component {
	render() {
		return (
			<img src={avatar} className="avatar" alt="User avatar" />
		);
	}
}
