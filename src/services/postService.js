// src/services/postService.js
import { db } from '../firebase/firebase-config';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';

// Get the posts collection reference
const postsCollectionRef = collection(db, 'posts');

// Fetch posts from Firestore, ordered by timestamp (or any other field you prefer)
const fetchPosts = async (lastVisiblePost = null) => {
  try {
    const postsQuery = query(
      postsCollectionRef,
      orderBy('timestamp', 'desc'), // Order by timestamp (most recent first)
      limit(20) // Fetch 20 posts at a time for infinite scrolling
    );

    const snapshot = await getDocs(postsQuery);
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return posts;
  } catch (err) {
    console.error('Error fetching posts:', err);
    throw new Error('Could not fetch posts');
  }
};

// Add a new post to Firestore
const addPost = async (postData) => {
  try {
    await addDoc(postsCollectionRef, {
      ...postData,
      timestamp: new Date(), // Add timestamp for sorting
    });
  } catch (err) {
    console.error('Error adding post:', err);
    throw new Error('Could not add post');
  }
};

export { fetchPosts, addPost };
