import React, { useState } from 'react';
import { 
  TrendingUp, DollarSign, Users, Star, 
  Bookmark, MessageSquare, Filter, Search,
  Building, MapPin, Calendar, ArrowRight,
  Eye, Heart, CheckCircle, Clock
} from 'lucide-react';

interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  stage: string;
  location: string;
  funding: string;
  valuation: string;
  team: number;
  founded: string;
  traction: string;
  bookmarked: boolean;
  rating: number;
  views: number;
  likes: number;
}

interface PortfolioCompany {
  id: string;
  name: string;
  investment: string;
  equity: string;
  currentValue: string;
  status: 'growing' | 'scaling' | 'stable' | 'declining';
  lastUpdate: string;
  roi: string;
}

interface Deal {
  id: string;
  startup: string;
  stage: string;
  amount: string;
  status: 'reviewing' | 'due-diligence' | 'negotiating' | 'closed' | 'passed';
  date: string;
  probability: number;
}

const InvestorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('deal-flow');
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');

  const startups: Startup[] = [
    {
      id: '1',
      name: 'TechFlow AI',
      description: 'AI-powered workflow automation for modern teams',
      industry: 'Artificial Intelligence',
      stage: 'Seed',
      location: 'San Francisco, CA',
      funding: '$150K',
      valuation: '$2M',
      team: 8,
      founded: '2025-01-15',
      traction: '1,200 active users, $12K MRR',
      bookmarked: true,
      rating: 4.8,
      views: 1250,
      likes: 89
    },
    {
      id: '2',
      name: 'GreenCommerce',
      description: 'Sustainable e-commerce platform connecting eco-friendly brands',
      industry: 'E-commerce',
      stage: 'Series A',
      location: 'New York, NY',
      funding: '$500K',
      valuation: '$8M',
      team: 15,
      founded: '2024-08-20',
      traction: '5,000 merchants, $50K MRR',
      bookmarked: false,
      rating: 4.6,
      views: 980,
      likes: 67
    },
    {
      id: '3',
      name: 'HealthTech Solutions',
      description: 'Digital health monitoring and telemedicine platform',
      industry: 'Healthcare',
      stage: 'Pre-seed',
      location: 'Boston, MA',
      funding: '$75K',
      valuation: '$1.5M',
      team: 5,
      founded: '2025-02-01',
      traction: '500 patients, pilot with 3 hospitals',
      bookmarked: true,
      rating: 4.9,
      views: 750,
      likes: 124
    },
    {
      id: '4',
      name: 'FinTech Innovators',
      description: 'Blockchain-based payment solutions for emerging markets',
      industry: 'FinTech',
      stage: 'Seed',
      location: 'Austin, TX',
      funding: '$200K',
      valuation: '$3M',
      team: 12,
      founded: '2024-11-10',
      traction: '10,000 transactions, $25K MRR',
      bookmarked: false,
      rating: 4.7,
      views: 1100,
      likes: 78
    }
  ];

  const portfolioCompanies: PortfolioCompany[] = [
    {
      id: '1',
      name: 'DataFlow Analytics',
      investment: '$100K',
      equity: '8%',
      currentValue: '$150K',
      status: 'growing',
      lastUpdate: '2025-03-10',
      roi: '+50%'
    },
    {
      id: '2',
      name: 'EcoDelivery',
      investment: '$250K',
      equity: '12%',
      currentValue: '$400K',
      status: 'scaling',
      lastUpdate: '2025-03-08',
      roi: '+60%'
    },
    {
      id: '3',
      name: 'CloudSecure',
      investment: '$150K',
      equity: '10%',
      currentValue: '$180K',
      status: 'stable',
      lastUpdate: '2025-03-05',
      roi: '+20%'
    }
  ];

  const deals: Deal[] = [
    {
      id: '1',
      startup: 'AI Robotics Corp',
      stage: 'Series A',
      amount: '$2M',
      status: 'due-diligence',
      date: '2025-03-15',
      probability: 75
    },
    {
      id: '2',
      startup: 'BioTech Innovations',
      stage: 'Seed',
      amount: '$500K',
      status: 'negotiating',
      date: '2025-03-12',
      probability: 60
    },
    {
      id: '3',
      startup: 'EdTech Platform',
      stage: 'Pre-seed',
      amount: '$100K',
      status: 'reviewing',
      date: '2025-03-10',
      probability: 40
    }
  ];

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === 'all' || startup.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  const bookmarkedStartups = startups.filter(startup => startup.bookmarked);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'growing':
        return 'bg-success-100 text-success-700';
      case 'scaling':
        return 'bg-primary-100 text-primary-700';
      case 'stable':
        return 'bg-secondary-100 text-secondary-700';
      case 'declining':
        return 'bg-error-100 text-error-700';
      case 'due-diligence':
        return 'bg-accent-100 text-accent-700';
      case 'negotiating':
        return 'bg-primary-100 text-primary-700';
      case 'reviewing':
        return 'bg-neutral-100 text-neutral-700';
      case 'closed':
        return 'bg-success-100 text-success-700';
      case 'passed':
        return 'bg-error-100 text-error-700';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  const toggleBookmark = (startupId: string) => {
    // In a real app, this would update the database
    console.log(`Toggling bookmark for startup ${startupId}`);
  };

  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Investor Dashboard</h1>
        <p className="text-neutral-500">Discover and track promising startups</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-success-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{startups.length}</p>
              <p className="text-sm text-neutral-500">Startups Tracked</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">$500K</p>
              <p className="text-sm text-neutral-500">Total Invested</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-secondary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{portfolioCompanies.length}</p>
              <p className="text-sm text-neutral-500">Portfolio Companies</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-accent-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{bookmarkedStartups.length}</p>
              <p className="text-sm text-neutral-500">Bookmarked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('deal-flow')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'deal-flow'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Deal Flow ({deals.length})
            </button>
            <button
              onClick={() => setActiveTab('startup-directory')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'startup-directory'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Startup Directory ({startups.length})
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'portfolio'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Portfolio ({portfolioCompanies.length})
            </button>
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'bookmarks'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Bookmarks ({bookmarkedStartups.length})
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'messages'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Messages
            </button>
          </nav>
        </div>

        {/* Search and Filter */}
        {(activeTab === 'startup-directory' || activeTab === 'deal-flow') && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder={activeTab === 'deal-flow' ? 'Search deals...' : 'Search startups...'}
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
              >
                <option value="all">All Stages</option>
                <option value="Pre-seed">Pre-seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'deal-flow' && (
          <div className="p-6">
            <div className="space-y-4">
              {deals.map((deal) => (
                <div key={deal.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{deal.startup}</h3>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                          {deal.stage}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deal.status)}`}>
                          {deal.status.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-neutral-500">Amount</p>
                          <p className="font-medium">{deal.amount}</p>
                        </div>
                        <div>
                          <p className="text-neutral-500">Date</p>
                          <p className="font-medium">{new Date(deal.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-neutral-500">Probability</p>
                          <p className="font-medium">{deal.probability}%</p>
                        </div>
                        <div>
                          <p className="text-neutral-500">Status</p>
                          <p className="font-medium capitalize">{deal.status.replace('-', ' ')}</p>
                        </div>
                      </div>

                      <div className="w-full bg-neutral-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: `${deal.probability}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-6">
                      <button className="btn-outline py-2 px-4 text-sm">
                        View Details
                      </button>
                      <button className="btn-primary py-2 px-4 text-sm">
                        Update Status
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'startup-directory' && (
          <div className="p-6">
            <div className="space-y-6">
              {filteredStartups.map((startup) => (
                <div key={startup.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{startup.name}</h3>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                          {startup.industry}
                        </span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                          {startup.stage}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-accent-500 mr-1" />
                          <span className="text-sm font-medium">{startup.rating}</span>
                        </div>
                      </div>
                      <p className="text-neutral-600 mb-4">{startup.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-neutral-500">Location</p>
                          <p className="font-medium">{startup.location}</p>
                        </div>
                        <div>
                          <p className="text-neutral-500">Funding</p>
                          <p className="font-medium">{startup.funding}</p>
                        </div>
                        <div>
                          <p className="text-neutral-500">Valuation</p>
                          <p className="font-medium">{startup.valuation}</p>
                        </div>
                        <div>
                          <p className="text-neutral-500">Team Size</p>
                          <p className="font-medium">{startup.team} people</p>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                        <p className="text-sm font-medium text-neutral-700">Traction:</p>
                        <p className="text-sm text-neutral-600">{startup.traction}</p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {startup.views} views
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {startup.likes} likes
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Founded {new Date(startup.founded).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-6">
                      <button 
                        onClick={() => toggleBookmark(startup.id)}
                        className={`p-2 rounded-md ${
                          startup.bookmarked 
                            ? 'bg-accent-100 text-accent-600' 
                            : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'
                        }`}
                      >
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-neutral-100 text-neutral-400 hover:bg-neutral-200 rounded-md">
                        <MessageSquare className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                    <div className="flex items-center text-sm text-neutral-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {startup.location}
                    </div>
                    <div className="flex gap-3">
                      <button className="btn-outline py-2 px-4 text-sm">
                        View Details
                      </button>
                      <button className="btn-primary py-2 px-4 text-sm">
                        Express Interest
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioCompanies.map((company) => (
                <div key={company.id} className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold">{company.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(company.status)}`}>
                      {company.status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Investment</span>
                      <span className="font-medium">{company.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Equity</span>
                      <span className="font-medium">{company.equity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Current Value</span>
                      <span className="font-medium text-success-600">{company.currentValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">ROI</span>
                      <span className={`font-medium ${company.roi.startsWith('+') ? 'text-success-600' : 'text-error-600'}`}>
                        {company.roi}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Last Update</span>
                      <span className="text-sm text-neutral-500">{new Date(company.lastUpdate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 btn-outline py-2">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bookmarks' && (
          <div className="p-6">
            <div className="space-y-4">
              {bookmarkedStartups.map((startup) => (
                <div key={startup.id} className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{startup.name}</h3>
                      <p className="text-sm text-neutral-600">{startup.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                          {startup.industry}
                        </span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                          {startup.stage}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => toggleBookmark(startup.id)}
                        className="p-2 bg-accent-100 text-accent-600 rounded-md"
                      >
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="btn-primary py-2 px-4 text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {bookmarkedStartups.length === 0 && (
                <div className="text-center py-12">
                  <Bookmark className="mx-auto h-12 w-12 text-neutral-400" />
                  <h3 className="mt-2 text-sm font-medium text-neutral-900">No bookmarks yet</h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Bookmark startups you're interested in to see them here.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Investment Performance</h3>
                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Total Portfolio Value</span>
                      <span className="text-lg font-bold text-success-600">$730K</span>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-600">
                      <span>Total Invested: $500K</span>
                      <span className="text-success-600">+46% ROI</span>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Performance by Stage</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Seed Stage</span>
                        <span className="text-sm font-medium text-success-600">+52%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Series A</span>
                        <span className="text-sm font-medium text-success-600">+38%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pre-seed</span>
                        <span className="text-sm font-medium text-success-600">+25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Deal Flow Analytics</h3>
                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Active Deals</span>
                      <span className="text-lg font-bold">{deals.length}</span>
                    </div>
                    <div className="text-sm text-neutral-600">
                      Average deal size: $867K
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Deal Status Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Due Diligence</span>
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Negotiating</span>
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Reviewing</span>
                        <span className="text-sm font-medium">1</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Industry Focus</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">AI/ML</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">FinTech</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Healthcare</span>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">E-commerce</span>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="p-6">
            <div className="space-y-4">
              <div className="border border-neutral-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium">Sarah Chen - TechFlow AI</h4>
                    <p className="text-sm text-neutral-600">Thanks for your interest in our Series A round...</p>
                  </div>
                  <span className="text-xs text-neutral-500">2 hours ago</span>
                </div>
                <div className="flex gap-2">
                  <button className="btn-outline py-1 px-3 text-sm">Reply</button>
                  <button className="btn-primary py-1 px-3 text-sm">Schedule Call</button>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium">Michael Rodriguez - GreenCommerce</h4>
                    <p className="text-sm text-neutral-600">Following up on our conversation about the sustainability metrics...</p>
                  </div>
                  <span className="text-xs text-neutral-500">1 day ago</span>
                </div>
                <div className="flex gap-2">
                  <button className="btn-outline py-1 px-3 text-sm">Reply</button>
                  <button className="btn-primary py-1 px-3 text-sm">Schedule Call</button>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium">Dr. Emily Watson - HealthTech Solutions</h4>
                    <p className="text-sm text-neutral-600">Excited to share our latest pilot results with you...</p>
                  </div>
                  <span className="text-xs text-neutral-500">3 days ago</span>
                </div>
                <div className="flex gap-2">
                  <button className="btn-outline py-1 px-3 text-sm">Reply</button>
                  <button className="btn-primary py-1 px-3 text-sm">Schedule Call</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorDashboard;