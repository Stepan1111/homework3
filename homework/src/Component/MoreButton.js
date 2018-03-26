import React, { Component } from 'react';

export default class MoreButton extends Component {
    loadMore() {
        
    }
  render() {
    return (
        <div>
            <button onClick={this.loadMore}>Show More</button>
            <h1></h1>
        </div>
    );
  }
}