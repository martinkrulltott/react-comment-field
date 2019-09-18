import React from 'react';
import './App.scss';
import CommentEditor from './components/CommentEditor';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="app">
      <Avatar />
      <CommentEditor />
    </div>
  );
}

export default App;
