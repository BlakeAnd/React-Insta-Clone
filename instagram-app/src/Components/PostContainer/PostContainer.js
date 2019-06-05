import React from 'react';
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    console.log("post: ", props);
    return (
        <>
            {props.dummy.map(dummy => {
                return (
                    <div key="dummy.id">
                        <img src={dummy.thumbnailUrl} alt={dummy.username}></img>
                        <p>{dummy.username}</p>
                        <CommentSection 
                        comments={dummy.comments} />
                    </div>
                );
            })}
        </>
    );
}

export default PostContainer;