/* eslint-disable react/no-unknown-property */
import { useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

import Loader from "../Loader/Loader";

const Polyhedron = ({ position, polyhedron }) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.5 * delta;
    ref.current.rotation.y += 0.25 * delta;
  });

  return (
    <mesh
      scale={1.5}
      position={position}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={"black"} wireframe />
    </mesh>
  );
};

const CanvasBox = () => {
  const polyhedron = [
    new THREE.DodecahedronGeometry(0.785398),
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
  ];

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[0, 0, 0]} polyhedron={polyhedron} />
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default CanvasBox;
