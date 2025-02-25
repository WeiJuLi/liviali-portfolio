import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model() {
  const { scene } = useGLTF("/liviali-portfolio/assets/models/chicken.glb"); 
  const modelRef = useRef();

  useFrame(({ clock }) => {
    if (modelRef.current) {

      const y = Math.sin(clock.getElapsedTime()) * 0.1; // 0.1 控制飄動幅度
      modelRef.current.position.y = y;

      // 左右搖擺
      const x = Math.sin(clock.getElapsedTime() * 0.5) * 0.05; // 0.05 控制搖擺幅度
      modelRef.current.position.x = x;

      // 旋轉
      modelRef.current.rotation.y = (3 * Math.PI) / 2 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive 
        object={scene} 
        scale={1.8} 
      />
    </group>
  );
}

export function Scene() {
  return (
    <>
      <Model />
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[0, 0, 35]} 
        intensity={0.2} 
        color="#FFFFFF" 
        target-position={[0, 0, 30]}
      />

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
      />
    </>
  );
}