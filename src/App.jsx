import { Canvas, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";

export default function App() {
  return (
    <Canvas className="canvas">
      <Scene />
    </Canvas>
  );
}

// This is the main scene component
const Scene = () => {
  // taking the viewport size and using it to create the walls and floor
  const { viewport } = useThree(); 

  return (
    <>
      <ambientLight intensity={100} />
      <directionalLight position={[5, 5, 5]} color="white" />
      <axesHelper args={[100]} />
      <Floor viewport={viewport} />
      <Wall viewport={viewport} />
    </>
  );
};

const Floor = ({ viewport }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[viewport.width * 2, viewport.height * 2]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
      />
    </mesh>
  );
};

const Wall = ({ viewport }) => {
  const wallHeight = viewport.height * 2;
  const wallWidth = viewport.width * 2;

  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, wallHeight / 2  - 1 , -wallHeight + 7.8 ]}>
        <planeGeometry args={[wallWidth, wallHeight]} />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-wallWidth / 2, wallHeight / 2 - 1 , 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[wallHeight, wallHeight]} />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Right wall */}
      <mesh position={[wallWidth / 2, wallHeight / 2 - 1 , 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[wallHeight, wallHeight]} />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.8} />
      </mesh>
    </group>
  );
};
