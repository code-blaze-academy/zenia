import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function GLTFModel({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function App() {
  const orbitRef = useRef();
  const cameraRef = useRef();

  const handleZoomOut = () => {
    if (cameraRef.current) {
      cameraRef.current.position.z += 10; // Zoom out by moving the camera farther away
      orbitRef.current.update(); // Update OrbitControls
    }
  };

  return (
    <>
      <Canvas
        camera={{ position: [0, 2, 50], fov: 50 }} // Initial camera position set far from the model
        style={{ background: "#f8f8f8", height: "100vh", width: "100vw" }}
        onCreated={({ camera }) => (cameraRef.current = camera)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GLTFModel url="/path-to-your-model.gltf" />
        <OrbitControls ref={orbitRef} />
      </Canvas>
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </>
  );
}
