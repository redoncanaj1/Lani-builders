import React from 'react';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { 
  Home as HomeIcon, 
  Hammer, 
  Wrench, 
  Lightbulb, 
  Warehouse,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'roofing',
      icon: <HomeIcon size={48} />,
      title: 'Roofing',
      description: 'Comprehensive roofing solutions for residential and commercial properties.',
      features: [
        'Roof installations and replacements',
        'Roof repairs and maintenance',
        'Chimney repairs and rebuilding',
        'Guttering and fascia installation',
        'Roof inspections and surveys'
      ],
      image: '/src/img/roofing4.jpeg'
    },
    {
      id: 'extensions',
      icon: <Warehouse size={48} />,
      title: 'Extensions',
      description: 'Expand your property with expertly designed and built extensions.',
      features: [
        'Single and double-story extensions',
        'Kitchen and living room extensions',
        'Conservatories and orangeries',
        'Garage conversions',
        'Planning and building regulations compliance'
      ],
      image: '/src/img/extensions6.jpeg'
    },
    {
      id: 'tiling',
      icon: <Hammer size={48} />,
      title: 'Tiling',
      description: 'Professional tiling services for walls and floors in any room.',
      features: [
        'Bathroom and kitchen tiling',
        'Floor tiling for any room',
        'Outdoor and patio tiling',
        'Tile repair and replacement',
        'Grouting and sealing services'
      ],
      image: '/src/img/tiling1.jpeg'
    },
    {
      id: 'electrical',
      icon: <Lightbulb size={48} />,
      title: 'Electrical Work',
      description: 'Certified electrical services for safety and efficiency in your property.',
      features: [
        'Full and partial rewiring',
        'Electrical fault finding and repairs',
        'Fuse box upgrades and replacements',
        'Installation of lighting fixtures',
        'Smart home electrical installations'
      ],
      image: '/src/img/electrical4.jpeg'
    },
   {
  id: 'woodwork',
  icon: <Wrench size={48} />,
  title: 'Wood Work',
  description: 'Precision craftsmanship in timber for both structural and aesthetic applications, combining traditional joinery techniques with modern engineering.',
  features: [
    'Structural timber framing and roofing',
    'Hardwood flooring installations',
    'Staircase design & construction',
    'Doors, windows & architectural millwork',
    'Decking & exterior wood structures',
    'Period property restoration'
  ],
  image: '/src/img/wood3.jpeg'
}
  ];
  return (
    <>
      <Hero 
        title="Our Construction Services"
        subtitle="Professional and reliable construction services tailored to your specific needs."
        image="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="mb-4">Quality Construction Services</h2>
            <p className="text-lg text-neutral-600">
              At Lani Builders, we offer a comprehensive range of construction services to meet all your building needs. From roofing and extensions to tiling and electrical work, our experienced team delivers exceptional quality on every project.
            </p>
          </div>
          
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="rounded-lg overflow-hidden shadow-md h-full">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}
                  >
                    <div className="text-accent-600 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-lg text-neutral-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="text-success-500 mt-1 flex-shrink-0" size={20} />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <h2 className="mb-4">Our Work Process</h2>
            <p className="text-lg text-neutral-600">
              We follow a structured approach to ensure every project is completed to the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-neutral-600">We discuss your project requirements and provide initial advice.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-neutral-600">Detailed project planning including timelines and materials needed.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-neutral-600">Professional implementation of the project with regular updates.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Completion</h3>
              <p className="text-neutral-600">Final inspection and handover of the completed project.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTA title="Ready to Start Your Construction Project?" />
    </>
  );
};

export default ServicesPage;