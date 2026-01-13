
export const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];




export const myProjects = [
    {
        title: 'Fluenty - Language Learning Platform',
        desc: 'A full-featured education platform connecting native Canadian English instructors with Brazilian students through their schools. Core features include flexible session scheduling with individual and group bookings (up to 4 students), real-time video integration, automated email notifications for upcoming sessions, comprehensive progress tracking with instructor feedback, custom quiz creation and assessment tools, and profile management for students, instructors, and administrators. The platform streamlines the entire learning experience from booking to feedback.',
        href: 'https://youtu.be/N_T5LnHEnsg?si=LJXohXDsvFchV1Ba',
        linkText: 'Check Full Demo',
        texture: '/textures/project/FluentyFast.mp4',
        logo: '/images/logos/Fluenty.png',
        logoStyle: {
            backgroundColor: '#1E3A5F',
            border: '0.2px solid #2C5282',
            boxShadow: '0px 0px 60px 0px #2B6CB04D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Django',
                path: '/images/logos/django.svg',
            },
            {
                id: 3,
                name: 'PostgreSQL',
                path: '/images/logos/postgresql.png',
            },
            {
                id: 4,
                name: 'Docker',
                path: '/images/logos/docker.png',
            },
        ],
    },
    {
        title: 'QuickScanPro - Android Event Management App',
        desc: 'A comprehensive event management platform enabling organizers to host events and attendees to discover and join nearby activities. Key features include event browsing and search functionality, flexible QR code-based check-in system where organizers can set any image as the event QR code, real-time attendee tracking, geolocation services with interactive heatmaps showing sign-up locations, role-based access for organizers and attendees, event notifications, and Firebase-powered real-time updates. The app streamlines the entire event lifecycle from creation to attendee management.',
        href: 'https://github.com/iftemum/QuickScanQuestPro',
        linkText: 'Check Project Repo',
        texture: '/textures/project/QRFast.mp4',
        logo: '/images/logos/QuickScanLogo.png',
        logoStyle: {
            backgroundColor: '#1A2B1A',
            border: '0.2px solid #2D4A2D',
            boxShadow: '0px 0px 60px 0px #3DDC844D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/images/logos/java.png',
            },
            {
                id: 2,
                name: 'Android',
                path: '/images/logos/android.png',
            },
            {
                id: 3,
                name: 'Firebase',
                path: '/images/logos/firebase.png',
            },
        ],
    },
    {
        title: 'StarCraft II Stalker Rush AI Bot',
        desc: 'A C++ bot designed for a Protoss Stalker Rush strategy. Achieved 70% win rate against CheatMoney and CheatVision difficulties, and around 45% against CheatInsane.',
        subdesc:
            'Built using C++ and the StarCraft II API, this AI bot implements advanced scouting and aggressive attack strategies to dominate opponents with precise micro-management and strategic decision-making.',
        href: 'https://github.com/iftemum/StarCraftIIBot',
        linkText: 'Check Project Repo',
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
    pos: 'Product Manager & Full Stack Developer',
    duration: 'Jan 2025 - May 2025',
    title: "Led an 8-member Agile team as Scrum Master, coordinating sprints and client communications to gather requirements and create project roadmaps following Agile methodologies. Designed the frontend UI with React and Tailwind CSS for intuitive user experience. Developed backend features including custom quiz creation and grading system for instructors, student progress tracking indicators, video chat integration via Zoom API, automated email notifications through SendGrid, and Google Calendar integration for upcoming class scheduling. Implemented CI/CD pipeline using GitHub Actions and ensured code quality with SonarQube, achieving an 'A' ranking in reliability, security, and maintainability.",
    icon: '/images/logos/Fluenty.png',
    techStack: ['JavaScript', 'Python', 'TailwindCSS', 'React', 'Django', 'PostgreSQL', 'Firestore', 'Docker', 'Cybera', 'SonarQube', 'Google Auth', 'Zoom API', 'SendGrid', 'GitHub Actions'],
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


