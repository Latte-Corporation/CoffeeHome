"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

function RotatingMokaPot({ ref }) {
  const { scene } = useGLTF("/assets/moka-pot.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust rotation speed
    }
  });

  return <primitive object={scene} position={[0, -2, 0]} />;
}

export default function MokaPot() {
  const ref = useRef();

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-2, 10, 20], fov: 25 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 0]} intensity={5} />
      <directionalLight position={[-10, 10, 5]} intensity={5} />
      <directionalLight position={[-10, 20, 0]} intensity={5} />
      <directionalLight position={[0, -10, 0]} intensity={5} />
      <directionalLight position={[-5, 5, 0]} intensity={5} />
      <directionalLight position={[0, 3, 0]} intensity={5} />
      <Suspense fallback={null}>
        <group ref={ref}>
          <RotatingMokaPot ref={ref} />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            target={[0, 0, 0]}
          />
        </group>
      </Suspense>
    </Canvas>
  );
}
