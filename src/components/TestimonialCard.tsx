import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  location, 
  testimonial, 
  rating,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Star Rating */}
      <div className="flex text-accent-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < rating ? 'currentColor' : 'none'} 
            className={i < rating ? 'text-accent-500' : 'text-neutral-300'} 
          />
        ))}
      </div>
      
      {/* Testimonial */}
      <p className="text-neutral-700 mb-6 italic">"{testimonial}"</p>
      
      {/* Client */}
      <div>
        <p className="font-medium text-primary-600">{name}</p>
        <p className="text-neutral-500 text-sm">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;