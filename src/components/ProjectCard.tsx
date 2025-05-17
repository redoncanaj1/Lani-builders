import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, imageUrl, delay = 0 }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer h-72"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/30 to-transparent z-10" />
      
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
        <span className="inline-block mb-2 text-accent-500 text-sm font-medium">{category}</span>
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;