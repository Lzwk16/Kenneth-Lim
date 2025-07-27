import React, { useRef } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";
import Skills from './components/Skills/Skills';
import Footer from "./components/Footer/Footer";

function App() {
    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        skills: useRef(null)
    };

    const handleScrollToSection = (section) => {
        sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar onScrollToSection={handleScrollToSection} />

            <motion.main className="relative">
                <section ref={sectionRefs.home} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
                    <Home />
                </section>

                <motion.section
                    ref={sectionRefs.about}
                    className="py-20 bg-white"
                    {...fadeInUp}
                >
                    <About />
                </motion.section>

                <motion.section
                    ref={sectionRefs.projects}
                    className="py-20 bg-gray-50"
                    {...fadeInUp}
                >
                    <ProjectsCard />
                </motion.section>

                <motion.section
                    ref={sectionRefs.skills}
                    className="py-20 bg-white"
                    {...fadeInUp}
                >
                    <Skills />
                </motion.section>

                <Footer />
            </motion.main>
        </div>
    );
}

export default App;
