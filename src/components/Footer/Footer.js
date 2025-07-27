import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Kenneth Lim. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;