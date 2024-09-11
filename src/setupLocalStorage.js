export const setupDefaultData = () => {
   const defaultPosts = [
      {
         id: 1,
         title: 'Post 1',
         content: 'Content for post 1',
         comments: [
            { id: 1, text: 'Comment 1 for Post 1' },
            { id: 2, text: 'Comment 2 for Post 1' },
         ],
      },
      {
         id: 2,
         title: 'Post 2',
         content: 'Content for post 2',
         comments: [{ id: 3, text: 'Comment 1 for Post 2' }],
      },
   ];
   localStorage.setItem('posts', JSON.stringify(defaultPosts));
};
