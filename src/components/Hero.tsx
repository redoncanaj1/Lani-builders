import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  fullHeight?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
  buttonText, 
  buttonLink = '/contact',
  fullHeight = false 
}) => {
  
  const containerStyle = {
    backgroundImage: `linear-gradient(to right, rgba(15, 44, 89, 0.92), rgba(15, 44, 89, 0.85)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  const height = fullHeight ? 'min-h-screen' : 'min-h-[50vh] lg:min-h-[60vh]';
  
  return (
    <section 
      className={`${height} relative flex items-center text-white`}
      style={containerStyle}
    >
      <div className="container">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {buttonText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;