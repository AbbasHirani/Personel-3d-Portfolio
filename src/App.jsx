import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import React, { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff00" emissive="#f0f0f0f0" />
      <Sparkles count={100} size={5} scale={1} color="orange" speed={1} noise={1} />
    </mesh>
  );
};


const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
    <OrbitControls enableZoom enablePan enableRotate />
    <directionalLight position={[1, 1, 1]} intensity={1} />
    <color attach="background" args={["#f0f0f0"]} />
    <RotatingCube />
    
    </Canvas>
  )
};

export default App;