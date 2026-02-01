import React, { useState } from 'react';
import { Search, Filter, Star, ArrowRight } from 'lucide-react';

// Components
import ServiceCard from '../components/marketplace/ServiceCard';

// Sample data
const services = [
  {
    id: 1,
    title: 'AI Sales Assistant',
    description: 'Intelligent AI agent that helps qualify leads, handle initial customer interactions, and optimize your sales funnel',
    category: 'AI Agents',
    provider: 'VeloraAI Solutions',
    rating: 4.9,
    reviewCount: 156,
    price: '$299/month',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Market Analysis AI',
    description: 'Comprehensive market research and competitor analysis using advanced AI to identify opportunities and threats',
    category: 'AI Agents',
    provider: 'DataInsights AI',
    rating: 4.8,
    reviewCount: 92,
    price: '$499/report',
    image: 'https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'AI Marketing Strategist',
    description: 'AI-powered marketing strategy development, content planning, and campaign optimization',
    category: 'AI Agents',
    provider: 'GrowthMind AI',
    rating: 4.7,
    reviewCount: 128,
    price: '$399/month',
    image: 'https://images.pexels.com/photos/8386634/pexels-photo-8386634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Feasibility Study AI',
    description: 'AI-driven analysis of your business idea\'s technical, financial, and market feasibility',
    category: 'AI Agents',
    provider: 'InnovateAI Labs',
    rating: 4.9,
    reviewCount: 74,
    price: '$799/study',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Legal Startup Package',
    description: 'Complete legal setup for your startup including incorporation, agreements, and IP protection',
    category: 'Legal',
    provider: 'LegalEdge Partners',
    rating: 4.8,
    reviewCount: 124,
    price: '$1,499',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Brand Identity Design',
    description: 'Full brand identity package including logo, style guide, and essential marketing materials',
    category: 'Design',
    provider: 'Creative Minds Studio',
    rating: 4.9,
    reviewCount: 89,
    price: '$2,500',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 7,
    title: 'MVP Development',
    description: 'End-to-end development of your minimum viable product with a focus on rapid delivery',
    category: 'Tech',
    provider: 'Nimble Dev Labs',
    rating: 4.7,
    reviewCount: 156,
    price: 'From $5,000',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 8,
    title: 'Growth Marketing Strategy',
    description: 'Data-driven marketing strategy to acquire and retain customers efficiently',
    category: 'Growth',
    provider: 'GrowthX Partners',
    rating: 4.6,
    reviewCount: 78,
    price: '$1,800',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 9,
    title: 'AI Business Developer',
    description: 'AI agent that helps identify partnerships, expansion opportunities, and strategic growth initiatives',
    category: 'AI Agents',
    provider: 'StrategyAI',
    rating: 4.8,
    reviewCount: 63,
    price: '$599/month',
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 10,
    title: 'Financial Modeling',
    description: 'Comprehensive financial models for fundraising, projections, and business planning',
    category: 'Legal',
    provider: 'Startup Finance Pro',
    rating: 4.9,
    reviewCount: 52,
    price: '$950',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['AI Agents', 'Legal', 'Design', 'Tech', 'Growth'];

  // Filter services based on search term and category
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured AI services
  const featuredAIServices = services
    .filter(service => service.category === 'AI Agents')
    .slice(0, 3);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Service Marketplace</h1>
          <p className="text-lg text-neutral-600">
            Connect with AI agents and service providers to help build and grow your startup
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
                placeholder="Search for services or providers..."
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
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
          </div>
        </div>

        {/* Featured AI Services */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured AI Services</h2>
            <button 
              onClick={() => setSelectedCategory('AI Agents')}
              className="text-primary-600 font-medium flex items-center hover:text-primary-700"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAIServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* All Services */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            
            {filteredServices.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-neutral-500">
                  No services found matching your criteria. Try adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;