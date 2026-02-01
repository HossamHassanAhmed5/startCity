import React, { useState } from 'react';
import { Search, BookOpen, Film, Filter } from 'lucide-react';

// Components
import ResourceCard from '../components/knowledge/ResourceCard';

// Sample data
const resources = [
  {
    id: 1,
    title: 'Fundraising Fundamentals',
    description: 'Learn the basics of raising capital for your startup',
    type: 'video',
    duration: '45 min',
    category: 'Funding',
    author: 'Sarah Chen',
    image: 'https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'MVP Development Guide',
    description: 'Step-by-step approach to building your minimum viable product',
    type: 'article',
    duration: '12 min read',
    category: 'MVPs',
    author: 'David Rodriguez',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Marketing for Early-Stage Startups',
    description: 'Cost-effective marketing strategies for new businesses',
    type: 'video',
    duration: '32 min',
    category: 'Marketing',
    author: 'Alex Thompson',
    image: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Choosing the Right Tech Stack',
    description: 'A guide to selecting technologies for your startup',
    type: 'article',
    duration: '15 min read',
    category: 'Tech',
    author: 'Maya Patel',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Building a Remote Team',
    description: 'Best practices for managing distributed teams',
    type: 'video',
    duration: '28 min',
    category: 'Team',
    author: 'Jason Lee',
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Pitch Deck Masterclass',
    description: 'Create a compelling pitch deck that wins investors',
    type: 'video',
    duration: '52 min',
    category: 'Funding',
    author: 'Emma Grant',
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const KnowledgeCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const categories = ['Funding', 'MVPs', 'Marketing', 'Tech', 'Team', 'Legal'];
  const types = ['article', 'video'];

  // Filter resources based on search term and filters
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || resource.category === selectedCategory;
    const matchesType = selectedType === '' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Knowledge Center</h1>
          <p className="text-lg text-neutral-600">
            Curated resources to help you build and grow your startup
          </p>
        </div>

        {/* Search and filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search for resources..."
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <select
                  className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Topics</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-4 w-4 text-neutral-400" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="article">Articles</option>
                  <option value="video">Videos</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {selectedType === 'video' ? (
                    <Film className="h-4 w-4 text-neutral-400" />
                  ) : (
                    <BookOpen className="h-4 w-4 text-neutral-400" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
          
          {filteredResources.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-neutral-500">
                No resources found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCenter;