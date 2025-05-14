import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ onLogout }) => {
  const { user, logout } = useAuth0();

  // Extract name from the user object
  const getUserName = () => {
    if (user) {
      // Use user name directly if available
      return user.name || user.given_name || user.email.split('@')[0];
    }
    return "Guest";
  };

  const profileName = getUserName();

  return (
    <nav
      style={{
        width: "100vw",
        height: "64px",
        background: "rgba(22,22,22,0.96)", // Carbon dark with slight transparency
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        borderBottom: "1px solid #262626",
      }}
    >
      <span
        style={{
          fontWeight: 800,
          fontSize: "1.5rem",
          background: "linear-gradient(90deg, #00FFD0 0%, #00B4FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "0.02em",
        }}
      >
        MailXAccelerator AI
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontWeight: 600, color: "#F0F0F0" }}>
          {profileName}
        </span>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          style={{
            background: "linear-gradient(90deg, #00FFD0 0%, #00B4FF 100%)",
            color: "#161616",
            fontWeight: 700,
            border: "none",
            borderRadius: "20px",
            padding: "8px 22px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0px 2px 8px rgba(0,180,255,0.12)",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.07)";
            e.target.style.boxShadow = "0px 6px 18px rgba(0,180,255,0.18)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0px 2px 8px rgba(0,180,255,0.12)";
          }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
