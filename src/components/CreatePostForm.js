import React, { useState } from 'react';
import './CreatePostForm.css';

const CreatePostForm = ({ onCreatePost }) => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (title && content) {
         onCreatePost({ id: Date.now(), title, content, comments: [] });
         setTitle('');
         setContent('');
      }
   };

   return (
      <form className='create-post-form' onSubmit={handleSubmit}>
         <div className='form-row'>
            <input
               type='text'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder='Title'
            />
            <input
               type='text'
               className='content-input'
               value={content}
               onChange={(e) => setContent(e.target.value)}
               placeholder='Content'
            />
         </div>
         <button type='submit'>Create Post</button>
      </form>
   );
};

export default CreatePostForm;
