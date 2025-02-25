import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Scene } from "./components/3d/Scene";
import { WorkExperience } from "./components/layout/WorkExperience";
import { Bubbles } from "./components/effects/Bubbles";
import { TypeWriter } from "./components/effects/TypeWriter";
import { Projects } from "./components/layout/Projects";
import { Contact } from "./components/layout/Contact";
import { LoadingScreen } from "./components/effects/LoadingScreen";
import { useProgress } from "@react-three/drei";
import "./App.css";

function App() {
  const { progress } = useProgress();
  const [showContent, setShowContent] = useState(false);

  // 當進度達到 100% 時，顯示內容
  if (progress === 100 && !showContent) {
    setShowContent(true);
  }

  return (
    <>
      <LoadingScreen progress={progress} />
      <div className={`app-container ${showContent ? "show" : ""}`}>
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <Bubbles />
          <h1 className="hero-title">Hi, I'm Livia Li.</h1>
          <TypeWriter
            text="Navigate ambiguity, innovate with clarity"
            delay={100}
            className="hero-slogan"
          />

          <div className="canvas-container">
            <Canvas>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          </div>
        </section>

        <WorkExperience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
