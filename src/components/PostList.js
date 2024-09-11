import React from 'react';
import Post from './Post';
import './PostList.css';

const PostList = ({ posts, onEditPost, onDeletePost }) => {
   return (
      <div className='post-list-container'>
         {posts.map((post) => (
            <div key={post.id} className='post-item'>
               <Post post={post} onEdit={onEditPost} onDelete={onDeletePost} />
            </div>
         ))}
      </div>
   );
};

export default PostList;
