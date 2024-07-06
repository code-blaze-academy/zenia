import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const ModelRender = () => {
  const geometry = useLoader(
    STLLoader,
    `${process.env.PUBLIC_URL}/downloads/gear.stl`,
  );

  return (
    <mesh geometry={geometry}>
      <meshPhongMaterial color="white" />
    </mesh>
  );
};

function STLViewer() {
  return (
    <Canvas style={{ height: "500px" }}>
      <Suspense fallback={"loading..."}>
        <ModelRender />
      </Suspense>
      <directionalLight position={[0, 10, 1]} />
      <OrbitControls panSpeed={0.5} />
    </Canvas>
  );
}

export default STLViewer;
