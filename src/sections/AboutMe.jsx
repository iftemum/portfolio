import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [isProfileFlipped, setIsProfileFlipped] = useState(false);

    useGSAP(() => {
        gsap.fromTo(
            '.macbook-frame',
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-section',
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section id="about" className="c-space my-20">
            <p className="head-text mb-12">About Me</p>

            {/* MacBook Frame */}
            <div className="macbook-frame max-w-6xl mx-auto">
                {/* MacBook Top Bar */}
                <div className="bg-gray-800 rounded-t-xl p-3 border border-gray-700">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>

                {/* Screen Content - Fixed Height */}
                <div className="bg-black-200 border-x border-gray-700 h-[600px] flex flex-col">
                    {/* Navigation Tabs */}
                    <div className="flex border-b border-gray-700 bg-black-300 shrink-0">
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                                activeTab === 'about'
                                    ? 'text-white border-b-2 border-blue-500 bg-black-200'
                                    : 'text-gray-400 hover:text-white hover:bg-black-200'
                            }`}
                        >
                            📋 About Me
                        </button>
                        <button
                            onClick={() => setActiveTab('resume')}
                            className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                                activeTab === 'resume'
                                    ? 'text-white border-b-2 border-blue-500 bg-black-200'
                                    : 'text-gray-400 hover:text-white hover:bg-black-200'
                            }`}
                        >
                            📄 Resume
                        </button>
                    </div>

                    {/* Content Area - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-8">
                        {activeTab === 'about' ? (
                            <div className="github-profile">
                                {/* Profile Header */}
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    {/* Profile Picture */}
                                    <div className="shrink-0">
                                        <div
                                            className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 bg-black-300 cursor-pointer relative"
                                            style={{ perspective: '1000px' }}
                                            onMouseEnter={() => setIsProfileFlipped(true)}
                                            onMouseLeave={() => setIsProfileFlipped(false)}
                                        >
                                            <div
                                                className="w-full h-full relative transition-transform duration-700 ease-in-out"
                                                style={{
                                                    transformStyle: 'preserve-3d',
                                                    transform: isProfileFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                                }}
                                            >
                                                {/* Front - Regular Profile Picture */}
                                                <img
                                                    src="/images/logos/profilePic.jpeg"
                                                    alt="Profile"
                                                    className="w-full h-full object-cover absolute inset-0"
                                                    style={{ backfaceVisibility: 'hidden' }}
                                                />
                                                {/* Back - Sketch Profile Picture */}
                                                <img
                                                    src="/images/logos/sketchProfilePic.jpeg"
                                                    alt="Sketch Profile"
                                                    className="w-full h-full object-cover absolute inset-0"
                                                    style={{
                                                        backfaceVisibility: 'hidden',
                                                        transform: 'rotateY(180deg)'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile Info */}
                                    <div className="flex-1">
                                        <div className="mb-6">
                                            <h2 className="text-3xl font-bold text-white mb-2">Iftemum Raian</h2>
                                            <div className="flex items-center gap-3 mb-4">
                                                <p className="text-xl text-gray-400">@iftemumraian</p>
                                                <span className="text-gray-500">•</span>
                                                <p className="text-sm text-gray-400 bg-black-300 px-3 py-1 rounded-full border border-gray-700">He/Him</p>
                                            </div>

                                            <p className="text-white-50 leading-relaxed mb-6">
                                                Recent Computer Science Graduate | Full Stack Developer | Mobile App Developer 
                                                <br />
                                                <br />
                                                I graduated from University of Alberta in December 2026 with a BSc. Specialization in Computing Science. I specialized in algorithms, data structures, software quality and software engineering. Currently my mission is to build sustainable projects to make a positive impact on the world. I believe in the power of technology to create meaningful change, one project at a time.
                                                Currently experimenting with solutions for everyday waste reduction.
                                            </p>
                                        </div>

                                        {/* Stats */}
                                        {/* <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="bg-black-300 p-4 rounded-lg border border-gray-700 text-center">
                                                <p className="text-2xl font-bold text-white">50+</p>
                                                <p className="text-sm text-gray-400">Projects</p>
                                            </div>
                                            <div className="bg-black-300 p-4 rounded-lg border border-gray-700 text-center">
                                                <p className="text-2xl font-bold text-white">5+</p>
                                                <p className="text-sm text-gray-400">Years Exp</p>
                                            </div>
                                            <div className="bg-black-300 p-4 rounded-lg border border-gray-700 text-center">
                                                <p className="text-2xl font-bold text-white">100+</p>
                                                <p className="text-sm text-gray-400">Commits</p>
                                            </div>
                                        </div> */}

                                        {/* Info List */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-white-50">
                                                <img
                                                    src="/images/logos/UalbertaLogo.jpeg"
                                                    alt="University of Alberta"
                                                    className="w-6 h-6 rounded object-cover"
                                                />
                                                <span>University of Alberta. Bachelor of Science with Specialization program, Computing Science.</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white-50">
                                                <span className="text-xl">📍</span>
                                                <span>Based in <strong className="text-white">Edmonton, Alberta</strong></span>
                                            </div>
                                        </div>

                                        {/* Skills/Technologies */}
                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold text-white mb-3">Interests and Hobbies</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {['Guitar', 'Snowboarding', 'Hiking', 'Bouldering', 'Table Tennis', 'Sustainability Advocacy', 'Souls games', 'Horror TV Shows'].map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/50 hover:bg-blue-500/30 transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="mt-6 flex gap-4">
                                            <a
                                                href="https://github.com/iftemum?tab=overview&from=2025-12-01&to=2025-12-31"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                                            >
                                                <img
                                                    src="/images/logos/github.png"
                                                    alt="GitHub"
                                                    className="w-5 h-5"
                                                />
                                                GitHub
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/iftemum-raian/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                                                style={{ backgroundColor: '#0A66C2' }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004182'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A66C2'}
                                            >
                                                <img
                                                    src="/images/logos/linkedin.png"
                                                    alt="LinkedIn"
                                                    className="w-5 h-5"
                                                />
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="resume-content h-full -m-8">
                                {/* PDF Viewer - Full Screen */}
                                <iframe
                                    src="/Resume.pdf"
                                    className="w-full h-full border-0"
                                    title="Resume"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* MacBook Bottom */}
                <div className="bg-gray-800 rounded-b-xl p-1 border border-t-0 border-gray-700">
                    <div className="h-1 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 rounded"></div>
                </div>

                {/* MacBook Base */}
                <div className="flex justify-center">
                    <div className="w-48 h-2 bg-gray-700 rounded-b-lg shadow-lg"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
