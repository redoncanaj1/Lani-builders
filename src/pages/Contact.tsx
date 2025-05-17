import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your construction project needs."
        image="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-neutral-600">23 Cofton Grove, Northfield, <br />Birmingham B31 4NP<br />United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Number</h3>
                      <a href="tel:+447378402689" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        +447378402689
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Address</h3>
                      <a href="mailto:Lanibuilders@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        Lanibuilders@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Opening Hours</h3>
                      <p className="text-neutral-600">
                        Monday - Sunday: 24/7
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="bg-white p-4 rounded-lg shadow-md">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1223329.910654527!2d-4.212570190429683!3d52.41247205962486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b7543419f345%3A0x5c5d716b8af1c4e!2zTEIgYnVpbGRlcuKAmXM!5e1!3m2!1sen!2s!4v1747426308707!5m2!1sen!2s" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lani Builders Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;