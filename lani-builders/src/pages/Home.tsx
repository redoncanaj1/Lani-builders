import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Hammer, 
  Wrench, 
  Lightbulb, 
  Warehouse,
  Phone,
  Clock,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <HomeIcon size={36} />,
      title: 'Roofing',
      description: 'Professional roof installations, repairs, and maintenance to protect your property from the elements.',
    },
    {
      icon: <Warehouse size={36} />,
      title: 'Extensions',
      description: 'Expand your living space with bespoke home extensions built to your specifications and needs.',
    },
    {
      icon: <Hammer size={36} />,
      title: 'Tiling',
      description: 'Expert tiling services for kitchens, bathrooms, floors, and walls with precise installation.',
    },
    {
      icon: <Lightbulb size={36} />,
      title: 'Electrical Work',
      description: 'Comprehensive electrical services from rewiring to new installations, all compliant with regulations.',
    }
  ];

  const projects = [
    {
      title: 'Modern Home Extension',
      category: 'Extensions',
      imageUrl: '/src/img/extensions2.jpeg'
    },
    {
      title: 'Luxury Bathroom Renovation',
      category: 'Tiling',
      imageUrl: '/src/img/tiling1.jpeg'
    },
    {
      title: 'Complete Roof Replacement',
      category: 'Roofing',
      imageUrl: '/src/img/roofing1.jpeg'
    },
      {
      title: 'Electrical Work',
      category: 'Electrical',
      imageUrl: '/src/img/electrical-work.png'
    },
     {
      title: 'Wood Work',
      category: 'Wood',
      imageUrl: '/src/img/wood3.jpeg'
    },
     {
      title: 'General Work',
      category: 'General',
      imageUrl: '/src/img/wood2.jpeg'
    }
  ];


  return (
    <>
      <Hero 
        title="Building Excellence in Every Project"
        subtitle="Professional construction services for roofing, extensions, tiling, and electrical work across England."
        buttonText="Get a Free Quote"
        fullHeight={true}
      />

      {/* Why Choose Us */}
      <section className="section pt-10 bg-neutral-50">
        <div className="container">
          <div className="section-heading reveal">
            <h2 className="mb-4">Why Choose Lani Builders</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-4">
              With decades of experience and a commitment to quality, we deliver exceptional construction services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-neutral-600">Delivering exceptional workmanship on every project, big or small.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-neutral-600">Our skilled professionals bring years of expertise to every job.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Completion</h3>
              <p className="text-neutral-600">We respect your schedule and deliver projects on time, every time.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-neutral-600">Your complete satisfaction is our ultimate goal on every project.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-heading reveal">
            <h2 className="mb-4 pt-10">Our Construction Services</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-4">
              We offer a comprehensive range of construction services to meet all your building needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}             />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="section-heading reveal">
            <h2 className="mb-4 pt-10">Featured Projects</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-4">
              Take a look at some of our recent construction projects showcasing our quality and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
     
      
      {/* Contact Info */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-neutral-600 mb-4">Speak directly with our experts about your project</p>
              <a href="tel:+447378402689" className="text-xl font-semibold text-primary-600 hover:text-accent-600 transition-colors">
                +447378402689
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
              <p className="text-neutral-600 mb-2">Monday - Sunday: 24/7  </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
              <p className="text-neutral-600 mb-4">Get a free quote for your construction project</p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default HomePage;