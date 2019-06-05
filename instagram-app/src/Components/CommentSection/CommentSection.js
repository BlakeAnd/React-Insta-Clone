import React from 'react';

const CommentSection = props => {
    console.log("comment: ", props);
    return (
        <>
            {props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                      
                        <p>{comment.text}</p>                 
                    </div>
                );
            })}
        </>
    );
}
//<img src={comment.thumbnailUrl} alt={dummy.username}></img>
//<p>{comment.username}</p>
export default CommentSection;