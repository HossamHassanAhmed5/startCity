import React, { useState } from 'react';
import { 
  Users, Search, Filter, MessageSquare, UserPlus,
  Building, MapPin, Star, Calendar, Mail, Linkedin
} from 'lucide-react';

interface Connection {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  connectionDate: string;
  avatar?: string;
  skills: string[];
  mutualConnections: number;
  isOnline: boolean;
}

const connections: Connection[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    industry: 'Technology',
    connectionDate: '2025-02-15',
    skills: ['Product Strategy', 'User Research', 'Agile'],
    mutualConnections: 12,
    isOnline: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'DataFlow AI',
    location: 'New York, NY',
    industry: 'Artificial Intelligence',
    connectionDate: '2025-02-10',
    skills: ['Machine Learning', 'Leadership', 'Fundraising'],
    mutualConnections: 8,
    isOnline: false
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthLab',
    location: 'Austin, TX',
    industry: 'Marketing',
    connectionDate: '2025-02-08',
    skills: ['Digital Marketing', 'Growth Hacking', 'Analytics'],
    mutualConnections: 15,
    isOnline: true
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Senior Developer',
    company: 'CodeCraft',
    location: 'Seattle, WA',
    industry: 'Software Development',
    connectionDate: '2025-02-05',
    skills: ['React', 'Node.js', 'Cloud Architecture'],
    mutualConnections: 6,
    isOnline: false
  }
];

const suggestedConnections = [
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'UX Designer',
    company: 'DesignStudio',
    location: 'Los Angeles, CA',
    industry: 'Design',
    skills: ['UI/UX Design', 'Prototyping', 'User Testing'],
    mutualConnections: 3,
    reason: 'Works in similar industry'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Investor',
    company: 'Venture Partners',
    location: 'Boston, MA',
    industry: 'Venture Capital',
    skills: ['Investment', 'Due Diligence', 'Portfolio Management'],
    mutualConnections: 7,
    reason: 'Invests in your industry'
  }
];

const Network: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('connections');

  const filteredConnections = connections.filter(connection => {
    const matchesSearch = connection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         connection.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         connection.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || connection.industry.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Network</h1>
          <p className="text-neutral-500">Connect and collaborate with fellow entrepreneurs</p>
        </div>
        <button className="btn-primary">
          <UserPlus className="h-5 w-5 mr-2" />
          Find Connections
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">247</p>
              <p className="text-sm text-neutral-500">Connections</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-secondary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">18</p>
              <p className="text-sm text-neutral-500">Active Conversations</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-accent-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-neutral-500">Companies</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-success-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">156</p>
              <p className="text-sm text-neutral-500">Endorsements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('connections')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'connections'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              My Connections ({connections.length})
            </button>
            <button
              onClick={() => setActiveTab('suggestions')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'suggestions'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Suggested ({suggestedConnections.length})
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
        {activeTab === 'connections' && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search connections..."
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select
                  className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="all">All Industries</option>
                  <option value="technology">Technology</option>
                  <option value="artificial intelligence">AI</option>
                  <option value="marketing">Marketing</option>
                  <option value="software development">Development</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-4 w-4 text-neutral-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'connections' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConnections.map((connection) => (
                <div key={connection.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary-600" />
                        </div>
                        {connection.isOnline && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-success-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-neutral-900">{connection.name}</h3>
                        <p className="text-sm text-neutral-500">{connection.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-neutral-600">
                      <Building className="h-4 w-4 mr-2" />
                      {connection.company}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {connection.location}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Connected {new Date(connection.connectionDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {connection.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-neutral-500 mb-4">
                    {connection.mutualConnections} mutual connections
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 btn-outline py-2 px-3 text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Message
                    </button>
                    <button className="btn-outline py-2 px-3 text-sm">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedConnections.map((suggestion) => (
                <div key={suggestion.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-secondary-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-neutral-900">{suggestion.name}</h3>
                        <p className="text-sm text-neutral-500">{suggestion.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-neutral-600">
                      <Building className="h-4 w-4 mr-2" />
                      {suggestion.company}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {suggestion.location}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {suggestion.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-neutral-500 mb-4">
                    {suggestion.mutualConnections} mutual connections • {suggestion.reason}
                  </div>

                  <button className="w-full btn-primary py-2 px-3 text-sm">
                    <UserPlus className="h-4 w-4 mr-1" />
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="p-6">
            <div className="text-center py-12">
              <MessageSquare className="mx-auto h-12 w-12 text-neutral-400" />
              <h3 className="mt-2 text-sm font-medium text-neutral-900">No messages yet</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Start a conversation with your connections to see messages here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Network;