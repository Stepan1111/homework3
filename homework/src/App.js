import React, { Component } from 'react';
 
import PostList from './Component/PostList.js';
import  './App.css';
 

export default class App extends Component {

 
  render() {
    return (
      <div >
        <header>
          <h1 className="header">Post List</h1>
        </header>
        <PostList/>
      </div>
    );
  }
}