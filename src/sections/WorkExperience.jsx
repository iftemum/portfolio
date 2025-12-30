import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const workExperiences = [
    {
        id: 1,
        company: 'Tech Innovations Inc.',
        position: 'Senior Full Stack Developer',
        duration: 'Jan 2023 - Present',
        description: 'Led development of cloud-based enterprise solutions using React, Node.js, and AWS. Managed a team of 5 developers and improved application performance by 40%.',
        technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
        icon: '💼',
        color: '#6366f1'
    },
    {
        id: 2,
        company: 'Digital Creative Studio',
        position: 'Frontend Developer',
        duration: 'Mar 2021 - Dec 2022',
        description: 'Developed interactive web experiences and 3D visualizations for Fortune 500 clients. Collaborated with design teams to create pixel-perfect implementations.',
        technologies: ['Three.js', 'React', 'GSAP', 'WebGL', 'JavaScript'],
        icon: '🎨',
        color: '#8b5cf6'
    },
    {
        id: 3,
        company: 'StartUp Labs',
        position: 'Junior Developer',
        duration: 'Jun 2019 - Feb 2021',
        description: 'Built responsive web applications and contributed to open-source projects. Participated in agile development processes and code reviews.',
        technologies: ['JavaScript', 'Vue.js', 'Python', 'PostgreSQL', 'Docker'],
        icon: '🚀',
        color: '#ec4899'
    }
];

const WorkExperience = () => {
    const cardsRef = useRef([]);

    useGSAP(() => {
        gsap.fromTo(
            '.work-title',
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo(
            '.work-card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.work-experience-section',
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section id="work" className="c-space my-20">
            <p className="head-text work-title">Work Experience</p>

            <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {workExperiences.map((experience, index) => (
                    <div
                        key={experience.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="work-card card relative bg-black-200 rounded-xl p-6 shadow-2xl shadow-black-200 border border-black-50 hover:border-white/20 transition-all duration-500 group"
                    >
                        <div className="glow" />

                        {/* Icon Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div
                                className="w-14 h-14 rounded-lg flex items-center justify-center text-3xl backdrop-blur-sm"
                                style={{ backgroundColor: `${experience.color}20`, border: `1px solid ${experience.color}40` }}
                            >
                                {experience.icon}
                            </div>
                            <div className="text-right">
                                <p className="text-white-50 text-sm">{experience.duration}</p>
                            </div>
                        </div>

                        {/* Company & Position */}
                        <div className="mb-4">
                            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                                {experience.position}
                            </h3>
                            <p
                                className="text-lg font-semibold"
                                style={{ color: experience.color }}
                            >
                                {experience.company}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-white-50 text-sm leading-relaxed mb-6">
                            {experience.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-black-100 text-white-50 text-xs rounded-full border border-black-50 hover:border-white/30 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Hover Effect Overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl pointer-events-none"
                            style={{ backgroundColor: experience.color }}
                        />
                    </div>
                ))}
            </div>

            {/* Decorative Timeline */}
            <div className="mt-16 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full gradient-line opacity-20" />
            </div>
        </section>
    );
};

export default WorkExperience;
