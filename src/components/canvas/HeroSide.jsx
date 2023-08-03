/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Html, OrbitControls } from "@react-three/drei";

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
