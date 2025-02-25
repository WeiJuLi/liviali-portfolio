import { useEffect, useState } from "react";
import "../styles/Bubbles.css";

export function Bubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * 100 + 50; // 50-150px
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight + size;
      const endX = Math.random() * window.innerWidth;
      const endY = -size;
      const duration = Math.random() * 15 + 10; // 10-25s

      return {
        id: Math.random(),
        size,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          "--start-x": `${startX}px`,
          "--start-y": `${startY}px`,
          "--end-x": `${endX}px`,
          "--end-y": `${endY}px`,
          "--duration": `${duration}s`,
        },
      };
    };

    // 初始化泡泡
    const initialBubbles = Array.from({ length: 15 }, createBubble);
    setBubbles(initialBubbles);

    // 定期添加新泡泡
    const interval = setInterval(() => {
      setBubbles((prev) => {
        // 移除已完成動畫的泡泡
        const filtered = prev.filter((bubble) => {
          const element = document.getElementById(`bubble-${bubble.id}`);
          return (
            element && element.getBoundingClientRect().bottom > -bubble.size
          );
        });

        // 保持泡泡數量在10-15個之間
        if (filtered.length < 10) {
          return [...filtered, createBubble()];
        }
        return filtered;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bubbles-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          id={`bubble-${bubble.id}`}
          className="bubble"
          style={bubble.style}
        />
      ))}
    </div>
  );
}
