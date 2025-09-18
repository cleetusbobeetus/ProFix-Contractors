'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'roofing', name: 'Roofing' }
  ];

  const projects = [
    {
      id: 1,
      category: 'plumbing',
      title: 'Kitchen Renovation',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Complete kitchen plumbing overhaul with new fixtures and modern design'
    },
    {
      id: 2,
      category: 'electrical',
      title: 'Basement Electrical Upgrade',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Full electrical panel upgrade and new outlet installation'
    },
    {
      id: 3,
      category: 'roofing',
      title: 'Storm Damage Repair',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Complete roof replacement after severe storm damage'
    },
    {
      id: 4,
      category: 'plumbing',
      title: 'Bathroom Remodel',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Modern bathroom with new plumbing fixtures and layout'
    },
    {
      id: 5,
      category: 'electrical',
      title: 'Outdoor Lighting Installation',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Landscape lighting and security system installation'
    },
    {
      id: 6,
      category: 'roofing',
      title: 'Gutter System Installation',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'New gutter system with leaf guards and downspouts'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality of our work through these real project transformations. 
            Every project is completed with attention to detail and customer satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                {/* Before/After Images */}
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                        <p className="text-sm text-gray-500">Before</p>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-300 rounded-lg mx-auto mb-2"></div>
                        <p className="text-sm text-gray-500">After</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {project.category}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you with your next home improvement project. 
              Get a free consultation and see what we can do for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
