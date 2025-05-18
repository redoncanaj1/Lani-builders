import React, { useState } from 'react';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

// Import all images
// Electrical Projects
import electrical1 from '/src/img/electrical1.jpeg';
import electrical2 from '/src/img/electrical2.jpeg';
import electrical3 from '/src/img/electrical3.jpeg';
import electrical4 from '/src/img/electrical4.jpeg';
import electrical5 from '/src/img/electrical5.jpeg';
import electrical6 from '/src/img/electrical6.jpeg';
import electrical7 from '/src/img/electrical7.jpeg';
import electrical8 from '/src/img/electrical8.jpeg';
import electrical9 from '/src/img/electrical9.jpeg';
import electrical10 from '/src/img/electrical10.jpeg';

// Extensions Projects
import extensions1 from '/src/img/extensions1.jpeg';
import extensions2 from '/src/img/extensions2.jpeg';
import extensions3 from '/src/img/extensions3.jpeg';
import extensions4 from '/src/img/extensions4.jpeg';
import extensions5 from '/src/img/extensions5.jpeg';
import extensions6 from '/src/img/extensions6.jpeg';
import extensions7 from '/src/img/extensions7.jpeg';
import extensions8 from '/src/img/extensions8.jpeg';
import extensions9 from '/src/img/extensions9.jpeg';
import extensions10 from '/src/img/extensions10.jpeg';

// Roofing Projects
import roofing1 from '/src/img/roofing1.jpeg';
import roofing2 from '/src/img/roofing2.jpeg';
import roofing3 from '/src/img/roofing3.jpeg';
import roofing4 from '/src/img/roofing4.jpeg';
import roofing5 from '/src/img/roofing5.jpeg';
import roofing6 from '/src/img/roofing6.jpeg';
import roofing7 from '/src/img/roofing7.jpeg';
import roofing8 from '/src/img/roofing8.jpeg';
import roofing9 from '/src/img/roofing9.jpeg';

// Tiling Projects
import tiling1 from '/src/img/tiling1.jpeg';
import tiling2 from '/src/img/tiling2.jpeg';
import tiling3 from '/src/img/tiling3.jpeg';
import tiling4 from '/src/img/tiling4.jpeg';
import tiling5 from '/src/img/tiling5.jpeg';
import tiling6 from '/src/img/tiling6.jpeg';
import tiling7 from '/src/img/tiling7.jpeg';
import tiling8 from '/src/img/tiling8.jpeg';
import tiling9 from '/src/img/tiling9.jpeg';

