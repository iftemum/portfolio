import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from 'react'
import Model from './Model'

export default function App() {
  return (
    <Canvas className="canvas" camera={{ position: [-2.00, 2.41, 8.44] }}>
      <Scene />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}/>
    </Canvas>
  );
}

// This is the main scene component
const Scene = () => {
  // taking the viewport size and using it to create the walls and floor
  const { viewport } = useThree();
  const [lightsOn, setLightsOn] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        setLightsOn(prevState => !prevState);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
    <SceneLighting isOn={lightsOn} />
    <Floor viewport={viewport} />
    <Wall viewport={viewport} />
    <Suspense fallback={null}>
      <Model position={[0, -1, 0]} />
    </Suspense>    
    </>
  );
};

const SceneLighting = ({ isOn }) => {
  return (
    <>
      {/* Very dim ambient light always on to give just a hint of the desk */}
      <ambientLight intensity={0.05} /> 
      
      {/* Main lights only on when spacebar is pressed */}
      {isOn && (
        <>
          <ambientLight intensity={0.95} /> 
          <directionalLight
            position={[10, 10, 5]}
            intensity={4}
            castShadow
          />
          <pointLight position={[0, 5, 0]} intensity={0.5} />
          <spotLight
            position={[0.10, 4.77, 0.99]}   
            angle={0.7}                
            penumbra={0.3}             
            intensity={200}  
            color="#fff8e7"
            castShadow
            target-position={[0, -1, 2]} 
          />
        </>
      )}
    </>
  );
};

/**
 * Floor component creates a reflective surface using MeshReflectorMaterial
 * The floor is positioned slightly below 0 (at y=-1) which is a common practice
 * to make the ground level feel more natural in 3D spaces
 */
const Floor = ({ viewport }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      {/* Plane dimensions are doubled to ensure plenty of visible floor space */}
      <planeGeometry args={[viewport.width * 2, viewport.height * 2]} />
      <MeshReflectorMaterial
        // Blur settings create a more realistic reflection effect
        // citation: https://codesandbox.io/p/sandbox/lx2h8?file=%2Fsrc%2FApp.js%3A57%2C11
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        // Dark floor color to enhance reflection visibility
        color="#050505"
        // Moderate metalness for that polished look
        metalness={0.5}
      />
    </mesh>
  );
};


/**
 * Wall component creates three walls to form our room
 * Each wall is positioned and sized relative to the viewport
 * to maintain proper proportions regardless of screen size
 */
const Wall = ({ viewport }) => {

  // Calculate dimensions once to keep walls proportional to each other
  const wallHeight = viewport.height * 2;
  const wallWidth = viewport.width * 2;

  return (
    <group>
      {/* Back wall - positioned to align perfectly with the floor's back edge
          The z-position (-wallHeight + 16.6) was fine-tuned to eliminate any gaps */}
      <mesh position={[0, wallHeight / 2  - 5 , -wallHeight + 16 ]}>
        <planeGeometry args={[wallWidth, wallHeight]} />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Left wall - rotated 90 degrees around Y axis */}
      <mesh position={[-wallWidth / 2, wallHeight / 2 - 1 , 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[wallHeight, wallHeight]} />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Right wall - rotated -90 degrees around Y axis */}
      <mesh position={[wallWidth / 2, wallHeight / 2 - 1 , 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[wallHeight, wallHeight]} />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.8} />
      </mesh>
    </group>
  );
};
