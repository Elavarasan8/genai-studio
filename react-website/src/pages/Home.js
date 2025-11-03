import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Visionet GenAI Studio",
    "url": "https://genaistudio.com",
    "logo": "https://genaistudio.com/logo.png",
    "description": "Unified Enterprise GenAI Platform with low-code development, 50+ pre-built solutions, and multi-LLM support",
    "sameAs": [
      "https://linkedin.com/company/visionet-systems",
      "https://twitter.com/visionetsystems"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-VISIONET",
      "contactType": "Customer Service",
      "email": "info@visionetsystems.com",
      "availableLanguage": ["English"]
    }
  };

  return (
    <>
      <SEO 
        title="Visionet GenAI Studio | Unified Enterprise GenAI Platform with Low-Code Development"
        description="Visionet GenAI Studio - Unified Enterprise GenAI Platform with low-code development, 50+ pre-built solutions, and multi-LLM support. Accelerate AI implementation with Platform Accelerator, Application Accelerator, and Solution Marketplace."
        keywords="Visionet GenAI Studio, Enterprise AI Platform, Low Code AI, GenAI Solutions, Multi-LLM Platform, RAG, AI Agents, LLM Orchestration, Azure OpenAI, AWS Bedrock"
        ogUrl="https://genaistudio.com/"
        canonical="https://genaistudio.com/"
        structuredData={structuredData}
      />
      
      <section className="hero">
        <div className="container">
          <h1>Visionet GenAI Studio</h1>
          <p className="hero-subtitle">Unified Enterprise GenAI Platform - Accelerate Your AI Journey with Low-Code Development & Pre-Built Solutions</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <h2>Three Powerful Components</h2>
          <p className="section-intro">Comprehensive GenAI Studio platform with accelerators, development tools, and marketplace solutions</p>
          
          <div className="capability-grid">
            <article className="capability-card">
              <div className="icon">🚀</div>
              <h3>GenAI Platform Accelerator</h3>
              <p>Enterprise blueprint for GenAI platform with integrated tools & technology. One-click deployment across cloud providers with Model Switchboard for LLM access across hyperscalers. AD Integrated with guardrails, LLMOPS, visibility, analytics & reporting.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">⚡</div>
              <h3>GenAI Application Accelerator</h3>
              <p>Low-code/No-code development platform with visual drag-and-drop interface. Build custom AI applications with RAG, AI agents & copilots. Prompt management, experimentation playground, and rapid prototyping capabilities for faster time-to-market.</p>
            </article>
            
            <article className="capability-card">
              <div className="icon">🎯</div>
              <h3>GenAI Solution Marketplace</h3>
              <p>50+ pre-built solutions ready for deployment. Industry-specific solutions (Retail, HCLS), productivity solutions (GTM, HR, Cloud copilots), and engineering solutions (Security, Data Analytics, ITOPS). One-click deployment with customization options.</p>
            </article>

            <article className="capability-card">
              <div className="icon">🔄</div>
              <h3>Multi-LLM Support</h3>
              <p>Seamlessly integrate with Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenAI, and open-source models. Model Switchboard enables intelligent routing and fallback mechanisms for optimal performance and cost efficiency.</p>
            </article>

            <article className="capability-card">
              <div className="icon">🔐</div>
              <h3>Enterprise Security & Governance</h3>
              <p>Active Directory integration, role-based access control, audit logging, and compliance frameworks. Built-in guardrails and responsible AI framework ensure safe and ethical AI deployment at enterprise scale.</p>
            </article>

            <article className="capability-card">
              <div className="icon">📊</div>
              <h3>LLM Orchestration & Monitoring</h3>
              <p>Comprehensive LLMOPS with real-time monitoring, cost tracking, performance analytics, and usage insights. Optimize AI operations with detailed metrics, alerting, and automated cost optimization recommendations.</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Core Platform Features</h2>
          <p className="section-intro">Comprehensive capabilities for enterprise AI development and deployment</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <h3>🎨 Low Code/No Code Development</h3>
              <p>Visual drag-and-drop interface for building AI applications without extensive coding. Accelerate development with pre-built templates, components, and workflows that reduce time-to-market from months to days.</p>
            </div>
            
            <div className="feature-item">
              <h3>🔗 LLM Orchestration Module</h3>
              <p>Intelligent routing and management of multiple LLM providers. Automatic fallback, load balancing, and cost optimization across Azure OpenAI, AWS Bedrock, Google Vertex AI, and more.</p>
            </div>
            
            <div className="feature-item">
              <h3>📚 Data Processing & Embeddings</h3>
              <p>Advanced RAG (Retrieval Augmented Generation) with vector databases, semantic search, and intelligent document processing. Support for structured and unstructured data sources.</p>
            </div>
            
            <div className="feature-item">
              <h3>🛡️ Responsible AI Framework</h3>
              <p>Built-in guardrails, content filtering, bias detection, and ethical AI governance. Ensure compliance with enterprise security and regulatory requirements including GDPR, SOC2, and HIPAA.</p>
            </div>
            
            <div className="feature-item">
              <h3>🧪 Experimentation Playground</h3>
              <p>Interactive environment for prompt engineering, model testing, and A/B experimentation. Version control and comparison tools for optimal AI performance tuning.</p>
            </div>
            
            <div className="feature-item">
              <h3>📊 Analytics & Cost Visibility</h3>
              <p>Real-time dashboards for usage analytics, performance metrics, and cost tracking. Detailed insights into token consumption, API calls, and ROI measurement for data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container">
          <h2>50+ Pre-Built Solutions</h2>
          <p className="section-intro">Ready-to-deploy AI solutions across industries, productivity, and engineering</p>
          
          <div className="use-case-grid">
            <div className="use-case">
              <h3>🏢 Industry Solutions</h3>
              <p><strong>Retail Intelligence:</strong> Customer analytics, demand forecasting, personalized recommendations, inventory optimization</p>
              <p><strong>Healthcare & Life Sciences:</strong> Clinical decision support, patient engagement, drug discovery, medical documentation</p>
              <p><strong>Financial Services:</strong> Risk assessment, fraud detection, regulatory compliance, customer service automation</p>
            </div>
            
            <div className="use-case">
              <h3>💼 Productivity Solutions</h3>
              <p><strong>GTM Copilot:</strong> Sales enablement, proposal generation, customer insights, competitive intelligence</p>
              <p><strong>Delivery & HR Copilot:</strong> Recruitment automation, employee onboarding, performance management, learning & development</p>
              <p><strong>Cloud Copilot:</strong> Infrastructure optimization, cost management, resource allocation, migration planning</p>
            </div>
            
            <div className="use-case">
              <h3>⚙️ Engineering Solutions</h3>
              <p><strong>Security Copilot:</strong> Threat detection, vulnerability assessment, incident response, compliance monitoring</p>
              <p><strong>Data & Analytics:</strong> Automated insights, report generation, data quality, predictive analytics</p>
              <p><strong>ITOPS:</strong> Incident management, root cause analysis, automated remediation, capacity planning</p>
            </div>
            
            <div className="use-case">
              <h3>🔍 Generative Search</h3>
              <p>Enterprise knowledge search with semantic understanding, context-aware responses, and citation tracking. Search across documents, databases, and applications with natural language queries.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Key Platform Benefits</h2>
          
          <div className="benefits-grid">
            <div className="benefit">
              <h3>⚡ 10X Faster Development</h3>
              <p>Reduce AI application development from months to weeks with low-code tools and pre-built components</p>
            </div>
            
            <div className="benefit">
              <h3>💰 60% Cost Reduction</h3>
              <p>Optimize LLM costs through intelligent routing, caching, and model selection strategies</p>
            </div>
            
            <div className="benefit">
              <h3>🔐 Enterprise-Grade Security</h3>
              <p>SOC2, GDPR, HIPAA compliance with end-to-end encryption and advanced access controls</p>
            </div>
            
            <div className="benefit">
              <h3>📈 Proven at Scale</h3>
              <p>Deployed across Fortune 500 companies handling millions of AI interactions daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Join leading enterprises using GenAI Studio to accelerate their AI journey</p>
          <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
        </div>
      </section>
    </>
  );
};

export default Home;

