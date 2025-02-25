import { useState, useEffect } from "react";
import "../styles/LoadingScreen.css";

export function LoadingScreen({ progress = 0 }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 500); // 添加一個小延遲，使過渡更順滑
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!showLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
