import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const buttonStyle = {
    background: "rgba(0, 0, 0, 0.6)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "12px",
    padding: "12px 28px",
    fontSize: "16px",
    fontWeight: "500",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
  };

  const hoverStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    color: "#00ffcc",
    borderColor: "rgba(255, 255, 255, 0.6)",
    transform: "translateY(-2px)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Log In
    </button>
  );
};

export default LoginButton;
