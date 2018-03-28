import React from 'react';

export default function MoreButton(props){
    return (
        <div className="button">
            <button onClick={props.loadMore} >Show More</button>
        </div>
    );
}