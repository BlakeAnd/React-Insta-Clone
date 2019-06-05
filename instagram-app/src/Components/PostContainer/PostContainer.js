import React from 'react';
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    console.log("post: ", props);
    return (
        <>
            {props.dummy.map(dummy => {
                return (
                    <div key="dummy.id" className="post" >
                        <img src={dummy.thumbnailUrl} alt={dummy.username}></img>
                        <img className="pic" src={dummy.imageUrl} alt={dummy.username}></img>
                        <h1>{dummy.username}</h1>
                        <CommentSection 
                        comments={dummy.comments} />
                    </div>
                );
            })}
        </>
    );
}

export default PostContainer;