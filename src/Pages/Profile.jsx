import React, { useState } from "react";
import "../CSS/Profile.css";
import { FaMapMarkerAlt, FaEnvelope, FaPen, FaCommentDots, FaLink, FaBriefcase } from "react-icons/fa";

const connections = [
  { name: "Michael Chen", title: "Product Manager", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Emily Rodriguez", title: "Frontend Dev", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "David Park", title: "Data Scientist", img: "https://randomuser.me/api/portraits/men/44.jpg" },
  { name: "James Wilson", title: "Head of Marketing", img: "https://randomuser.me/api/portraits/men/21.jpg" },
];

const experience = [
  { icon: "🎨", title: "Senior UX Designer", company: "DesignHub", date: "Jan 2021 – Present · 3 yrs", desc: "Leading end-to-end product design for enterprise clients. Managed a team of 4 designers and collaborated with engineering to ship 12+ major features." },
  { icon: "💼", title: "UX Designer", company: "CreativeWorks Agency", date: "Mar 2018 – Dec 2020 · 2 yrs 9 mos", desc: "Designed user interfaces for web and mobile applications across fintech, healthcare, and e-commerce verticals." },
  { icon: "🖥️", title: "UI/UX Intern", company: "StartupLab", date: "Jun 2017 – Feb 2018 · 9 mos", desc: "Assisted senior designers with wireframing, prototyping, and usability testing." },
];

const skills = ["Figma", "User Research", "Prototyping", "Interaction Design", "Usability Testing", "Design Systems", "Accessibility", "Wireframing", "Adobe XD", "HTML/CSS"];

const tabs = ["About", "Experience", "Skills", "Activity"];

function Profile() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="profile-page">

      {/* Cover */}
      <div className="cover-image">
        <button className="edit-cover-btn"><FaPen size={10} /> Edit Cover</button>
      </div>

      {/* Profile Box */}
      <div className="profile-box">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="profile-avatar" />
        <div className="profile-info-row">
          <div className="profile-details">
            <h2>Sarah Johnson</h2>
            <p className="profile-headline">Senior UX Designer at DesignHub · Open to opportunities</p>
            <div className="profile-meta">
              <span><FaMapMarkerAlt size={11} /> San Francisco, CA</span>
              <span><FaEnvelope size={11} /> sarah.johnson@example.com</span>
              <span><FaLink size={11} /> sarahjohnson.design</span>
            </div>
            <div className="profile-tags">
              <span className="profile-tag">UX Design</span>
              <span className="profile-tag">Product</span>
              <span className="profile-tag">Research</span>
            </div>
          </div>
          <div className="profile-actions">
            <button className="message-btn"><FaCommentDots size={13} /> Message</button>
            <button className="edit-profile-btn"><FaPen size={11} /> Edit Profile</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="profile-stats">
        <div className="profile-stat"><strong>354</strong><span>Connections</span></div>
        <div className="profile-stat"><strong>48</strong><span>Posts</span></div>
        <div className="profile-stat"><strong>1.2K</strong><span>Profile Views</span></div>
        <div className="profile-stat"><strong>8 yrs</strong><span>Experience</span></div>
        <div className="profile-stat"><strong>12</strong><span>Projects</span></div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map(t => (
          <button key={t} className={`tab-button${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      {/* Main layout */}
      <div className="profile-layout">

        {/* Main column */}
        <div>
          {activeTab === "About" && (
            <div className="profile-card">
              <h3>About Me <button className="card-edit-btn"><FaPen size={10} /> Edit</button></h3>
              <p>Passionate UX designer with over 8 years of experience creating user-centered digital experiences for a variety of clients. Specialized in interaction design, user research, and creating accessible interfaces that delight users while meeting business goals.</p>
              <br />
              <p>I believe great design is invisible — it just works. My process is deeply rooted in empathy, data, and iteration. I've worked with startups and Fortune 500 companies alike, always bringing the same level of care and craft to every project.</p>
            </div>
          )}

          {activeTab === "Experience" && (
            <div className="profile-card">
              <h3>Experience <button className="card-edit-btn"><FaPen size={10} /> Add</button></h3>
              {experience.map((exp, i) => (
                <div key={i} className="experience-item">
                  <div className="exp-logo">{exp.icon}</div>
                  <div className="exp-info">
                    <h4>{exp.title}</h4>
                    <p className="exp-company"><FaBriefcase size={11} style={{ marginRight: 5 }} />{exp.company}</p>
                    <p className="exp-date">{exp.date}</p>
                    <p>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Skills" && (
            <div className="profile-card">
              <h3>Skills <button className="card-edit-btn"><FaPen size={10} /> Edit</button></h3>
              <div className="skills-grid">
                {skills.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
              </div>
            </div>
          )}

          {activeTab === "Activity" && (
            <div className="profile-card">
              <h3>Recent Activity</h3>
              {[
                { text: "Shared a post about mobile-first design principles", time: "2h ago", img: "https://randomuser.me/api/portraits/women/44.jpg" },
                { text: "Commented on David Park's article about data visualization", time: "1d ago", img: "https://randomuser.me/api/portraits/women/44.jpg" },
                { text: "Liked Michael Chen's post about product strategy", time: "3d ago", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              ].map((a, i) => (
                <div key={i} className="activity-mini-item" style={{ padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                  <img src={a.img} alt="" />
                  <div>
                    <p>{a.text}</p>
                    <span>{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="profile-sidebar">
          <div className="sidebar-card">
            <h4>Your Network · 354</h4>
            <div className="network-mini-grid">
              {connections.map((u, i) => (
                <div key={i} className="network-mini-card">
                  <img src={u.img} alt={u.name} />
                  <p>{u.name}</p>
                  <span>{u.title}</span>
                </div>
              ))}
            </div>
            <button className="see-all-btn">See all connections</button>
          </div>

          <div className="sidebar-card">
            <h4>People Also Viewed</h4>
            <div className="activity-mini">
              {[
                { name: "Priya Sharma", role: "Data Engineer at DataFlow", img: "https://randomuser.me/api/portraits/women/68.jpg" },
                { name: "Carlos Ruiz", role: "Backend Dev at ScaleUp", img: "https://randomuser.me/api/portraits/men/52.jpg" },
                { name: "Aisha Patel", role: "Product Lead at Nexus", img: "https://randomuser.me/api/portraits/women/72.jpg" },
              ].map((u, i) => (
                <div key={i} className="activity-mini-item">
                  <img src={u.img} alt={u.name} />
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--text-primary)" }}>{u.name}</p>
                    <span>{u.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-card">
            <h4>Profile Strength</h4>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "10px" }}>Your profile is <strong style={{ color: "var(--primary)" }}>85% complete</strong></p>
            <div style={{ background: "var(--border)", borderRadius: "8px", height: "8px", overflow: "hidden" }}>
              <div style={{ width: "85%", height: "100%", background: "linear-gradient(90deg, var(--primary), var(--accent))", borderRadius: "8px" }}></div>
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "8px" }}>Add a featured section to reach 100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
