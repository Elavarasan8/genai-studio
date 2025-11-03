import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <>
      <SEO 
        title="Services - GenAI Studio | Enterprise AI Solutions"
        description="GenAI Studio Services - AI Agent Development, LLM Integration, Prompt Engineering, Knowledge Base Management, and Enterprise AI Solutions."
        keywords="AI Services, LLM Integration, AI Agents, Prompt Engineering, RAG, Enterprise AI"
        canonical="https://genaistudio.com/services"
      />
      
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="hero-subtitle">Comprehensive AI Solutions for Enterprise Transformation</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Platform Services</h2>
          <p className="section-intro">End-to-end solutions for building and deploying enterprise AI applications</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <h3>🤖 AI Agent Development</h3>
              <p><strong>Build Intelligent Autonomous Agents</strong></p>
              <p>Create sophisticated AI agents capable of complex decision-making, multi-step reasoning, and autonomous task execution.</p>
            </div>
            
            <div className="feature-item">
              <h3>🔗 LLM Integration & Management</h3>
              <p><strong>Model-Agnostic AI Infrastructure</strong></p>
              <p>Seamlessly work with any Large Language Model through our unified API. Switch between models without code changes.</p>
            </div>
            
            <div className="feature-item">
              <h3>⚡ Prompt Engineering Studio</h3>
              <p><strong>Design, Test & Optimize Prompts</strong></p>
              <p>Professional tools for creating high-performance prompts with enterprise quality and version control.</p>
            </div>
            
            <div className="feature-item">
              <h3>🧠 Knowledge Base & RAG</h3>
              <p><strong>Retrieval-Augmented Generation</strong></p>
              <p>Build custom knowledge bases and enable AI to access your organization's intelligence with semantic search.</p>
            </div>
            
            <div className="feature-item">
              <h3>🚀 Enterprise Deployment</h3>
              <p><strong>Production-Ready Infrastructure</strong></p>
              <p>Deploy AI applications at scale with enterprise-grade reliability, auto-scaling, and 99.9% uptime SLA.</p>
            </div>
            
            <div className="feature-item">
              <h3>🔒 Security & Compliance</h3>
              <p><strong>Enterprise-Grade Protection</strong></p>
              <p>Comprehensive security features with SOC2, GDPR, HIPAA compliance and end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <h2>Professional Services</h2>
          
          <div className="capability-grid">
            <article className="capability-card">
              <div className="icon">🎯</div>
              <h3>AI Strategy Consulting</h3>
              <p>Work with our experts to develop a comprehensive AI strategy aligned with your business goals and maximize ROI.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">🏗️</div>
              <h3>Custom Development</h3>
              <p>Our engineers can build custom AI solutions tailored to your specific requirements and use cases.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">📚</div>
              <h3>Training & Workshops</h3>
              <p>Comprehensive training programs to upskill your team on AI development and best practices.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">🤝</div>
              <h3>24/7 Support</h3>
              <p>Dedicated support team available around the clock to ensure your AI applications run smoothly.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Schedule a consultation to discuss your AI needs</p>
          <Link to="/contact" className="btn btn-primary">Contact Sales</Link>
        </div>
      </section>
    </>
  );
};

export default Services;

