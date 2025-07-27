import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", icon: "/python-logo-4.png", level: 90 },
            { name: "JavaScript", icon: "/javascript-logo.png", level: 50 },
            { name: "SQL", icon: "/mysql-logo-1.png", level: 85 },
            { name: "Bash", icon: "/unix-shell-logo-1.png", level: 85 }
        ]
    },
    {
        category: "Machine Learning & Data Science",
        skills: [
            { name: "PyTorch", icon: "/pytorch-logo.png", level: 80 },
            { name: "TensorFlow", icon: "/tensorflow-logo-1.png", level: 85 },
            { name: "Scikit-learn", icon: "/sk-learn-logo-1.png", level: 90 },
            { name: "Pandas", icon: "/pandas-logo-1.png", level: 95 },
            { name: "NumPy", icon: "/numpy-logo-1.png", level: 90 }
        ]
    },
    {
        category: "Web Development",
        skills: [
            { name: "FastAPI", icon: "/fastapi-logo.png", level: 60 },
            { name: "Flask", icon: "/flask-logo.png", level: 60 },
            // { name: "React", icon: "/react-logo.png", level: 85 },
            // { name: "Node.js", icon: "/nodejs-logo.png", level: 80 },
            { name: "PostgreSQL", icon: "/postgresql-logo.png", level: 70 }
        ]
    },
    {
        category: "Tools & Technologies",
        skills: [
            { name: "Git", icon: "/git-logo.png", level: 90 },
            { name: "GitLab", icon: "/gitlab-logo.png", level: 80 },
            { name: "Docker", icon: "/docker-logo.png", level: 75 },
            { name: "AWS", icon: "/aws-logo.png", level: 70 },
            { name: "Jira", icon: "/jira-logo.png", level: 70 },
            { name: "Tableau", icon: "/tableau-logo.png", level: 80 }
        ]
    }
];

const SkillBar = ({ name, level, icon, index }) => {
    return (
        <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex items-center mb-2">
                <img src={icon} alt={name} className="w-8 h-8 mr-3 object-contain" />
                <span className="text-gray-800 font-medium">{name}</span>
                <span className="ml-auto text-gray-600">{level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                />
            </div>
        </motion.div>
    );
};

const SkillCategory = ({ category, skills }) => {
    return (
        <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{category}</h3>
            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <SkillBar key={skill.name} {...skill} index={index} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Technical Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillsData.map((category) => (
                    <SkillCategory key={category.category} {...category} />
                ))}
            </div>
        </div>
    );
};

export default Skills; 