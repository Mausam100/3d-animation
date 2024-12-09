import React, { useRef } from "react";
import Scene from "./Scene";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

function App() {
  const modelTriggerRef = useRef();

  return (
    <main className="main">
      <div className="h-screen">
        <Canvas className="bg-black relative" gl={{ antialias: true }}>
          <ambientLight color={"blue"} intensity={2} />
          <directionalLight intensity={3} position={[0, 3, 2]} />
          <Environment preset="city" />
          <Scene />
        </Canvas>
      </div>
      <div className="h-screen" ref={modelTriggerRef}>
        <Canvas className="bg-black relative" gl={{ antialias: true }}>
          <ambientLight color={"blue"} intensity={2} />
          <directionalLight intensity={3} position={[0, 3, 2]} />
          <Environment preset="city" />
          <Model triggerRef={modelTriggerRef} />
        </Canvas>
      </div>
    </main>
  );
}

export default App;
