const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for the Hostinger website.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
    {
        review:
            "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "Led the development of Docker's web applications, focusing on scalability.",
            "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
            "Contributed to open-source projects that were used with the Docker ecosystem.",
        ],
    },
    {
        review:
            "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "React Native Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
            "Improved app performance and user experience through code optimization and testing.",
            "Coordinated with the product team to implement features based on feedback.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export const myProjects = [
    {
        title: 'Podcastr - AI Podcast Platform',
        desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
        subdesc:
            'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/QRFast.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'StarCraft II Stalker Rush Bot',
        desc: 'A C++ bot designed for a Protoss Stalker Rush strategy. Achieved 70% win rate against CheatMoney and CheatVision difficulties, and around 45% against CheatInsane.',
        subdesc:
            'Built using C++ and the StarCraft II API, this AI bot implements advanced scouting and aggressive attack strategies to dominate opponents with precise micro-management and strategic decision-making.',
        href: 'https://github.com/yourusername/starcraft-bot',
        textures: [
            { name: 'Scouting', path: '/textures/project/fastscouting.mp4' },
            { name: 'Attacking', path: '/textures/project/fastattacking.mp4' }
        ],
        texture: '/textures/project/fastscouting.mp4',
        logo: '/images/logos/sc2.png',
        logoStyle: {
            backgroundColor: '#1A1A2E',
            border: '0.2px solid #16213E',
            boxShadow: '0px 0px 60px 0px #0F3460',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'C++',
                path: '/images/logos/cpp.png',
            },
            {
                id: 2,
                name: 'Game Development',
                path: '/images/logos/game-development.png',
            },
        ],
    },

];

export const workExperiences = [

{
    id: 1,
    name: 'Fluenty Language Learning Platform',
    pos: 'Full Stack Developer',
    duration: 'Jan 2025 - May 2025',
    title: "Developed a comprehensive language learning platform connecting native Canadian English instructors with Brazilian students. Built with modern full-stack technologies including React and Django, featuring real-time video sessions via Zoom API, authentication with Google Auth, and automated email notifications through SendGrid.",
    icon: '/images/logos/Fluenty.png',
    techStack: ['JavaScript', 'Python', 'TailwindCSS', 'React', 'Django', 'PostgreSQL', 'Firestore', 'Docker', 'Cybera', 'SonarQube', 'Google Auth', 'Zoom API', 'SendGrid'],
  },
  {
    id: 2,
    name: 'Western Auto Group',
    pos: 'Used Car Sales Consultant',
    duration: 'April 2024 - December 2024',
    title: "Achieved Performer of the Month recognition twice while managing customer relationships and sales processes using Smartsheets and DealerTrack to streamline dealership operations and track inventory.",
    icon: '/images/logos/WAG.png',
    techStack: ['Smartsheets', 'DealerTrack'],
  },
  {
    id: 3,
    name: "Denny's Restaurant",
    pos: 'Server',
    duration: '2020 - 2021',
    title: "Provided exceptional customer service in a fast-paced restaurant environment, managing multiple tables, coordinating with kitchen staff, and ensuring positive dining experiences for guests.",
    icon: '/images/logos/dennys.svg',
  },

];

export const skillsData = [
    {
        category: "Languages",
        categoryIcon: "/images/logos/code-icon.png",
        skills: [
            { name: "Python", icon: "/images/logos/python.svg", years: 6 },
            { name: "JavaScript", icon: "/images/logos/javascript.png", years: 5 },
            { name: "Java", icon: "/images/logos/java.png", years: 3 },
            { name: "C/C++", icon: "/images/logos/cpp.png", years: 3 },
            { name: "SQL", icon: "/images/logos/SQL.png", years: 4 },
            { name: "RISC-V", icon: "/images/logos/riscv.svg", years: 3 },
        ],
    },
    {
        category: "Frontend & Mobile",
        categoryIcon: "/images/logos/ui.png",
        skills: [
            { name: "React", icon: "/images/logos/react.png", years: 2 },
            { name: "Three.js", icon: "/images/logos/three.png", years: 1 },
            { name: "Tailwind CSS", icon: "/images/logos/tailwindcss.png", years: 2 },
            { name: "Android Studio", icon: "/images/logos/android.png", years: 3 },
            { name: "Figma", icon: "/images/logos/figma.png", years: 3 },
        ],
    },
    {
        category: "Backend & APIs",
        categoryIcon: "/images/logos/backend1.png",
        skills: [
            { name: "Django", icon: "/images/logos/django.svg", years: 3 },
            { name: "NestJS", icon: "/images/logos/nestjs.png", years: 1 },
            { name: "Flask", icon: "/images/logos/flask.svg", years: 2, filter: "brightness(0) invert(1)" },
            { name: "OAuth 2.0", icon: "/images/logos/oauth.svg", years: 2, filter: "brightness(0) invert(1)" },

        ],
    },
    {
        category: "Cloud & Infrastructure",
        categoryIcon: "/images/logos/infrastructure.png",
        skills: [
            { name: "Docker", icon: "/images/logos/docker.png", years: 2 },
            { name: "Microsoft Azure", icon: "/images/logos/azure.png", years: 1 },
            { name: "GitHub", icon: "/images/logos/github.png", years: 5, filter: "brightness(0) invert(1)" },
            { name: "Linux", icon: "/images/logos/linux.png", years: 4 },
            { name: "Firebase", icon: "/images/logos/firebase.png", years: 3 },
            { name: "Supabase", icon: "/images/logos/supabase.png", years: 2 },
        ],
    },
    {
        category: "Databases & Tools",
        categoryIcon: "/images/logos/tools.png",
        skills: [
            { name: "PostgreSQL", icon: "/images/logos/postgresql.png", years: 3 },
            { name: "MongoDB", icon: "/images/logos/mongodb.png", years: 3 },
            { name: "Firebase Firestore", icon: "/images/logos/firestore.png", years: 3 },
            { name: "Git", icon: "/images/logos/git.svg", years: 5 },
            { name: "SonarQube", icon: "/images/logos/sonarqube.svg", years: 2, filter: "brightness(0) invert(1)" },
            { name: "Espresso", icon: "/images/logos/blender.png", years: 1 },
            { name: "Tableau", icon: "/images/logos/tableau.png", years: 1 },
        ],
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};

