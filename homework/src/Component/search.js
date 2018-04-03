import React from 'react';

export default function Search(props) {
    return (
        <div className = "search">
            <input id = "search" onChange = {props.search} type = "text" placeholder = "Search" />
        </div>
    );
}