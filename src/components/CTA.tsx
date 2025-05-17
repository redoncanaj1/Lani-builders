import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
}

const CTA: React.FC<CTAProps> = ({ 
  title = "Ready to Start Your Project?", 
  description = "Contact us today for a free consultation and quote on your construction needs.", 
  buttonText = "Contact Us", 
  buttonLink = "/contact",
  image = "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}) => {
  
  const containerStyle = {
    backgroundImage: `linear-gradient(to right, rgba(15, 44, 89, 0.92), rgba(15, 44, 89, 0.85)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section 
      className="py-16 bg-primary-600 text-white"
      style={containerStyle}
    >
      <div className="container text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            to={buttonLink} 
            className="btn-accent inline-flex items-center gap-2 text-lg"
          >
            {buttonText}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;