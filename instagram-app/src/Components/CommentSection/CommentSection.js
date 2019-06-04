import React from 'react';

const CommentSection = props => {
    return (
        <>
            {props.comments.map(comment => {
                return (
                    <div key=''>
                        <img src={comment.thumbnailUrl} alt={dummy.username}></img>
                        <p>{comment.username}</p>
                                            
                    </div>
                );
            })}
        </>
    );
}

export default CommentSection;