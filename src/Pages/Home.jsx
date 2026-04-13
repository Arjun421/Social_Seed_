import React from 'react';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';

const suggestedUsers = [
  { name: 'Lisa Garcia', role: 'Product Designer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Robert Taylor', role: 'Software Engineer', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Jennifer Lee', role: 'UX Researcher', img: 'https://randomuser.me/api/portraits/women/46.jpg' },
];

const connections = [
  { name: 'Lisa Garcia', role: 'Product Designer at CreativeWorks', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Robert Taylor', role: 'Software Engineer at CloudTech', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Jennifer Lee', role: 'UX Researcher at UserFirst', img: 'https://randomuser.me/api/portraits/women/46.jpg' },
  { name: 'James Wilson', role: 'Head of Marketing at InnovateLabs', img: 'https://randomuser.me/api/portraits/men/47.jpg' },
  { name: 'Priya Sharma', role: 'Data Engineer at DataFlow', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Carlos Ruiz', role: 'Backend Dev at ScaleUp', img: 'https://randomuser.me/api/portraits/men/52.jpg' },
];

const whyItems = [
  { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', icon: '🤝', title: 'Expand Your Professional Network', desc: 'Connect with professionals in your industry, discover new opportunities, and build relationships that advance your career.' },
  { img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80', icon: '💡', title: 'Share Your Expertise', desc: 'Establish yourself as a thought leader by sharing your knowledge, insights, and experiences with a global audience.' },
  { img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', icon: '🚀', title: 'Accelerate Your Career', desc: 'Discover job opportunities, get mentored by industry leaders, and take your career to the next level.' },
];

const testimonials = [
  { quote: "SocialSeed transformed my professional networking. The quality of connections here is far better than any other platform I've used.", name: 'Michael Chen', role: 'Product Manager at TechCorp', img: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { quote: "I landed my dream job thanks to a connection I made on SocialSeed. The focused approach to professional networking makes all the difference.", name: 'David Park', role: 'Data Scientist at AnalyticsPro', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { quote: "As a freelancer, SocialSeed has been invaluable for finding new clients and collaborators. The industry groups are particularly helpful.", name: 'Jennifer Lee', role: 'UX Researcher at UserFirst', img: 'https://randomuser.me/api/portraits/women/23.jpg' },
];

function Home() {
  return (
    <div className="home-container">

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-badge">✦ Professional Networking Platform</div>
          <h1>Connect, Share,<br /><span>Grow Your Career</span></h1>
          <p>Build meaningful connections, share your expertise, and unlock new opportunities with professionals who matter.</p>
          <div className="hero-cta">
            <Link to="/signup"><button className="hero-btn-primary">Get Started Free →</button></Link>
            <Link to="/network"><button className="hero-btn-secondary">Explore Network</button></Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>50K+</strong><span>Professionals</span></div>
            <div className="hero-stat"><strong>120+</strong><span>Industries</span></div>
            <div className="hero-stat"><strong>98%</strong><span>Satisfaction</span></div>
          </div>
        </div>

        {/* Floating preview card */}
        <div className="hero-right">
          <div className="hero-card">
            <p className="hero-card-title">People you may know</p>
            <div className="hero-card-users">
              {suggestedUsers.map((u, i) => (
                <div key={i} className="hero-card-user">
                  <img src={u.img} alt={u.name} />
                  <div className="hero-card-user-info">
                    <strong>{u.name}</strong>
                    <span>{u.role}</span>
                  </div>
                  <button className="hero-card-user-btn">+ Connect</button>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <p className="hero-card-title">Your network growth</p>
            <div className="hero-card-stat">
              <div className="hero-card-stat-item"><strong>247</strong><span>Connections</span></div>
              <div className="hero-card-stat-item"><strong>13</strong><span>Pending</span></div>
              <div className="hero-card-stat-item"><strong>1.2K</strong><span>Views</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <div className="features-strip">
        {[['🔒', 'Secure & Private'], ['⚡', 'Real-time Messaging'], ['🌍', 'Global Network'], ['📊', 'Career Insights'], ['🎯', 'Smart Matching']].map(([icon, label], i) => (
          <div key={i} className="feature-pill">
            <div className="feature-pill-icon">{icon}</div>
            {label}
          </div>
        ))}
      </div>

      {/* ── CONNECTIONS ── */}
      <section className="connections-section">
        <span className="section-label">People You May Know</span>
        <h2>Expand Your Network</h2>
        <p>Connect with professionals in your industry and beyond</p>
        <div className="connections-grid">
          {connections.map((user, i) => (
            <div key={i} className="connection-card">
              <img src={user.img} alt={user.name} className="avatar" />
              <h4>{user.name}</h4>
              <p>{user.role}</p>
              <button className="connect-btn">+ Connect</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY SOCIALSEED ── */}
      <section className="why-socialseed">
        <span className="section-label">Why SocialSeed</span>
        <h2>Built for Professionals</h2>
        <p>Everything you need to advance your career in one place</p>
        <div className="why-grid">
          {whyItems.map((item, i) => (
            <div key={i} className="why-item">
              <img src={item.img} alt={item.title} />
              <div className="why-item-body">
                <div className="why-item-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <span className="section-label">Success Stories</span>
        <h2>Loved by Professionals</h2>
        <p>Hear from people who've grown their careers on SocialSeed</p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>{t.quote}</p>
              <div className="testimonial-author">
                <img src={t.img} alt={t.name} />
                <div><strong>{t.name}</strong><span>{t.role}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section">
        <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>Join Today</span>
        <h2>Ready to Grow Your Career?</h2>
        <p>Join over 50,000 professionals already building their future on SocialSeed.</p>
        <div className="cta-buttons">
          <Link to="/signup"><button className="cta-btn-white">Create Free Account</button></Link>
          <Link to="/network"><button className="cta-btn-outline">Browse Network</button></Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
