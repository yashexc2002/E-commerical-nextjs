import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#0f2341',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    padding: '10px 20px',
    background: '#102a4c',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/dp.webp"
        alt="Yash Oberoi"
        style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #38bdf8', marginBottom: '20px', boxShadow: '0 4px 20px rgba(56, 189, 248, 0.4)' }}
      />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About Me</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#38bdf8', marginBottom: '15px' }}>Yash Oberoi</h3>

      <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        <strong>Welcome to Shopvilla!</strong> I am Yash Oberoi, and this is my online shopping platform for discovering quality products at great prices.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <a href="https://www.linkedin.com/in/yash-oberoi-12547a370" target="_blank" rel="noreferrer" aria-label="Visit Yash Oberoi on LinkedIn" style={{ ...socialBtnStyle, background: 'rgba(10, 102, 194, 0.2)', borderColor: '#0a66c2', color: '#7dd3fc' }}>
          <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', marginRight: '8px', borderRadius: '4px', background: '#0a66c2', color: '#fff', fontWeight: '700', fontFamily: 'Arial, sans-serif' }}>in</span>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
