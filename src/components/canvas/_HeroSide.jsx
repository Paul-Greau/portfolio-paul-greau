/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Html, OrbitControls } from "@react-three/drei";
import { MathUtils } from "three";
const material = new THREE.MeshStandardMaterial();
const geometries = [
  { geometry: new THREE.TetrahedronGeometry(2) },
  { geometry: new THREE.IcosahedronGeometry(2) },
  { geometry: new THREE.SphereGeometry(1.5, 32, 32) },
  { geometry: new THREE.BoxGeometry(2.5, 2.5, 2.5) },
];
function Geometries() {
  const n = 10;
  const randProps = useMemo(
    () =>
      Array.from(
        { length: n },
        () => geometries[Math.floor(Math.random() * geometries.length)]
      ),
    []
  );
  return randProps.map((prop, index) => {
    return (
      <Float key={index}>
        <mesh
          scale={MathUtils.randFloat(0.25, 0.5)}
          position={[
            MathUtils.randFloat(-8, 8),
            MathUtils.randFloat(-8, 8),
            MathUtils.randFloat(-8, 8),
          ]}
          geometry={prop.geometry}
          material={material}
        />
      </Float>
    );
  });
}
export default function HeroSide() {
  return (
    <Canvas camera={{ position: [0, 0, 22.5] }}>
      <hemisphereLight groundColor="black" />
      <Suspense fallback={null}>
        <Float floatIntensity={10} rotationIntensity={1}>
          <Html castShadow receiveShadow occlude="blending" transform>
            <iframe
              title="embed"
              width={700}
              height={500}
              src="https://paul-greau.netlify.app"
              frameBorder={0}
            />
          </Html>
        </Float>
        <Geometries />
        <mesh
          scale={4}
          position={[3, -9.161, -1.5]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 4, 1]} />
          <meshStandardMaterial color="black" roughness={0.75} />
        </mesh>
        <mesh
          scale={4}
          position={[-3, -9.161, -1]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial color="black" roughness={0.75} />
        </mesh>
        <ContactShadows
          position={[0, -9, 0]}
          opacity={0.7}
          scale={40}
          blur={1}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Suspense>
    </Canvas>
  );
}
