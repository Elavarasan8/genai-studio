import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us - GenAI Studio | Enterprise AI Platform"
        description="Learn about GenAI Studio - Our mission to democratize enterprise AI and empower businesses with cutting-edge Generative AI technology."
        keywords="About GenAI Studio, AI company, Enterprise AI, Mission, Vision, Team"
        canonical="https://genaistudio.com/about"
      />
      
      <section className="hero">
        <div className="container">
          <h1>About GenAI Studio</h1>
          <p className="hero-subtitle">Democratizing Enterprise AI for Every Organization</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="section-intro">To make enterprise-grade Generative AI accessible, secure, and practical for organizations of all sizes.</p>
          
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <p style={{fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>
              GenAI Studio was founded on the belief that every organization deserves access to cutting-edge AI technology. We've built a platform that removes the complexity of AI development while maintaining enterprise-grade security, scalability, and compliance.
            </p>
            <p style={{fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)'}}>
              Our team of AI experts, engineers, and business strategists work together to create tools that empower organizations to harness the transformative power of Generative AI without requiring deep technical expertise or massive infrastructure investments.
            </p>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <h2>Our Values</h2>
          
          <div className="capability-grid">
            <article className="capability-card">
              <div className="icon">🎯</div>
              <h3>Innovation First</h3>
              <p>We continuously push the boundaries of what's possible with AI technology, staying ahead of industry trends and adopting cutting-edge solutions.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">🔒</div>
              <h3>Security & Trust</h3>
              <p>Enterprise security and data privacy are fundamental to everything we build. Your trust is our most valuable asset.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">🤝</div>
              <h3>Customer Success</h3>
              <p>Your success is our success. We're committed to providing exceptional support and ensuring you achieve your AI goals.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">🌍</div>
              <h3>Accessibility</h3>
              <p>AI should be accessible to everyone. We design our platform to be intuitive, powerful, and available to organizations worldwide.</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why Choose Us</h2>
          
          <div className="feature-list">
            <div className="feature-item">
              <h3>🏆 Proven Expertise</h3>
              <p>Our team includes former engineers from leading tech companies and AI researchers with decades of combined experience in machine learning and enterprise software.</p>
            </div>
            
            <div className="feature-item">
              <h3>📈 Track Record</h3>
              <p>Trusted by hundreds of enterprises across industries including Fortune 500 companies, healthcare providers, financial institutions, and technology leaders.</p>
            </div>
            
            <div className="feature-item">
              <h3>🚀 Continuous Innovation</h3>
              <p>We invest heavily in R&D to ensure our platform stays at the forefront of AI technology, with monthly feature releases and quarterly major updates.</p>
            </div>
            
            <div className="feature-item">
              <h3>💼 Enterprise Focus</h3>
              <p>Built specifically for enterprise needs with compliance certifications, dedicated support, SLAs, and features designed for large-scale deployments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join leading enterprises using GenAI Studio to transform their operations</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default About;

