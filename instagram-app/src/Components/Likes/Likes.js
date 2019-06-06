 import React from 'react';

 class Likes extends React.Component {
  state = {
    likes: this.props.likes,
    //newComment: ''
}

  handleClick = e => {
    let toggle = 1;
    let like = this.state.likes;
    if( toggle === 1){
      like = this.state.likes + 1;
      toggle = 0;
    }
    else{
      like = this.state.likes - 1;
      toggle = 1;
    }

    
    this.setState({
         likes: like
    })
    console.log(like);
    console.log(this.likes);
  }
  
  render(){
    return(
      <div>
      <button
      name="likes"
      //value={this.props.likes}
      onClick={this.handleClick}
      >LIKE</button>
      <p>{this.state.likes} likes</p>
      </div>
    ) 
  }

 }

 export default Likes;