import React, { useState } from 'react';
import { 
  ShoppingBag, Search, Filter, Star, Clock, 
  CheckCircle, MessageSquare, ExternalLink, Heart
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  provider: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Logo Design & Brand Identity',
    description: 'Professional logo design with complete brand identity package including style guide',
    provider: 'Creative Studio Pro',
    category: 'Design',
    price: '$299',
    rating: 4.9,
    reviews: 156,
    deliveryTime: '3-5 days',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg',
    tags: ['Logo', 'Branding', 'Identity'],
    featured: true
  },
  {
    id: 2,
    title: 'MVP Development',
    description: 'Full-stack web application development for your minimum viable product',
    provider: 'DevCraft Solutions',
    category: 'Development',
    price: '$2,500',
    rating: 4.8,
    reviews: 89,
    deliveryTime: '2-3 weeks',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    tags: ['MVP', 'Web App', 'Full-stack'],
    featured: true
  },
  {
    id: 3,
    title: 'Business Plan Writing',
    description: 'Comprehensive business plan with financial projections and market analysis',
    provider: 'Strategy Consultants',
    category: 'Business',
    price: '$499',
    rating: 4.7,
    reviews: 124,
    deliveryTime: '1 week',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    tags: ['Business Plan', 'Strategy', 'Projections']
  },
  {
    id: 4,
    title: 'Digital Marketing Campaign',
    description: 'Complete digital marketing strategy with social media and content marketing',
    provider: 'Growth Marketing Co',
    category: 'Marketing',
    price: '$799',
    rating: 4.6,
    reviews: 78,
    deliveryTime: '1-2 weeks',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
    tags: ['Marketing', 'Social Media', 'Content']
  },
  {
    id: 5,
    title: 'Legal Startup Package',
    description: 'Complete legal setup including incorporation, terms of service, and privacy policy',
    provider: 'Startup Legal Advisors',
    category: 'Legal',
    price: '$1,299',
    rating: 4.9,
    reviews: 67,
    deliveryTime: '5-7 days',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
    tags: ['Legal', 'Incorporation', 'Compliance']
  },
  {
    id: 6,
    title: 'Financial Modeling',
    description: 'Detailed financial models for fundraising and business planning',
    provider: 'Finance Pro Services',
    category: 'Finance',
    price: '$399',
    rating: 4.8,
    reviews: 92,
    deliveryTime: '3-4 days',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
    tags: ['Finance', 'Modeling', 'Fundraising']
  }
];

const categories = ['All', 'Design', 'Development', 'Business', 'Marketing', 'Legal', 'Finance'];

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = parseInt(service.price.replace('$', '').replace(',', ''));
      switch (priceRange) {
        case 'under-500':
          matchesPrice = price < 500;
          break;
        case '500-1000':
          matchesPrice = price >= 500 && price <= 1000;
          break;
        case 'over-1000':
          matchesPrice = price > 1000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Services Marketplace</h1>
          <p className="text-neutral-500">Find expert services to help build your startup</p>
        </div>
        <button className="btn-primary">
          <ShoppingBag className="h-5 w-5 mr-2" />
          Post a Request
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <select
              className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under-500">Under $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="over-1000">Over $1,000</option>
            </select>
            <select
              className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      {selectedCategory === 'All' && searchTerm === '' && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.filter(service => service.featured).map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-primary-100">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                        {service.category}
                      </span>
                      <span className="px-2 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-neutral-600 mb-3">{service.description}</p>
                    <div className="flex items-center text-sm text-neutral-500 mb-3">
                      <Star className="h-4 w-4 mr-1 text-accent-500" />
                      <span className="mr-2">{service.rating}</span>
                      <span className="mr-4">({service.reviews} reviews)</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.deliveryTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{service.price}</span>
                      <button className="btn-primary py-2 px-4 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Services */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">All Services</h2>
          <p className="text-neutral-500">{sortedServices.length} services found</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-neutral-50">
                  <Heart className="h-4 w-4 text-neutral-400" />
                </button>
                {service.featured && (
                  <span className="absolute top-4 left-4 px-2 py-1 bg-accent-500 text-white rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    {service.category}
                  </span>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 mr-1 text-accent-500" />
                    <span>{service.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{service.description}</p>
                <p className="text-sm text-neutral-500 mb-3">by {service.provider}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm text-neutral-500 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{service.deliveryTime}</span>
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{service.reviews} reviews</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{service.price}</span>
                  <div className="flex gap-2">
                    <button className="btn-outline py-2 px-3 text-sm">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                    <button className="btn-primary py-2 px-4 text-sm">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="mx-auto h-12 w-12 text-neutral-400" />
            <h3 className="mt-2 text-sm font-medium text-neutral-900">No services found</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Try adjusting your search criteria or browse different categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;