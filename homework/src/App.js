import React, { Component } from 'react';
 
import data from './Component/data.js';
import PostList from './Component/PostList.js';
import PostListItem from './Component/PostListItem.js';
import MoreButton from './Component/MoreButton.js';
import Search from './Component/search.js';

import  './App.css';
 

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            search: ""
        };
        this.loadMore = this.loadMore.bind(this);
        this.search = this.search.bind(this);
        this.renderList = this.renderList.bind(this);
        this.filterData = this.filterData.bind(this);
    }
    
    filterData() {
        return data.filter((item) => {
            return item.title.toLowerCase().search(this.state.search.toLowerCase()) > -1;
        });
    }
    
    renderList() {
        if (this.filterData().length !== 0) {
            return this.filterData().slice(0, this.state.limit).map((data) => (
                <PostListItem 
                    key = {data.id} 
                    title = {data.title} 
                    body = {data.body} 
                    search = {this.state.search}
                />
            ));
        } else {
            return <h3 className = "noItemFound"> No items found </h3>;
        }
    }
    
    loadMore() {
        if (this.state.limit < this.filterData().length) {
            this.setState({
                limit: this.state.limit + 10
            });
        } else {
            alert("Sorry, this is end of list");
        }
    }
    
    search() {
        this.setState({
                search: document.getElementById("search").value
        });
    }
 
    render() {
        return (
            <div>
                <header>
                    <h1 className = "header"> Post List </h1>
                </header>
                <Search search = {this.search}/>
                <PostList renderList = {this.renderList}/>
                <MoreButton loadMore = {this.loadMore}/>
            </div>
        );
    }
}