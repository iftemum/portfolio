import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { workExperiences } from '../constants/index.js';

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
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center backdrop-blur-sm overflow-hidden bg-black-100 border border-black-50">
                                <img src={experience.icon} alt={experience.name} className="w-10 h-10 object-contain" />
                            </div>
                            <div className="text-right">
                                <p className="text-white-50 text-sm">{experience.duration}</p>
                            </div>
                        </div>

                        {/* Company & Position */}
                        <div className="mb-4">
                            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                                {experience.pos}
                            </h3>
                            <p className="text-lg font-semibold text-white-600">
                                {experience.name}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-white-50 text-sm leading-relaxed mb-6">
                            {experience.title}
                        </p>

                        {/* Technologies */}
                        {experience.techStack && (
                            <div className="flex flex-wrap gap-2">
                                {experience.techStack.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-black-100 text-white-50 text-xs rounded-full border border-black-50 hover:border-white/30 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl pointer-events-none bg-white" />
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
