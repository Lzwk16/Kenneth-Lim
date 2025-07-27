import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-gray-600">Email</p>
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                    >
                                        your.email@example.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-gray-600">Phone</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contacts;