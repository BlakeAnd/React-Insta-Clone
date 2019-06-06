import React from 'react';
import dummyData from "./dummy-data.js";
import PostContainer from "./Components/PostContainer/PostContainer";
import SearchBar from "./Components/SearchBar/SearchBar";

import './App.css';

class App extends React.Component {

    state = {
      dummy: []
    };
 
    
 
  
  componentDidMount() {
    console.log("did mount");
    this.setState({       
      dummy: dummyData
    })
  }

  componentDidUpdate() {
    console.log("did update");

  }

  render() {
    console.log('Rendering!')

    return (
      <div className="App">
        <SearchBar /> 
        <PostContainer dummy={this.state.dummy} />
      </div>
    );

  }
 
}

export default App;
