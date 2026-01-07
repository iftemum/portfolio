import React from 'react'
import Hero from './sections/Hero.jsx'
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Skills from "./sections/Skills.jsx";
import Footer from "./sections/Footer.jsx";



const App = () => {
    return (
        <>
            <Hero />
            <Projects/>
            <WorkExperience/>
            <AboutMe/>
            <Skills/>
            <Footer/>
        </>
    )
}
export default App
