import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
         <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
         />
         <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Content'
         />
         <button type='submit'>Create Post</button>
      </form>
   );
};

export default CreatePostForm;
