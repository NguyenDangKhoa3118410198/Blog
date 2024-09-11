import React, { useState } from 'react';
import CommentList from './CommentList';
import CreateCommentForm from './CreateCommentForm';
import './Post.css';

const Post = ({ post, onEdit, onDelete }) => {
   const [isEditing, setIsEditing] = useState(false);
   const [title, setTitle] = useState(post.title);
   const [content, setContent] = useState(post.content);

   const handleEdit = () => {
      onEdit(post.id, { ...post, title, content });
      setIsEditing(false);
   };

   return (
      <div className='post-container'>
         {isEditing ? (
            <div className='edit-mode'>
               <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Title'
               />
               <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='Content'
               />
               <button onClick={handleEdit}>Save</button>
            </div>
         ) : (
            <div>
               <div className='post-header'>
                  <h2 className='post-title'>{post.title}</h2>
                  <div className='post-actions'>
                     <button onClick={() => setIsEditing(true)}>Edit</button>
                     <button onClick={() => onDelete(post.id)}>Delete</button>
                  </div>
               </div>
               <p className='post-content'>{post.content}</p>
            </div>
         )}
         <div className='comment-list'>
            <CommentList
               comments={post.comments}
               onAddComment={(comment) => {
                  onEdit(post.id, {
                     ...post,
                     comments: [...post.comments, comment],
                  });
               }}
               onEditComment={(commentId, updatedComment) => {
                  const updatedComments = post.comments.map((comment) =>
                     comment.id === commentId ? updatedComment : comment
                  );
                  onEdit(post.id, { ...post, comments: updatedComments });
               }}
               onDeleteComment={(commentId) => {
                  const updatedComments = post.comments.filter(
                     (comment) => comment.id !== commentId
                  );
                  onEdit(post.id, { ...post, comments: updatedComments });
               }}
            />
         </div>
         <div className='create-comment-form'>
            <CreateCommentForm
               onAddComment={(comment) => {
                  onEdit(post.id, {
                     ...post,
                     comments: [...post.comments, comment],
                  });
               }}
            />
         </div>
      </div>
   );
};

export default Post;
