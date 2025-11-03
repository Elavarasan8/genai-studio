import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact Us - GenAI Studio | Enterprise AI Platform"
        description="Contact GenAI Studio - Get in touch with our team for demos, consultations, and enterprise AI solutions. Email, phone, or schedule a meeting."
        keywords="Contact GenAI Studio, AI Consultation, Demo, Enterprise AI Support"
        canonical="https://genaistudio.com/contact"
      />
      
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">Let's Transform Your Business with AI</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2>Get in Touch</h2>
            <p className="section-intro">Whether you're ready to get started or just want to learn more, we're here to help.</p>
            
            <div className="capability-grid" style={{marginTop: '3rem'}}>
              <article className="capability-card">
                <div className="icon">📧</div>
                <h3>Email Us</h3>
                <p><strong>General Inquiries:</strong><br />info@genaistudio.com</p>
                <p><strong>Sales:</strong><br />sales@genaistudio.com</p>
              </article>
              
              <article className="capability-card">
                <div className="icon">📞</div>
                <h3>Call Us</h3>
                <p><strong>North America:</strong><br />+1-555-GENAI-01</p>
                <p><strong>Support:</strong><br />Available 24/7</p>
              </article>
            </div>
            
            <div style={{marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--bg-gray)', borderRadius: 'var(--radius-lg)'}}>
              <h3 style={{marginBottom: '1.5rem', textAlign: 'center'}}>Schedule a Demo</h3>
              <p style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem'}}>
                See GenAI Studio in action with a personalized demo tailored to your use case.
              </p>
              
              <form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto'}}>
                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="name" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '1rem'}}
                  />
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '1rem'}}
                  />
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="company" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Company *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '1rem'}}
                  />
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="phone" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '1rem'}}
                  />
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="useCase" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Primary Use Case *</label>
                  <select 
                    id="useCase" 
                    name="useCase" 
                    required 
                    value={formData.useCase}
                    onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '1rem'}}
                  >
                    <option value="">Select a use case</option>
                    <option value="customer-service">Customer Service Automation</option>
                    <option value="sales-marketing">Sales & Marketing</option>
                    <option value="hr">HR & Recruitment</option>
                    <option value="legal">Legal & Compliance</option>
                    <option value="analytics">Data Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="message" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Tell us about your project</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    style={{width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '1rem', resize: 'vertical'}}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{width: '100%', cursor: 'pointer'}}>
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <h2>Office Locations</h2>
          
          <div className="capability-grid">
            <article className="capability-card">
              <h3>🇺🇸 United States</h3>
              <p><strong>San Francisco HQ</strong><br />
              123 AI Innovation Drive<br />
              San Francisco, CA 94102</p>
            </article>
            
            <article className="capability-card">
              <h3>🇬🇧 United Kingdom</h3>
              <p><strong>London Office</strong><br />
              456 Tech Street<br />
              London, EC2A 4BX</p>
            </article>
            
            <article className="capability-card">
              <h3>🇸🇬 Singapore</h3>
              <p><strong>Asia Pacific HQ</strong><br />
              789 Marina Boulevard<br />
              Singapore 018980</p>
            </article>
            
            <article className="capability-card">
              <h3>🇩🇪 Germany</h3>
              <p><strong>Berlin Office</strong><br />
              101 Innovation Platz<br />
              Berlin, 10115</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

