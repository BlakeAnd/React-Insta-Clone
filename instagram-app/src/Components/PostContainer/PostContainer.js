import React from 'react';
import "./PostContainer.css";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component{
    //console.log("rendering posts");

    render(){
        return (
            <>
                {this.props.filteredPosts.length === 0 ? this.props.dummy.map(dummy => {
                    return (
                        <div key="dummy.id" className="post" >
                            <img src={dummy.thumbnailUrl} alt={dummy.username}></img>
                            <h2>{dummy.username}</h2>
    
                            <img className="pic" src={dummy.imageUrl} alt={dummy.username}></img>
                            <p>{dummy.likes} likes</p>
                            <CommentSection 
                            comments={dummy.comments}
                            timestamp = {dummy.timestamp}
                            />
                        </div>
                        )
                    }
                ) : this.props.filteredPosts.map(dummy => {
                    return (
                        <div key="dummy.id" className="post" >
                            <div>check</div>
                            <img src={dummy.thumbnailUrl} alt={dummy.username}></img>
                            <h2>{dummy.username}</h2>
    
                            <img className="pic" src={dummy.imageUrl} alt={dummy.username}></img>
                            <p>{dummy.likes} likes</p>
                            <CommentSection 
                            comments={dummy.comments}
                            timestamp = {dummy.timestamp}
                            />
                        </div>
                        )
                    })
                }
            </>
        );
    }
   
}

PostContainer.propTypes = {
    dummy: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number
    }))
}

export default PostContainer;