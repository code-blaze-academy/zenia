import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function GLTFModel({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function App() {
  const orbitRef = useRef();
  const cameraRef = useRef();

  const handleZoomIn = () => {
    if (cameraRef.current) {
      cameraRef.current.position.z -= 1; // Zoom in
      orbitRef.current.update(); // Update OrbitControls
    }
  };

  const handleZoomOut = () => {
    if (cameraRef.current) {
      cameraRef.current.position.z += 1; // Zoom out
      orbitRef.current.update(); // Update OrbitControls
    }
  };

  const handlePanLeft = () => {
    if (cameraRef.current) {
      cameraRef.current.position.x -= 1; // Pan left
      orbitRef.current.update(); // Update OrbitControls
    }
  };

  const handlePanRight = () => {
    if (cameraRef.current) {
      cameraRef.current.position.x += 1; // Pan right
      orbitRef.current.update(); // Update OrbitControls
    }
  };

  const handleMoveUp = () => {
    if (cameraRef.current) {
      cameraRef.current.position.y += 1; // Move up
      orbitRef.current.update(); // Update OrbitControls
    }
  };

  const handleMoveDown = () => {
    if (cameraRef.current) {
      cameraRef.current.position.y -= 1; // Move down
      orbitRef.current.update(); // Update OrbitControls
    }
  };

  return (
    <>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 50 }} // Initial camera position
        style={{ background: "#f8f8f8", height: "100vh", width: "100vw" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GLTFModel url="/path-to-your-model.gltf" />
        <OrbitControls ref={orbitRef} />
      </Canvas>
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handlePanLeft}>Pan Left</button>
        <button onClick={handlePanRight}>Pan Right</button>
        <button onClick={handleMoveUp}>Move Up</button>
        <button onClick={handleMoveDown}>Move Down</button>
      </div>
    </>
  );
}
