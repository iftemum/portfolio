import { Canvas, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";

export default function App() {
  return (
    <Canvas className="canvas">
      <ambientLight intensity={100} />
      <directionalLight position={[5, 5, 5]} color="white" />
      <Floor />
    </Canvas>
  );
}

const Floor = () => {
  const {viewport} = useThree()
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