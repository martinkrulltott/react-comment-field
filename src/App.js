import React from 'react';
import './App.scss';
import CommentEditor from './components/CommentEditor';
import Avatar from './components/Avatar';

export default function App() {
	return (
		<div className="app">
			<Avatar />
			<CommentEditor />
		</div>
	);
}
