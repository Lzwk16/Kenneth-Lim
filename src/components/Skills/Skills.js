import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", icon: "/Kenneth-Lim/Images/python-logo.png" },
            { name: "SQL", icon: "/Kenneth-Lim/Images/mysql-logo.png" },
            { name: "Bash", icon: "/Kenneth-Lim/Images/unix-shell-logo.png" },
            { name: "JavaScript", icon: "/Kenneth-Lim/Images/javascript-logo.png" }
        ]
    },
    {
        category: "Machine Learning & Data Science",
        skills: [
            { name: "PyTorch", icon: "/Kenneth-Lim/Images/pytorch-logo.png" },
            { name: "TensorFlow", icon: "/Kenneth-Lim/Images/tensorflow-logo.png" },
            { name: "Scikit-learn", icon: "/Kenneth-Lim/Images/sk-learn-logo.png" },
            { name: "Pandas", icon: "/Kenneth-Lim/Images/pandas-logo.png" }
        ]
    },
    {
        category: "Web Development",
        skills: [
            { name: "FastAPI", icon: "/Kenneth-Lim/Images/fastapi-logo.png" },
            { name: "Flask", icon: "/Kenneth-Lim/Images/flask-logo.png" },
            { name: "Streamlit", icon: "/Kenneth-Lim/Images/streamlit-logo.png" },
            { name: "PostgreSQL", icon: "/Kenneth-Lim/Images/postgresql-logo.png" }
        ]
    },
    {
        category: "Tools & Technologies",
        skills: [
            { name: "Git", icon: "/Kenneth-Lim/Images/git-logo.png" },
            { name: "GitLab", icon: "/Kenneth-Lim/Images/gitlab-logo.png" },
            { name: "Docker", icon: "/Kenneth-Lim/Images/docker-logo.png" },
            { name: "AWS", icon: "/Kenneth-Lim/Images/aws-logo.png" },
            { name: "Jira", icon: "/Kenneth-Lim/Images/jira-logo.png" },
            { name: "Tableau", icon: "/Kenneth-Lim/Images/tableau-logo.jpg" }
        ]
    }
];

const SkillCategory = ({ category, skills }) => {
    return (
        <div className="mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-30 h-30 object-contain mb-3"
                                style={{ width: '120px', height: '120px' }}
                            />
                            <span className="text-gray-800 text-lg font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
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

            <div className="space-y-12">
                {skillsData.map((category) => (
                    <SkillCategory key={category.category} {...category} />
                ))}
            </div>
        </div>
    );
};

export default Skills; 