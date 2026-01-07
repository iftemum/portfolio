import { useRef } from 'react';
import { skillsData } from '../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ skill }) => {
    return (
        <div className="group relative card bg-black-200 rounded-xl p-5 border border-black-50 hover:border-white/20 transition-all duration-500 h-full">
            <div className="glow" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon and Years */}
                <div className="flex items-start justify-between mb-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-7 h-7 object-contain"
                            style={skill.filter ? { filter: skill.filter } : {}}
                        />
                    </div>
                    <span className="text-white-50 text-xs font-medium">
                        {skill.years} {skill.years === 1 ? 'yr' : 'yrs'}
                    </span>
                </div>

                {/* Skill name */}
                <h4 className="text-white font-semibold text-base group-hover:text-white/90 transition-colors duration-300 mt-auto">
                    {skill.name}
                </h4>
            </div>
        </div>
    );
};

const SkillCategory = ({ category }) => {
    const categoryRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            categoryRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: categoryRef.current,
                    start: 'top 85%',
                },
            }
        );

        gsap.fromTo(
            categoryRef.current.querySelectorAll('.card'),
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.03,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: categoryRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <div ref={categoryRef} className="skill-category mb-16">
            {/* Category Header */}
            <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black-200 border border-black-50 flex items-center justify-center">
                    <img
                        src={category.categoryIcon}
                        alt={category.category}
                        className="w-7 h-7 object-contain"
                    />
                </div>
                <h3 className="text-2xl font-bold text-white">
                    {category.category}
                </h3>
            </div>

            {/* Bento Grid */}
            <div className="bento-grid">
                {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const titleRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
            }
        );
    }, []);

    return (
        <section id="skills" className="c-space my-20">
            <p ref={titleRef} className="head-text">Technical Skills</p>

            <div className="mt-12">
                {skillsData.map((category) => (
                    <SkillCategory
                        key={category.category}
                        category={category}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
