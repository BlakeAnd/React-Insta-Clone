import React from 'react';
import "./PostContainer.css";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    console.log("post: ", props);
    return (
        <>
            {props.dummy.map(dummy => {
                return (
                    <div key="dummy.id" className="post" >
                        <img src={dummy.thumbnailUrl} alt={dummy.username}></img>
                        <h2>{dummy.username}</h2>

                        <img className="pic" src={dummy.imageUrl} alt={dummy.username}></img>
                        <p>{dummy.likes} likes</p>
                        <CommentSection 
                        comments={dummy.comments} />
                    </div>
                );
            })}
        </>
    );
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