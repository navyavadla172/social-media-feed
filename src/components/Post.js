// src/components/Post.js
import React from 'react';

const Post = ({ post }) => {
  const { text, images, video, timestamp } = post;

  return (
    <div className="post">
      <p>{text}</p>
      
      {/* Render images */}
      {images && images.map((img, index) => (
        <img key={index} src={img} alt={`Post Image ${index}`} />
      ))}

      {/* Render video */}
      {video && (
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      )}

      <p>{new Date(timestamp).toLocaleString()}</p>
    </div>
  );
};

export default Post;
