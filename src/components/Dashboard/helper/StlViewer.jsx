import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const STLModel = ({ url }) => {
  const group = useRef();
  const geometry = useLoader(STLLoader, url);

  return (
    <group ref={group} dispose={null}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#d2d2d2" />
      </mesh>
    </group>
  );
};

const STLViewer = ({ assetData }) => {
  const stlUrl = assetData;

  return (
    <Canvas
      camera={{ position: [0, -5, 0], fov: 50 }}
      style={{ background: "#f8f8f8", height: "100%" }} // Set the background color and height
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <STLModel url={stlUrl} />
      <OrbitControls />
    </Canvas>
  );
};

export default STLViewer;
