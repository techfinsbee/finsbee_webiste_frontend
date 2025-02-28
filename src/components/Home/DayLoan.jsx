import React, { useState } from 'react';

const DayLoan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyle = {
    position: 'fixed',
    left: isOpen ? 0 : '-220px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '0 10px 10px 0',
    boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    transition: 'left 0.3s ease-in-out',
    width: '200px',
  };

  const buttonStyle = {
    position: 'fixed',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    left: isOpen ? '220px' : '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    zIndex: 1001,
    fontSize:"30px",
    transition: 'left 0.3s ease-in-out',
  };

  return (
    <>
      <div style={sidebarStyle}>
        <a 
          href="https://30daysloan.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#0066cc',
            fontWeight: 'bold',
            display: 'block',
            fontSize: '14px'
          }}
        >
          Click here to make repayment of your loan and access your past loan inquiries with FundsMama.
        </a>
      </div>
      <button 
        style={buttonStyle} 
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <span>{isOpen ? '<' : '>'}</span>
      </button>
    </>
  );
};

export default DayLoan;