// Wood Projects
import wood1 from '/src/img/wood1.jpeg';
import wood3 from '/src/img/wood3.jpeg';
import wood4 from '/src/img/wood4.jpeg';
import wood6 from '/src/img/wood6.jpeg';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  completionDate: string;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    // Electrical Projects (IDs 1-10)
    {
      id: 1,
      title: 'Smart Home Automation',
      category: 'Electrical',
      description: 'Full smart home installation with lighting control, security systems, and voice-activated devices.',
      image: electrical1,
      location: 'Birmingham',
      completionDate: '2019'
    },
    {
      id: 2,
      title: 'Commercial Electrical Panel Installation',
      category: 'Electrical',
      description: 'Professional installation of a commercial-grade electrical distribution panel with circuit labeling and safety testing for a retail carpet showroom.',
      image: electrical2,
      location: 'Wolverhampton',
      completionDate: '2020'
    },
    {
      id: 3,
      title: 'Modern Ceiling Light Installation',
      category: 'Electrical',
      description: 'Professional installation of dual contemporary pendant lights in a kitchen, featuring precise height adjustment and balanced spacing for optimal illumination.',
      image: electrical3,
      location: 'Birmingham',
      completionDate: '2023'
    },
    {
      id: 4,
      title: 'Modern Circular Pendant Light Installation',
      category: 'Electrical',
      description: 'Elegant installation of a contemporary circular pendant light with multi-bulb design, providing balanced ambient lighting for modern living spaces.',
      image: electrical4,
      location: 'Solihull',
      completionDate: '2022'
    },
    {
      id: 5,
      title: 'LED Cove Lighting Installation',
      category: 'Electrical',
      description: 'Professional installation of energy-efficient LED strip lighting along the upper cabinet perimeter, creating ambient indirect lighting.',
      image: electrical5,
      location: 'Birmingham',
      completionDate: '2024'
    },
    {
      id: 6,
      title: 'Designer Long Pendant Light Installation',
      category: 'Electrical',
      description: 'Installation of a stunning 2-meter suspended designer pendant light, featuring professional ceiling reinforcement and precise height adjustment.',
      image: electrical6,
      location: 'Birmingham',
      completionDate: '2021'
    },
    {
      id: 7,
      title: 'Smart Wall-Mounted AC Installation',
      category: 'Electrical',
      description: 'Professional installation of a wall-mounted smart air conditioning unit with ambient temperature display.',
      image: electrical7,
      location: 'Dudley',
      completionDate: '2018'
    },
    {
      id: 8,
      title: 'Charger Installation',
      category: 'Electrical',
      description: 'Home electric vehicle charger with smart scheduling and load balancing.',
      image: electrical8,
      location: 'Birmingham',
      completionDate: '2023'
    },
    {
      id: 9,
      title: 'Square LED Ceiling Lights Installation - Corridor',
      category: 'Electrical',
      description: 'Modern square LED panel lights professionally installed in corridor ceiling, providing even illumination with energy-efficient performance.',
      image: electrical9,
      location: 'Birmingham',
      completionDate: '2025'
    },
    {
      id: 10,
      title: 'Under-Cabinet Task Lighting Installation',
      category: 'Electrical',
      description: 'Professional installation of discreet LED strip lighting beneath kitchen cabinets, providing optimal task illumination for food preparation areas.',
      image: electrical10,
      location: 'Walsall',
      completionDate: '2022'
    },
    // Extensions Projects (IDs 11-20)
    {
      id: 11,
      title: 'Contemporary Brick Entryway Extension',
      category: 'Extensions',
      description: 'Compact brick entryway extension featuring a modern black-framed glass door, designed to enhance curb appeal while providing functional weather protection.',
      image: extensions1,
      location: 'Birmingham',
      completionDate: '2020'
    },
    {
      id: 12,
      title: 'Birmingham-Style Loft Extension',
      category: 'Extensions',
      description: 'Traditional Birmingham-style loft extension with three characteristic dormer windows, featuring red brick construction to match existing architecture.',
      image: extensions2,
      location: 'Bromsgrove',
      completionDate: '2019'
    },
    {
      id: 13,
      title: 'Grand Glass Entrance Extension',
      category: 'Extensions',
      description: 'Impressive front entrance extension featuring floor-to-ceiling glass doors, creating a bright welcoming space with seamless indoor-outdoor transition.',
      image: extensions3,
      location: 'Birmingham',
      completionDate: '2021'
    },
    {
      id: 14,
      title: 'Two-Story Dormer Extension',
      category: 'Extensions',
      description: 'Full two-story rear extension featuring three characteristic dormer windows in the roofline, constructed with matching brickwork and slate roofing.',
      image: extensions4,
      location: 'Birmingham',
      completionDate: '2023'
    },
    {
      id: 15,
      title: 'Two-Tone Contemporary House Extension',
      category: 'Extensions',
      description: "Stunning two-story extension featuring a white-rendered ground floor with contrasting red brick upper level, creating distinctive modern character.",
      image: extensions5,
      location: 'Lichfield',
      completionDate: '2024'
    },
    {
      id: 16,
      title: 'White Contemporary Facade with Architectural Detailing',
      category: 'Extensions',
      description: 'Stunning white-rendered extension featuring exquisite architectural moldings around ground-floor windows and entrance doorway.',
      image: extensions6,
      location: 'Birmingham',
      completionDate: '2017'
    },
    {
      id: 17,
      title: 'Two-Story Glass-Fronted Residence with Triple Chimneys',
      category: 'Extensions',
      description: 'Striking contemporary two-story extension dominated by a full-height glass facade, complemented by three traditional brick chimneys.',
      image: extensions7,
      location: 'Birmingham',
      completionDate: '2022'
    },
    {
      id: 18,
      title: 'Classic White Door Entrance Installation',
      category: 'Extensions',
      description: 'Elegant front entrance transformation featuring a premium white-paneled door with brass hardware, framed by symmetrical architectural detailing.',
      image: extensions8,
      location: 'Kidderminster',
      completionDate: '2023'
    },
    {
      id: 19,
      title: 'New Construction: House Extension Foundation Work',
      category: 'Extensions',
      description: 'Initial phase of residential extension construction showing excavated foundation with reinforced concrete footings, proper drainage systems, and structural steel framework.',
      image: extensions9,
      location: 'Birmingham',
      completionDate: '2025'
    },
    {
      id: 20,
      title: 'Extension Foundation & Initial Brickwork Completion',
      category: 'Extensions',
      description: 'Early construction phase showing completed foundation work with precisely laid brick piers at structural points.',
      image: extensions10,
      location: 'Birmingham',
      completionDate: '2018'
    },
    // Roofing Projects (IDs 21-29)
    {
      id: 21,
      title: 'Black Slate Roof Installation - Two-Story Residence',
      category: 'Roofing',
      description: 'Complete installation of premium black slate roofing system on two-story property, featuring integrated dormer window flashing and precision-cut eaves detailing.',
      image: roofing1,
      location: 'Birmingham',
      completionDate: '2023'
    },
    {
      id: 22,
      title: 'Black Standing Seam Roof with Rounded Gable',
      category: 'Roofing',
      description: 'Premium black standing seam metal roof installation featuring a distinctive rounded gable end, combining modern durability with elegant curved architecture.',
      image: roofing2,
      location: 'Solihull',
      completionDate: '2021'
    },
    {
      id: 23,
      title: 'Black EPDM Roof Installation on Dormer Extension',
      category: 'Roofing',
      description: 'Professional installation of durable black EPDM rubber roofing system on two-dormer extension, featuring seamless membrane application.',
      image: roofing3,
      location: 'Birmingham',
      completionDate: '2024'
    },
    {
      id: 24,
      title: 'Custom Black Composite Roof with Dormers',
      category: 'Roofing',
      description: 'Precision installation of a custom-pitched black composite roof following the existing gable lines, featuring two integrated dormer windows.',
      image: roofing4,
      location: 'Wolverhampton',
      completionDate: '2019'
    },
    {
      id: 25,
      title: 'Timber Roof Structure Installation',
      category: 'Roofing',
      description: 'Precision-engineered timber roof framework installation using graded C24 timber, featuring pre-cut trusses, reinforced ridge beams.',
      image: roofing5,
      location: 'Birmingham',
      completionDate: '2022'
    },
    {
      id: 26,
      title: 'Minimalist Black Roof Installation on Two-Story Residence',
      category: 'Roofing',
      description: 'Clean-lined black asphalt shingle roof installation on two-story property, featuring low-profile design with concealed gutters.',
      image: roofing6,
      location: 'Birmingham',
      completionDate: '2020'
    },
    {
      id: 27,
      title: 'Two-Story Roof Construction in Progress',
      category: 'Roofing',
      description: 'Half-completed roof installation on two-story residence showing installed black asphalt shingles on one section with adjacent bare decking.',
      image: roofing7,
      location: 'Dudley',
      completionDate: '2023'
    },
    {
      id: 28,
      title: 'Roof Structure Prepared for Tile Installation',
      category: 'Roofing',
      description: 'Completed roof framework ready for final tiling, featuring precisely installed battens, reinforced fascia boards, and waterproof underlayment.',
      image: roofing8,
      location: 'Birmingham',
      completionDate: '2025'
    },
    {
      id: 29,
      title: 'L-Shaped Timber Roof Structure Ready for Tiling',
      category: 'Roofing',
      description: 'Completed L-shaped timber roof framework with precisely installed C24 graded rafters and valley beam, fully prepared for tile installation.',
      image: roofing9,
      location: 'Birmingham',
      completionDate: '2017'
    },
    // Tiling Projects (IDs 31-39)
    {
      id: 31,
      title: 'Luxury Bathroom Tile Installation with Illuminated Mirror',
      category: 'Tiling',
      description: 'Premium porcelain tile installation featuring floor-to-ceiling wall coverage with a circular backlit mirror as focal point.',
      image: tiling1,
      location: 'Birmingham',
      completionDate: '2023'
    },
    {
      id: 32,
      title: 'Full Bathroom Tile Installation with Tiled Bathtub Surround',
      category: 'Tiling',
      description: 'Comprehensive porcelain tile installation featuring wall-to-wall coverage with a fully tiled bathtub alcove.',
      image: tiling2,
      location: 'Bromsgrove',
      completionDate: '2021'
    },
    {
      id: 33,
      title: 'Kitchen Backsplash Tile Installation',
      category: 'Tiling',
      description: 'Precision-cut ceramic tile backsplash installation between upper and lower cabinets, featuring laser-leveled layout with decorative accent strip.',
      image: tiling3,
      location: 'Birmingham',
      completionDate: '2024'
    },
    {
      id: 34,
      title: 'Gray Square Porcelain Outdoor Tile Installation',
      category: 'Tiling',
      description: 'Durable 60x60cm gray porcelain tiles installed in outdoor living area, featuring anti-slip textured surface (R10 rating) and proper slope for drainage.',
      image: tiling4,
      location: 'Walsall',
      completionDate: '2018'
    },
    {
      id: 35,
      title: 'Milky White Rectangular Tile Backsplash with Curved Patterns',
      category: 'Tiling',
      description: 'Elegant installation of milky white rectangular tiles featuring flowing curved veining patterns, professionally arranged for visual continuity.',
      image: tiling5,
      location: 'Birmingham',
      completionDate: '2022'
    },
    {
      id: 36,
      title: 'Dual-Tone Kitchen Backsplash - Blue Rectangular Tiles with White Range Hood Accent',
      category: 'Tiling',
      description: 'Contrasting tile installation featuring small blue rectangular field tiles with a crisp white tile accent panel above the range.',
      image: tiling6,
      location: 'Birmingham',
      completionDate: '2020'
    },
    {
      id: 37,
      title: 'Large-Format Cream-Toned Floor Tile Installation',
      category: 'Tiling',
      description: 'Seamless installation of oversized cream-toned porcelain tiles (120x120cm) featuring subtle veining patterns, professionally book-matched.',
      image: tiling7,
      location: 'Lichfield',
      completionDate: '2023'
    },
    {
      id: 38,
      title: 'Geometric White Tile Bathroom Installation',
      category: 'Tiling',
      description: 'Crisp white rectangular wall tiles installed in vertical stack bond pattern, paired with a symmetrical geometric floor tile design.',
      image: tiling8,
      location: 'Birmingham',
      completionDate: '2019'
    },
    {
      id: 39,
      title: 'Cream-Toned Bathroom with Recessed Wall Niches',
      category: 'Tiling',
      description: 'Luxurious cream-toned marble-look porcelain tiles installed floor-to-ceiling, featuring custom-built recessed niches for toiletries.',
      image: tiling9,
      location: 'Birmingham',
      completionDate: '2025'
    },
    // Wood Projects (IDs 40-43)
    {
      id: 40,
      title: 'Herringbone Parquet Flooring Installation',
      category: 'Wood',
      description: 'Premium oak herringbone parquet flooring installed with precise 45° angle zigzag pattern, featuring tongue-and-groove joinery.',
      image: wood1,
      location: 'Kidderminster',
      completionDate: '2021'
    },
    {
      id: 41,
      title: 'Solid Oak Staircase Installation',
      category: 'Wood',
      description: 'Custom-crafted oak staircase featuring hand-carved balusters, routed handrails, and premium treads with non-slip grooves.',
      image: wood3,
      location: 'Birmingham',
      completionDate: '2023'
    },
    {
      id: 42,
      title: 'Gray Engineered Parquet Flooring - Entry Hallway',
      category: 'Wood',
      description: 'Premium gray-tinted oak parquet flooring installed in interior hallway, featuring a durable UV-oil finish and precision herringbone pattern.',
      image: wood4,
      location: 'Birmingham',
      completionDate: '2017'
    },
    {
      id: 43,
      title: 'Modern Oak Staircase with Glass Balustrade',
      category: 'Wood',
      description: 'Contemporary floating oak staircase featuring solid timber treads with routed edges, paired with frameless glass balustrades.',
      image: wood6,
      location: 'Solihull',
      completionDate: '2022'
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
        <Hero 
        title="Our Projects Portfolio"
        subtitle="Explore our diverse range of completed construction projects showcasing our expertise and quality workmanship."
        image="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <h2 className="mb-4">Our Featured Projects</h2>
            <p className="text-lg text-neutral-600">
              Browse through our portfolio of successful projects that demonstrate our commitment to quality and excellence in construction.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-neutral-600 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-72 object-cover"
              />
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full mb-2">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
              <p className="text-neutral-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="font-medium text-primary-600">Location</p>
                  <p className="text-neutral-600">{selectedProject.location}</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="font-medium text-primary-600">Completion</p>
                  <p className="text-neutral-600">{selectedProject.completionDate}</p>
                </div>
              </div>
              
              <button 
                onClick={closeProjectModal}
                className="w-full btn-primary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      <CTA 
        title="Have a Similar Project in Mind?" 
        description="Contact us today to discuss your construction project and get a free quote."
        buttonText="Start Your Project"
      />
    </>
  );
};

export default ProjectsPage;