import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('about');

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
                                    <div className="flex-shrink-0">
                                        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 bg-black-300">
                                            {/* Replace with your image */}
                                            <img
                                                src="/path-to-your-image.jpg"
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👤</div>';
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Profile Info */}
                                    <div className="flex-1">
                                        <div className="mb-6">
                                            <h2 className="text-3xl font-bold text-white mb-2">Your Name</h2>
                                            <p className="text-xl text-gray-400 mb-4">@yourusername</p>

                                            <p className="text-white-50 leading-relaxed mb-6">
                                                🚀 Full Stack Developer | 💻 Creative Coder | 🎨 Design Enthusiast
                                                <br />
                                                Passionate about building beautiful, functional web experiences with modern technologies.
                                            </p>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
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
                                        </div>

                                        {/* Info List */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-white-50">
                                                <span className="text-xl">🏢</span>
                                                <span>Working at <strong className="text-white">Your Company</strong></span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white-50">
                                                <span className="text-xl">📍</span>
                                                <span>Based in <strong className="text-white">Your Location</strong></span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white-50">
                                                <span className="text-xl">🎓</span>
                                                <span>Studied at <strong className="text-white">Your University</strong></span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white-50">
                                                <span className="text-xl">✉️</span>
                                                <span><strong className="text-white">your.email@example.com</strong></span>
                                            </div>
                                        </div>

                                        {/* Skills/Technologies */}
                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold text-white mb-3">🛠️ Tech Stack</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {['JavaScript', 'React', 'Three.js', 'Node.js', 'Python', 'TypeScript', 'GSAP', 'Tailwind CSS'].map((tech, index) => (
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
                                                href="https://github.com/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                                            >
                                                🔗 GitHub
                                            </a>
                                            <a
                                                href="https://linkedin.com/in/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                                            >
                                                💼 LinkedIn
                                            </a>
                                            <a
                                                href="https://twitter.com/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                                            >
                                                🐦 Twitter
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
                    <div className="h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded"></div>
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
