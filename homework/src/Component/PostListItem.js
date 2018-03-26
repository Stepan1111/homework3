import React, { Component } from 'react';
import  '../App.css';

export default class PostListItem extends Component {
    render() {
        return (
            <li className="listItem">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </li>
        );
    }
}