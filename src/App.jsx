import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useState, useEffect } from 'react'
import Model from './Model'

// Add this new component
const WelcomeMessage = () => {
  return (
    <Html fullscreen>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '2rem',
        textAlign: 'center',
        fontFamily: 'monospace',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        animation: 'pulse 2s infinite',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        Welcome to Iftemum's Portfolio
        <div style={{
          fontSize: '1rem',
          marginTop: '1rem',
          opacity: 0.8
        }}>
          Press SPACE to illuminate
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </Html>
  );
};

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
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        // if the lights are on, turn them off and vice versa
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
    <Suspense fallback={
      <Html fullscreen>
        <div style={{
          color: 'white',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          Entering the void...
        </div>
      </Html>
    }>
      <Model 
        position={[0, -1, 0]} 
        onLoaded={() => setLoaded(true)}
      />
      {loaded && !lightsOn && <WelcomeMessage />}
    </Suspense>    
    </>
  );
};


/**
 * SceneLighting component handles all the lighting in the scene
 * It creates a moody atmosphere with two states:
 * 1. Dark Mode: Only a very dim ambient light (0.05 intensity) to barely show the desk silhouette
 * 2. Light Mode: Multiple lights that fully illuminate the scene when spacebar is pressed
 * 
 * The lighting setup includes:
 * - A base ambient light that's always on
 * - A brighter ambient light for overall scene illumination
 * - A directional light to create shadows and depth
 * - A point light for general room lighting
 * - A spotlight focused on the desk area for dramatic emphasis
 * 
 * @param {Object} props
 * @param {boolean} props.isOn - Controls whether the main lights are on or off
 */
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
