import React, { Component } from 'react';

export default class MoreButton extends Component {
    
  render() {
    return (
        <div>
            <button onClick={this.props.loadMore}>Show More</button>
        </div>
    );
  }
}