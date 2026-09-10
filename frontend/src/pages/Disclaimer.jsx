import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#0f2341',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const Disclaimer = () => {
  return (
    <div style={textualStyle}>
      <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
        Legal & Site Disclaimer
      </h2>
      
      <p style={{ marginBottom: '20px' }}>
        The data, interfaces, and graphical components represented across the Shopvilla platform are provided for demonstration and online shopping use.
      </p>

      <h4 style={{ color: '#38bdf8', marginTop: '25px', marginBottom: '10px' }}>1. Accuracy of Materials</h4>
      <p style={{ marginBottom: '15px' }}>
        The materials across Shopvilla may include dynamic, typographical, or illustrative product elements. Product images and descriptions should be verified before purchase.
      </p>

      <h4 style={{ color: '#38bdf8', marginTop: '25px', marginBottom: '10px' }}>2. Payment Processing Restrictions</h4>
      <p style={{ marginBottom: '15px' }}>
        No authentic financial variables are handled natively within this environment. All payment endpoints forcefully bind exclusively to external testing-based networks (Sandbox Razorpay environments). No exact deductibles exist.
      </p>

      <h4 style={{ color: '#38bdf8', marginTop: '25px', marginBottom: '10px' }}>3. External Binding Links</h4>
      <p style={{ marginBottom: '15px' }}>
        Shopvilla is not responsible for the content, availability, or behavior of third-party services linked from the platform.
      </p>

      <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.9rem' }}>
        By interacting natively within this codebase, you unconditionally signal acceptance bounded by these parameters efficiently.
      </p>
    </div>
  );
};

export default Disclaimer;

