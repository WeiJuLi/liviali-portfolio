import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 當選單打開時禁止背景滾動
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // 處理連結點擊
  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">
          <a href="#home" onClick={handleLinkClick}>
            Livia Li
          </a>
        </h1>

        <button
          className="hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
        </button>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#experience" className="nav-link" onClick={handleLinkClick}>
            About Me
          </a>
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>
            Achievements & Projects
          </a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
