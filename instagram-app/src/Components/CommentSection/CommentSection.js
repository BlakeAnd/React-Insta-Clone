import React from 'react';
import PropTypes from "prop-types";

const CommentSection = props => {
    console.log("comment: ", props);
    return (
        <>
            {props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h4>{comment.username}</h4>
                        <p>{comment.text}</p>                 
                    </div>
                );
            })}
        </>
    );
}

CommentSection.propTypes = { 
    dummy: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}
//<img src={comment.thumbnailUrl} alt={dummy.username}></img>
//<p>{comment.username}</p>
export default CommentSection;