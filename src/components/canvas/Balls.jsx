/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { skills_balls } from "../../data";
// import Loader from "../../utils/Loader";

// console.log("Tech img", skills_balls);
const Ball = (props) => {
  const [texture] = useTexture([props.iconImg]);
  /*   console.log('Texture img', texture); */
  return (
    <Float speed={1.35} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0.01, 0.02, 0.05]} />
      <mesh castShadow receiveShadow scale={2.45}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#f3f3f3"
          polygonOffset
          polygonOffsetFactor={100}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.02}
          map={texture}
          flatShading
        />
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <pointLight position={[2, 2, 6]} color="#fff" intensity={0.1} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball iconImg={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
// const Balls = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-4">
//       {skills_balls.map((skb, index) => (
//         <div className="h-28 w-28" key={index}>
//           <BallCanvas icon={skb.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Balls;

const Balls = () => {
  const estMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  let skillsToRender = estMobile ? skills_balls.slice(0, 8) : skills_balls;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {skillsToRender.map((skb, index) => (
        <div className="h-28 w-28" key={index}>
          <BallCanvas icon={skb.icon} />
        </div>
      ))}
    </div>
  );
};

export default Balls;
