import React from "react";
import "../CSS/Network.css";

const connections = [
  { name: "Sarah Johnson", role: "Senior UX Designer at DesignHub", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Chen", role: "Product Manager at TechCorp", img: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Emily Rodriguez", role: "Frontend Developer at WebSolutions", img: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "David Park", role: "Data Scientist at AnalyticsPro", img: "https://randomuser.me/api/portraits/men/32.jpg" },
];

function Network() {
  return (
    <main className="network-page">
      {/* Hero */}
      <section className="network-intro network-blue-bg">
        <div className="network-intro-content">
          <h1 className="network-heading">Grow Your Professional Circle</h1>
          <p className="network-subheading">
            Connect with industry professionals, discover new opportunities, and build meaningful relationships that advance your career.
          </p>
          <div className="network-statistics">
            <div className="network-stat-box"><p>Your Connections</p><h2>247</h2></div>
            <div className="network-stat-box"><p>Pending Requests</p><h2>13</h2></div>
            <div className="network-stat-box"><p>New Suggestions</p><h2>24</h2></div>
          </div>
        </div>
      </section>

      {/* Connections */}
      <section className="network-connection-list">
        <h2 className="network-list-title">Your Connections</h2>
        <p className="network-list-subtitle">Stay in touch with professionals in your network</p>
        <div className="network-card-grid">
          {connections.map((conn, i) => (
            <div key={i} className="network-person-card">
              <img src={conn.img} alt={conn.name} className="network-person-avatar" />
              <h4 className="network-person-name">{conn.name}</h4>
              <p className="network-person-role">{conn.role}</p>
              <button className="connect-person-btn">Message</button>
            </div>
          ))}
        </div>
      </section>

      {/* Groups */}
      <section className="network-groups">
        <h2 className="network-list-title">Professional Groups</h2>
        <p className="network-list-subtitle">Join communities and discussions in your industry</p>
        <div className="group-tabs">
          <button className="tab active">Featured</button>
          <button className="tab">Industry</button>
          <button className="tab">Your Groups</button>
        </div>
        <div className="group-card-grid">
          <div className="group-card gradient-blue">
            <h3>UX Designers Hub</h3>
            <p>A community of 14,320 UX designers sharing insights, job opportunities, and resources.</p>
            <div className="group-avatars">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
              <span>+14k members</span>
            </div>
            <button className="join-btn">Join Group</button>
          </div>
          <div className="group-card gradient-lightblue">
            <h3>Product Managers Network</h3>
            <p>Connect with 8,750 product managers to discuss strategies, tools, and career growth.</p>
            <div className="group-avatars">
              <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="" />
              <span>+8k members</span>
            </div>
            <button className="join-btn">Join Group</button>
          </div>
          <div className="group-card gradient-purple">
            <h3>Tech Startups</h3>
            <p>A community for founders, employees, and investors in the tech startup ecosystem.</p>
            <div className="group-avatars">
              <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/women/36.jpg" alt="" />
              <span>+12k members</span>
            </div>
            <button className="join-btn">Join Group</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="network-faq-section">
        <h2 className="network-list-title">Frequently Asked Questions</h2>
        <p className="network-list-subtitle">Common questions about networking features</p>
        <div className="faq-list">
          {[
            { q: "How do I manage my connection requests?", a: "You can manage connection requests from the Network tab. Review incoming requests and choose to accept or ignore them. You can also view sent requests and cancel them if needed." },
            { q: "Is there a limit to how many connections I can have?", a: "There is no strict limit. We recommend focusing on quality connections relevant to your professional goals rather than simply accumulating a large number." },
            { q: "How does the recommendation algorithm work?", a: "Our algorithm suggests connections based on your industry, shared interests, mutual connections, and recent interactions. It continuously improves to help you discover aligned professionals." },
            { q: "Can I control who sees my profile?", a: "Yes, manage visibility from your profile privacy controls. Choose public, connections-only, or hidden from search and recommendations." },
            { q: "How do I remove a connection?", a: "Visit the user's profile or go to your connections list, then click 'Remove Connection.' They will not be notified." },
          ].map((item, i) => (
            <details key={i} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <button className="faq-help-btn">View Help Center</button>
      </section>
    </main>
  );
}

export default Network;
