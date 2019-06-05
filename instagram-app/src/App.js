import React from 'react';
import dummyData from "./dummy-data.js";
import PostContainer from "./Components/PostContainer/PostContainer";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummy: dummyData
    };
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="search,,"></input>
        <PostContainer dummy={this.state.dummy} />
      </div>
    );

  }
 
}

export default App;
