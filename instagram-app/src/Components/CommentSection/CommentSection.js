import React from 'react';
import PropTypes from "prop-types";

class CommentSection  extends React.Component{
    state = {
        comments: this.props.comments,
        newComment: ''
    }
    //console.log("rendering comments ");

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: "fabio",
            text: this.state.newComment
        }
        this.setState({ comments: [...this.state.comments, 
        newComment], newComment: ''})
    }

    changeHandler = e => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    render(){
    return (
        <>
        
            {this.state.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h4>{comment.username}</h4>
                        <p>{comment.text}</p>  
                                      
                    </div>
                );
            })}
            <p>time {this.props.timestamp}</p> 
            <form onSubmit={this.addNewComment}> 
                <input 
                type="text"
                placeholder="comment,," 
                name="newComment"
                value={this.state.newComment}
                onChange={this.changeHandler}
                
                ></input>

            </form>
         
        </>
    );
}
}

CommentSection.propTypes = { 
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string.isRequired
    }))
}
//<img src={comment.thumbnailUrl} alt={dummy.username}></img>
//<p>{comment.username}</p>
export default CommentSection;