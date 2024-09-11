import React, { useState } from 'react';

const CreateCommentForm = ({ onAddComment }) => {
   const [text, setText] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (text) {
         onAddComment({ id: Date.now(), text });
         setText('');
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Add a comment'
         />
         <button type='submit'>Add Comment</button>
      </form>
   );
};

export default CreateCommentForm;
