import React from "react";
import LoginButton from "../components/LoginButton"; // ✅ correct path

const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #161616 0%, #262626 100%)", // Carbon dark theme
        color: "#F0F0F0", // Off-white for high contrast
        fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "0.02em",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          marginBottom: "0.5em",
          background: "linear-gradient(90deg, #00FFD0 0%, #00B4FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome to MailXAccelerator AI
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          color: "#B0B0B0", // Medium gray for secondary text
          marginBottom: "2em",
          fontWeight: 500,
        }}
      >
        AI-powered email automation
      </p>
      <LoginButton />
    </div>
  );
};

export default LandingPage;
