import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onScrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', section: 'home' },
        { name: 'About', section: 'about' },
        { name: 'Projects', section: 'projects' },
        { name: 'Skills', section: 'skills' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <motion.span
                            className="text-2xl font-bold text-gray-800"
                            whileHover={{ scale: 1.05 }}
                        >
                            Portfolio
                        </motion.span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.section}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
                                onClick={() => onScrollToSection(item.section)}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        {/* Mobile menu button */}
                        <button className="text-gray-600 hover:text-gray-900">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar; 