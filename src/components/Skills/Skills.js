import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", icon: "/Kenneth-Lim/python-logo-4.png", level: 90 },
            { name: "JavaScript", icon: "/Kenneth-Lim/javascript-logo.png", level: 50 },
            { name: "SQL", icon: "/Kenneth-Lim/mysql-logo-1.png", level: 85 },
            { name: "Bash", icon: "/Kenneth-Lim/unix-shell-logo-1.png", level: 85 }
        ]
    },
    {
        category: "Machine Learning & Data Science",
        skills: [
            { name: "PyTorch", icon: "/Kenneth-Lim/pytorch-logo.png", level: 80 },
            { name: "TensorFlow", icon: "/Kenneth-Lim/tensorflow-logo-1.png", level: 85 },
            { name: "Scikit-learn", icon: "/Kenneth-Lim/sk-learn-logo-1.png", level: 90 },
            { name: "Pandas", icon: "/Kenneth-Lim/pandas-logo-1.png", level: 95 },
            { name: "NumPy", icon: "/Kenneth-Lim/numpy-logo-1.png", level: 90 }
        ]
    },
    {
        category: "Web Development",
        skills: [
            { name: "FastAPI", icon: "/Kenneth-Lim/fastapi-logo.png", level: 60 },
            { name: "Flask", icon: "/Kenneth-Lim/flask-logo.png", level: 60 },
            // { name: "React", icon: "/react-logo.png", level: 85 },
            // { name: "Node.js", icon: "/nodejs-logo.png", level: 80 },
            { name: "PostgreSQL", icon: "/Kenneth-Lim/postgresql-logo.png", level: 70 }
        ]
    },
    {
        category: "Tools & Technologies",
        skills: [
            { name: "Git", icon: "/Kenneth-Lim/git-logo.png", level: 90 },
            { name: "GitLab", icon: "/Kenneth-Lim/gitlab-logo.png", level: 80 },
            { name: "Docker", icon: "/Kenneth-Lim/docker-logo.png", level: 75 },
            { name: "AWS", icon: "/Kenneth-Lim/aws-logo.png", level: 70 },
            { name: "Jira", icon: "/Kenneth-Lim/jira-logo.png", level: 70 },
            { name: "Tableau", icon: "/Kenneth-Lim/tableau-logo.png", level: 80 }
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