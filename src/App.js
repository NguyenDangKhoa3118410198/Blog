import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';
import { setupDefaultData } from './setupLocalStorage';
import './App.css';

const getInitialPosts = () => {
   const storedPosts = localStorage.getItem('posts');
   if (storedPosts) {
      return JSON.parse(storedPosts);
   }
   return [];
};

const App = () => {
   const [posts, setPosts] = useState(getInitialPosts());

   useEffect(() => {
      if (posts.length === 0) {
         setupDefaultData();
         setPosts(getInitialPosts());
      }
   }, [posts]);

   useEffect(() => {
      localStorage.setItem('posts', JSON.stringify(posts));
   }, [posts]);

   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

   const getRandomDelay = () =>
      Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

   const createPost = (newPost) => {
      delay(getRandomDelay()).then(() => {
         setPosts((prevPosts) => [...prevPosts, newPost]);
      });
   };

   const editPost = (id, updatedPost) => {
      delay(getRandomDelay()).then(() => {
         setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === id ? updatedPost : post))
         );
      });
   };

   const deletePost = (id) => {
      delay(getRandomDelay()).then(() => {
         setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      });
   };
   return (
      <div className='app-container'>
         <div className='create-post-form'>
            <CreatePostForm onCreatePost={createPost} />
         </div>
         <h1>List Post</h1>
         <div className='post-list'>
            <PostList
               posts={posts}
               onEditPost={editPost}
               onDeletePost={deletePost}
            />
         </div>
      </div>
   );
};

export default App;
