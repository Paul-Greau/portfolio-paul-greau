/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const Polyhedron = ({ position, polyhedron }) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  console.log(polyhedron);

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
    new THREE.BoxGeometry(),
    new THREE.DodecahedronGeometry(0.785398),
    new THREE.SphereGeometry(0.785398),
  ];

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[0, 0, 0]} polyhedron={polyhedron} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CanvasBox;
