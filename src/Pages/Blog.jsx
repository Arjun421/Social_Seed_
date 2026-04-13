import React from 'react';
import '../CSS/Blog.css';

function Blog() {
  const posts = [
    {
      id: 1,
      user: { name: 'Sarah Johnson', title: 'Senior UX Designer at DesignHub', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      time: '1h ago',
      content: `Excited to share that I've just completed a major redesign project for an e-commerce platform! The focus was on improving user experience and conversion rates.\n\nKey improvements:\n• Simplified checkout process\n• Enhanced product filtering\n• Mobile-first responsive design\n\nHappy to chat about UX best practices!`,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80',
      likes: 47,
      comments: [
        { name: 'David Park', text: 'This looks great! Would love to hear more about the mobile-first approach.', time: '45m ago' },
        { name: 'Michael Chen', text: 'Impressive work! Did you see immediate improvement in conversion rates?', time: '35m ago' },
      ],
    },
    {
      id: 2,
      user: { name: 'Michael Chen', title: 'Product Manager at TechCorp', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
      time: '1d ago',
      content: `Just published my article on "The Future of Front-end Development". Covering emerging trends:\n\n• Web Components\n• Edge Computing\n• AI-assisted development\n\nLink in comments — would love your thoughts!`,
      image: null,
      likes: 32,
      comments: [],
    },
    {
      id: 3,
      user: { name: 'David Park', title: 'Data Scientist at AnalyticsPro', avatar: 'https://randomuser.me/api/portraits/men/47.jpg' },
      time: '3d ago',
      content: `Hosting a virtual workshop next week on "Data Science for Beginners". We'll cover Python basics, data visualization, and intro to machine learning. Registration is free — spots are limited!`,
      image: null,
      likes: 65,
      comments: [
        { name: 'Robert Taylor', text: 'Just signed up! Looking forward to learning from you.', time: '6d ago' },
      ],
    },
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Trending Insights</h1>
        <p>Latest thoughts from your network. Discover trending topics and join the conversation.</p>
      </div>

      {/* Post Input */}
      <div className="post-box">
        <div className="post-box-top">
          <div className="user-avatar">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
          </div>
          <input type="text" className="post-input" placeholder="Share your thoughts, ideas, or insights..." />
        </div>
        <div className="post-actions">
          <button>📷 Photo</button>
          <button>🔗 Link</button>
          <button>📊 Poll</button>
          <button className="post-btn">Post</button>
        </div>
      </div>

      {/* Filters */}
      <div className="tabs-filter">
        <div className="tabs">
          <button className="active">For You</button>
          <button>Trending</button>
          <button>Recent</button>
        </div>
        <div className="search-filter">
          <input type="text" placeholder="Search posts..." />
          <button>🔍</button>
        </div>
        <div className="tags">
          <button className="active">All</button>
          <button>Articles</button>
          <button>Technology</button>
          <button>Design</button>
          <button>Marketing</button>
        </div>
      </div>

      {/* Feed */}
      <div className="post-feed">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <img src={post.user.avatar} alt={post.user.name} />
              <div>
                <h4>{post.user.name}</h4>
                <p>{post.user.title}</p>
                <span className="time">{post.time}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            {post.image && (
              <div className="post-image">
                <img src={post.image} alt="Post visual" />
              </div>
            )}
            <p className="likes-comments">{post.likes} likes · {post.comments.length} comments</p>
            <div className="post-actions">
              <button>🤍 Like</button>
              <button>💬 Comment</button>
              <button>↗ Share</button>
            </div>
            {post.comments.map((c, i) => (
              <div className="comment" key={i}>
                <strong>{c.name}</strong>
                <p>{c.text}</p>
                <span className="comment-time">{c.time}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
