import { Building2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
          Established in 2017, we are a trusted Birmingham-based team specializing in electrical installations, extensions, roofing, tiling, and woodwork. With years of hands-on experience across the West Midlands, we take pride in delivering high-quality craftsmanship, innovative solutions, and reliable service—whether for homes or businesses.
          From smart home setups to full-scale extensions, our work speaks for itself. We’ve built lasting relationships with customers in Birmingham, Dudley, Wolverhampton, Solihull, and beyond, ensuring every project meets the highest standards.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
          To transform spaces with precision and creativity, providing durable, efficient, and stylish solutions that enhance everyday living. We combine traditional craftsmanship with modern techniques to deliver exceptional results—on time and within budget.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                ✅ Reliability – Serving the West Midlands since 2017 with consistent, trustworthy work.<br></br>
✅ Quality Craftsmanship – From wiring to roofing, we never cut corners.<br></br>
✅ Customer-First Approach – Your vision guides our work, ensuring satisfaction at every step.<br></br>
✅ Innovation – Integrating the latest technology, like smart home systems and energy-efficient designs.<br></br>
✅ Local Expertise – Deep knowledge of Birmingham’s architectural styles and building regulations.<br></br>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, maintaining the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}