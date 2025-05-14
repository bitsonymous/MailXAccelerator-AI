import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ BrowserRouter
import LandingPage from "./pages/LandingPage"; // Correct path
import HomePage from "./pages/HomePage"; // Correct path
import SendEmailsPage from "./pages/SendEmailsPage";
function App() {
  return (
    <Router> {/* Use BrowserRouter here */}
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page */}
        <Route path="/home" element={<HomePage />} /> {/* Home page */}
        <Route path="/send-emails" element={<SendEmailsPage />} /> {/* Home page */}
        {/* You can add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
