import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClass = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled || !isHomePage
      ? 'bg-white shadow-md py-3'
      : 'bg-transparent py-5'
  }`;

  const linkClass = `font-medium text-lg ${
    scrolled || !isHomePage
      ? 'text-primary-600 hover:text-accent-600'
      : 'text-white hover:text-accent-300'
  }`;

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className={navbarClass}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className={`text-2xl font-heading font-bold ${
            scrolled || !isHomePage ? 'text-primary-600' : 'text-white'
          }`}>
            LANI BUILDERS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" 
            className={({ isActive }) => 
              `${linkClass} ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink to="/services" 
            className={({ isActive }) => 
              `${linkClass} ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink to="/projects" 
            className={({ isActive }) => 
              `${linkClass} ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink to="/about" 
            className={({ isActive }) => 
              `${linkClass} ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink to="/contact" 
            className={({ isActive }) => 
              `${linkClass} ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Call Us Button (Desktop) */}
        <div className="hidden lg:flex">
          <a href="tel:+447378402689" className="btn-primary flex items-center gap-2">
            <Phone size={18} />
            <span>+447378402689</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className={scrolled || !isHomePage ? 'text-primary-600' : 'text-white'} />
          ) : (
            <Menu size={28} className={scrolled || !isHomePage ? 'text-primary-600' : 'text-white'} />
          )}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 lg:hidden pt-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col items-center gap-6 p-6">
                <NavLink to="/"
                  className={({ isActive }) => 
                    `text-xl font-medium text-primary-600 hover:text-accent-600 ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
                  }
                >
                  Home
                </NavLink>
                <NavLink to="/services"
                  className={({ isActive }) => 
                    `text-xl font-medium text-primary-600 hover:text-accent-600 ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
                  }
                >
                  Services
                </NavLink>
                <NavLink to="/projects"
                  className={({ isActive }) => 
                    `text-xl font-medium text-primary-600 hover:text-accent-600 ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
                  }
                >
                  Projects
                </NavLink>
                <NavLink to="/about"
                  className={({ isActive }) => 
                    `text-xl font-medium text-primary-600 hover:text-accent-600 ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
                  }
                >
                  About
                </NavLink>
                <NavLink to="/contact"
                  className={({ isActive }) => 
                    `text-xl font-medium text-primary-600 hover:text-accent-600 ${isActive ? 'font-semibold border-b-2 border-accent-600' : ''}`
                  }
                >
                  Contact
                </NavLink>
                
                <div className="mt-6">
                  <a href="tel:+447378402689" className="btn-primary flex items-center gap-2">
                    <Phone size={18} />
                    <span>+447378402689</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;