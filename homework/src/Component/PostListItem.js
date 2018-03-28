import React from 'react';

export default function PostListItem(props){
    return (
        <li className="listItem">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </li>
    );
}