import React from 'react';
import Comment from './Comment';
import './CommentList.css';

const CommentList = ({ comments, onEditComment, onDeleteComment }) => {
   return (
      <div className='comment-list-container'>
         {comments.map((comment) => (
            <div key={comment.id} className='comment-item'>
               <Comment
                  comment={comment}
                  onEdit={(updatedComment) =>
                     onEditComment(comment.id, updatedComment)
                  }
                  onDelete={() => onDeleteComment(comment.id)}
               />
            </div>
         ))}
      </div>
   );
};

export default CommentList;
