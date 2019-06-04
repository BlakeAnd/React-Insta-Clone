import React from 'react';
import CommentSection from "./CommentSection/CommentSection.js"

const PostContainer = props => {
    return (
        <>
            {props.dummy.map(dummy => {
                return (
                    <div key="dummy.id">
                        <img src={dummy.thumbnailUrl} alt={dummy.username}></img>
                        <p>{dummy.username}</p>
                        
                    </div>
                );
            })}
        </>
    );
}

export default PostContainer;