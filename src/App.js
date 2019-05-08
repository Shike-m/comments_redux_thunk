import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostBlog from './components/postBlog';
import CommentList from './components/comments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PostBlog />
      <CommentList />
    </div>  
  );
}

export default App;
