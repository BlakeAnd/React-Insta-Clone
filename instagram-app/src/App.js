import React from 'react';
import dummyData from "./dummy-data.js";
import PostContainer from "./Components/PostContainer/PostContainer";
import SearchBar from "./Components/SearchBar/SearchBar";

import './App.css';

class App extends React.Component {

    state = {
      dummy: [],
      search: '',
      filteredPosts:[]
    };
 
    
 
  
  componentDidMount() {
    console.log("did mount");
    this.setState({       
      dummy: dummyData
    })
  }

  changeHandler = e => {
    this.setState({
       [e.target.name]: e.target.value 
    })
}

  searchFilter = e => {
    //if post = string display post
    const newFilter = this.state.dummy.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({filteredPosts: newFilter})
  }

  render() {
    console.log('Rendering!')

    return (
      <div className="App">
        <SearchBar 
        changeHandler={this.changeHandler}
        newSearch={this.state.search}
        searchFilter={this.searchFilter }
        /> 
        <PostContainer 
        dummy={this.state.dummy} 
        filteredPosts={this.state.filteredPosts}
        searchFilter={this.searchFilter}/>
      </div>
    );

  }
 
}

export default App;
