import { useState, useEffect } from "react";
import "../styles/TypeWriter.css";

export function TypeWriter({ text, delay = 100, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [text, delay, currentIndex, isTyping]);

  return (
    <div className={`typewriter ${className}`}>
      {displayText}
      <span className="cursor"></span>
    </div>
  );
}
