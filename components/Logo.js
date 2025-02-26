import React from 'react';

const Logo = () => {
  return (
    <div style={{ display: 'flex', paddingLeft: '20px' }}>
      {/* Light mode logo - directly embedding SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="120" 
        height="40" 
        viewBox="0 0 120 40" 
        fill="none"
        style={{ display: 'var(--display-light)' }}
      >
        {/* Copy your logo SVG content here for light mode */}
        {/* This is where your actual logo SVG content goes */}
        <text x="0" y="25" fill="#1C3943" fontSize="24">Demiurg</text>
      </svg>
      
      {/* Dark mode logo - directly embedding SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="120" 
        height="40" 
        viewBox="0 0 120 40" 
        fill="none"
        style={{ display: 'var(--display-dark)' }}
      >
        {/* Copy your logo SVG content here for dark mode */}
        {/* This is where your actual logo SVG content goes */}
        <text x="0" y="25" fill="#598a9c" fontSize="24">Demiurg</text>
      </svg>
    </div>
  );
};

export default Logo;