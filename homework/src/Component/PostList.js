import React, { Component } from 'react';
 
import data from './data.js';
import PostListItem from './PostListItem.js';
import  '../App.css';
// import MoreButton from './MoreButton.js';
 

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
    // <button onClick={this.loadMore} >Show More</button>
    // <MoreButton onClick={this.loadMore}/>
    render() {
        return (
            <div>
                <ul className="list">
                    {this.renderList()}
                    <div  className="button">
                        <button onClick={this.loadMore}>Show More</button>
                    </div>
                </ul>
            </div>
        );
    }
}