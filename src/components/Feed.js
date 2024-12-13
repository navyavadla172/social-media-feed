import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    const snapshot = await db.collection('posts')
      .orderBy('timestamp', 'desc')
      .limit(20)
      .startAfter(lastVisible)
      .get();

    const newPosts = snapshot.docs.map(doc => doc.data());
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => <Post key={post.id} post={post} />)}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Feed;
