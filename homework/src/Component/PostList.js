import React, { Component } from 'react';
 
import data from './data.js';
import PostListItem from './PostListItem.js';
import MoreButton from './MoreButton.js';
import  '../App.css';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10
        };
        this.loadMore = this.loadMore.bind(this);
    }
    
 
    renderList() {
        return data.slice(0, this.state.limit).map((data) => (
            <PostListItem key={data.id} title={data.title} body={data.body}/>
        ));
    }
  
    loadMore() {
        if(this.state.limit<data.length){
            this.setState({
                limit: this.state.limit + 10
            });
        }else{
            alert("Sorry, this is end of list")
        }
    }
    render() {
        return (
            <div>
                <ul className="list">
                    {this.renderList()}
                    <MoreButton loadMore={this.loadMore}/>
                </ul>
            </div>
        );
    }
}