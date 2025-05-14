import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust path as needed

const HomePage = () => {
  const navigate = useNavigate();
  const profileName = "Alex"; // Replace with actual user name

  const handleSendEmails = () => {
    navigate('/send-emails');
  };

  const handleHistory = () => {
    navigate('/history');
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear tokens, redirect)
    navigate('/login');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #161616 0%, #262626 100%)',
        color: '#F0F0F0',
        fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Navbar profileName={profileName} onLogout={handleLogout} />
      <div
        style={{
          marginTop: '120px',
          display: 'flex',
          flexDirection: 'row', // Changed to row for buttons in the same line
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px', // Equal spacing between buttons
        }}
      >
        <button
          onClick={handleSendEmails}
          style={{
            background: 'linear-gradient(90deg, #00FFD0 0%, #00B4FF 100%)',
            color: '#161616',
            fontWeight: 700,
            fontSize: '18px',
            padding: '15px 40px',
            margin: '10px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 4px 16px rgba(0, 255, 208, 0.12)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            outline: 'none',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0px 8px 24px rgba(0, 255, 208, 0.18)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0px 4px 16px rgba(0, 255, 208, 0.12)';
          }}
        >
          Send Emails
        </button>
        <button
          onClick={handleHistory}
          style={{
            background: 'linear-gradient(90deg, #00B4FF 0%, #00FFD0 100%)',
            color: '#161616',
            fontWeight: 700,
            fontSize: '18px',
            padding: '15px 40px',
            margin: '10px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 4px 16px rgba(0, 180, 255, 0.12)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            outline: 'none',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0px 8px 24px rgba(0, 180, 255, 0.18)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0px 4px 16px rgba(0, 180, 255, 0.12)';
          }}
        >
          History
        </button>
      </div>
    </div>
  );
};

export default HomePage;
