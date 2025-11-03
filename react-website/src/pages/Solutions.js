import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Solutions = () => {
  return (
    <>
      <SEO 
        title="Solutions - GenAI Studio | Industry-Specific AI Applications"
        description="GenAI Studio Solutions - Industry-specific AI solutions for Customer Service, Sales, Marketing, HR, Legal, Healthcare, Finance, and more."
        keywords="AI Solutions, Industry AI, Customer Service AI, Sales AI, HR Automation"
        canonical="https://genaistudio.com/solutions"
      />
      
      <section className="hero">
        <div className="container">
          <h1>Industry Solutions</h1>
          <p className="hero-subtitle">AI-Powered Solutions Tailored to Your Industry</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Transform Your Industry with AI</h2>
          <p className="section-intro">Proven solutions designed for specific industry challenges and use cases</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <h3>🏢 Customer Service & Support</h3>
              <p><strong>Intelligent Customer Support Automation</strong></p>
              <p>Transform customer service with AI agents that provide instant, accurate support 24/7 with 80% query automation and 70% cost reduction.</p>
            </div>
            
            <div className="feature-item">
              <h3>📈 Sales & Marketing</h3>
              <p><strong>AI-Powered Revenue Growth</strong></p>
              <p>Accelerate sales and enhance marketing effectiveness with intelligent automation, lead qualification, and personalized content generation.</p>
            </div>
            
            <div className="feature-item">
              <h3>💼 Human Resources</h3>
              <p><strong>Intelligent Talent Management</strong></p>
              <p>Streamline HR processes with AI-powered resume screening, interview scheduling, and personalized onboarding journeys.</p>
            </div>
            
            <div className="feature-item">
              <h3>⚖️ Legal & Compliance</h3>
              <p><strong>Automated Legal Intelligence</strong></p>
              <p>Accelerate legal work with AI-powered contract analysis, compliance monitoring, and automated document drafting.</p>
            </div>
            
            <div className="feature-item">
              <h3>🏥 Healthcare</h3>
              <p><strong>Patient Care & Administrative Efficiency</strong></p>
              <p>Improve patient outcomes with AI-powered triage, appointment scheduling, and HIPAA-compliant medical record analysis.</p>
            </div>
            
            <div className="feature-item">
              <h3>💰 Financial Services</h3>
              <p><strong>Intelligent Financial Operations</strong></p>
              <p>Enhance financial services with AI-driven fraud detection, risk assessment, and 24/7 banking support.</p>
            </div>
            
            <div className="feature-item">
              <h3>🛒 Retail & E-Commerce</h3>
              <p><strong>Personalized Shopping Experience</strong></p>
              <p>Drive sales with AI-powered product recommendations, virtual shopping assistants, and inventory optimization.</p>
            </div>
            
            <div className="feature-item">
              <h3>🏭 Manufacturing</h3>
              <p><strong>Smart Manufacturing Operations</strong></p>
              <p>Optimize production with predictive maintenance, AI-powered quality control, and supply chain optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <h2>Success Stories</h2>
          
          <div className="capability-grid">
            <article className="capability-card">
              <h3>Fortune 500 Retailer</h3>
              <p><strong>70% cost reduction</strong> in customer support with AI automation handling 100,000+ monthly tickets.</p>
            </article>
            
            <article className="capability-card">
              <h3>Global Financial Services</h3>
              <p><strong>50% faster</strong> loan processing with AI-powered document analysis and verification.</p>
            </article>
            
            <article className="capability-card">
              <h3>Healthcare Provider</h3>
              <p><strong>40% improvement</strong> in patient satisfaction with 24/7 AI-powered triage and scheduling.</p>
            </article>
            
            <article className="capability-card">
              <h3>Tech Company</h3>
              <p><strong>3x increase</strong> in lead conversion with AI-powered sales intelligence and personalization.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Industry?</h2>
          <p>Discover how GenAI Studio can drive results for your organization</p>
          <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
};

export default Solutions;

