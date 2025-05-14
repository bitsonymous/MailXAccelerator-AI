import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Adjust the path

const SendEmailsPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadStatus('');
  };

const handleUpload = async () => {
  if (!selectedFile) {
    setUploadStatus('Please select a file first.');
    return;
  }

  const formData = new FormData();
  formData.append('file', selectedFile);  // <-- fixed here

  try {
    const response = await axios.post('http://localhost:8000/upload_resume', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setUploadStatus('Upload successful!');
    console.log(response.data);
  } catch (error) {
    console.error('Upload error:', error);
    setUploadStatus('Upload failed. Please try again.');
  }
};

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #161616 0%, #262626 100%)',
        color: '#F0F0F0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px',
      }}
    >
      <Navbar profileName="User" onLogout={() => {}} />

      <h2 style={{ marginBottom: '20px' }}>Upload Resume to Send Emails</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        style={{
          backgroundColor: '#f0f0f0',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          color: '#000',
        }}
      />

      <button
        onClick={handleUpload}
        style={{
          background: 'linear-gradient(90deg, #00FFD0 0%, #00B4FF 100%)',
          color: '#161616',
          fontWeight: 700,
          fontSize: '16px',
          padding: '12px 30px',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          transition: '0.2s ease',
        }}
      >
        Upload & Send
      </button>

      {uploadStatus && (
        <p style={{ marginTop: '20px', color: uploadStatus.includes('successful') ? 'lightgreen' : 'tomato' }}>
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

export default SendEmailsPage;
