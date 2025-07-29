import React from 'react';
import { motion } from 'framer-motion';
import profileImage from './profilImage.jpg';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
                {...fadeIn}
            >
                About Me
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <img
                            src={profileImage}
                            alt="Kenneth Lim"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-10"></div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-gray-200 rounded-full opacity-50"></div>
                </motion.div>

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold text-gray-900">
                        AI and Machine Learning Engineer
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        I am a passionate developer with expertise in software development, machine learning model development and deployment operations.
                        My journey in technology has equipped me with a unique blend of skills that allows me to
                        build robust and scalable AI/ML applications for automation solutions and improved decision-making.

                        Feel free to connect with me on LinkedIn or via email to exchange ideas and collaborate on projects!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">Software Development, MLOps & Cloud (Python, Bash, CI/CD, Docker, MLflow, AWS)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">Artificial Intelligence & Machine Learning (Pandas, Numpy, Scikit-learn, TensorFlow, PyTorch)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">Database Design & Management (PostgreSQL, MySQL, Neo4j)</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;