import React from 'react';

export default function Logo({ className }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      marginLeft: '20px' // Move logo to the right
    }}>
      <img 
        src="/logo/logo-light.svg" 
        alt="Demiurg Logo" 
        className={className} 
        data-light 
        style={{ 
          height: '40px', // Make logo bigger
          width: 'auto'
        }} 
      />
      <img 
        src="/logo/logo-dark.svg" 
        alt="Demiurg Logo" 
        className={className} 
        data-dark 
        style={{ 
          height: '40px', // Make logo bigger
          width: 'auto'
        }} 
      />
    </div>
  );
}