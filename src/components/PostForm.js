// src/components/PostForm.js
import React, { useState } from 'react';
import { db } from '../firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const PostForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postsCollection = collection(db, 'posts');
      await addDoc(postsCollection, {
        content,
        timestamp: new Date(),
      });
      setContent('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
