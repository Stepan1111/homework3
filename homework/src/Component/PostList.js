import React from 'react';

export default function PostList(props){
    return (
        <div>
            <ul className="list">
                {props.renderList()}
            </ul>
        </div>
    );
}
