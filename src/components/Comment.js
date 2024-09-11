import React, { useState } from 'react';
import './Comment.css';

const Comment = ({ comment, onEdit, onDelete }) => {
   const [isEditing, setIsEditing] = useState(false);
   const [text, setText] = useState(comment.text);

   const handleEdit = () => {
      onEdit({ ...comment, text });
      setIsEditing(false);
   };

   return (
      <div className='comment-container'>
         {isEditing ? (
            <div>
               <input
                  className='edit-input'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
               />
               <button className='edit-button' onClick={handleEdit}>
                  Save
               </button>
            </div>
         ) : (
            <div className='comment-content'>
               <p>{comment.text}</p>
            </div>
         )}
         <div className='comment-buttons'>
            {!isEditing && (
               <>
                  <button
                     className='edit-button'
                     onClick={() => setIsEditing(true)}
                  >
                     Edit
                  </button>
                  <button className='delete-button' onClick={onDelete}>
                     Delete
                  </button>
               </>
            )}
         </div>
      </div>
   );
};

export default Comment;
