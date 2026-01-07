import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
        setCurrentVideoIndex(0); // Reset video index when changing projects
    };

    const handleVideoSwitch = (direction) => {
        const currentProject = myProjects[selectedProjectIndex];
        if (!currentProject.textures) return;

        setCurrentVideoIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? currentProject.textures.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === currentProject.textures.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];
    const currentTexture = currentProject.textures
        ? currentProject.textures[currentVideoIndex].path
        : currentProject.texture;

    return (
        <section id="projects" className="c-space my-20">
            <p className="head-text">My Selected Work</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full max-w-7xl mx-auto">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 min-h-[600px]">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} className="w-6 h-6 object-contain" />
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full relative">
                    {/* Video Switcher - Only for StarCraft II project */}
                    {currentProject.textures && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-3 bg-black-300/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                            <button
                                onClick={() => handleVideoSwitch('previous')}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                                aria-label="Previous video">
                                <img src="/assets/left-arrow.png" alt="previous" className="w-4 h-4" />
                            </button>
                            <span className="text-white-600 text-sm font-medium min-w-20 text-center">
                                {currentProject.textures[currentVideoIndex].name}
                            </span>
                            <button
                                onClick={() => handleVideoSwitch('next')}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                                aria-label="Next video">
                                <img src="/assets/right-arrow.png" alt="next" className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentTexture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;