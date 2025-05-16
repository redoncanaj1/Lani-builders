import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock,  Instagram,} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-6">LANI BUILDERS</h4>
            <p className="mb-6 text-neutral-200">
              Premier construction services in England, specializing in roofing, extensions, tiling, and electrical work.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/lanibuilders/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrdCtpJxjXKqKVvGKpxBLTLwhtbCSzlDKxkcpmNDjQdvlQhrNJVSZhXtsxbXLQhpJbqbX" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/projects" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Roofing
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Extensions
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Tiling
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-200 hover:text-white hover:underline transition-colors">
                  General Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent-500 mt-1" size={20} />
                <span className="text-neutral-200">23 Cofton Grove, Northfield, Birmingham B31 4NP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent-500" size={20} />
                <a href="tel:+447378402689" className="text-neutral-200 hover:text-white transition-colors">
                  +447378402689
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent-500" size={20} />
                <a href="mailto:Lanibuilders@gmail.com" className="text-neutral-200 hover:text-white transition-colors">
                  Lanibuilders@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-accent-500 mt-1" size={20} />
                <span className="text-neutral-200">Mon-Fri: 8am-6pm<br />Sat: 9am-1pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-primary-600 py-6">
        <div className="container text-center text-sm text-neutral-300">
          <p>© {new Date().getFullYear()} Lani Builders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;