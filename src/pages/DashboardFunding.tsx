import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, Calendar, Target, 
  Plus, Filter, Search, CheckCircle, Clock, AlertCircle
} from 'lucide-react';

interface FundingOpportunity {
  id: number;
  title: string;
  type: 'Grant' | 'VC' | 'Angel' | 'Competition' | 'Accelerator';
  amount: string;
  deadline: string;
  status: 'applied' | 'eligible' | 'not-eligible' | 'closed';
  matchScore: number;
  description: string;
}

interface Application {
  id: number;
  opportunityTitle: string;
  appliedDate: string;
  status: 'pending' | 'under-review' | 'approved' | 'rejected';
  amount: string;
  nextStep?: string;
}

const fundingOpportunities: FundingOpportunity[] = [
  {
    id: 1,
    title: 'Tech Innovation Grant 2025',
    type: 'Grant',
    amount: '$50,000',
    deadline: '2025-04-15',
    status: 'eligible',
    matchScore: 95,
    description: 'Non-dilutive funding for early-stage tech startups with innovative solutions'
  },
  {
    id: 2,
    title: 'Seed Accelerator Program',
    type: 'Accelerator',
    amount: '$150,000',
    deadline: '2025-03-30',
    status: 'applied',
    matchScore: 88,
    description: 'Three-month program with funding, mentorship, and resources'
  },
  {
    id: 3,
    title: 'AI Startup Competition',
    type: 'Competition',
    amount: '$100,000',
    deadline: '2025-05-01',
    status: 'eligible',
    matchScore: 92,
    description: 'Pitch competition for AI-focused startups'
  }
];

const applications: Application[] = [
  {
    id: 1,
    opportunityTitle: 'Seed Accelerator Program',
    appliedDate: '2025-03-01',
    status: 'under-review',
    amount: '$150,000',
    nextStep: 'Interview scheduled for March 20th'
  },
  {
    id: 2,
    opportunityTitle: 'Female Founders Grant',
    appliedDate: '2025-02-15',
    status: 'approved',
    amount: '$25,000',
    nextStep: 'Funding disbursement in progress'
  }
];

const DashboardFunding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredOpportunities = fundingOpportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || opp.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'under-review':
        return <Clock className="h-5 w-5 text-accent-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-neutral-400" />;
      case 'rejected':
        return <AlertCircle className="h-5 w-5 text-error-500" />;
      default:
        return <Clock className="h-5 w-5 text-neutral-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-success-100 text-success-700';
      case 'under-review':
        return 'bg-accent-100 text-accent-700';
      case 'pending':
        return 'bg-neutral-100 text-neutral-700';
      case 'rejected':
        return 'bg-error-100 text-error-700';
      case 'eligible':
        return 'bg-primary-100 text-primary-700';
      case 'applied':
        return 'bg-secondary-100 text-secondary-700';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Funding</h1>
          <p className="text-neutral-500">Track funding opportunities and applications</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-5 w-5 mr-2" />
          Add Custom Opportunity
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-success-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">$175K</p>
              <p className="text-sm text-neutral-500">Total Applied</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-neutral-500">Applications</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Target className="h-8 w-8 text-accent-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-neutral-500">Opportunities</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-secondary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">89%</p>
              <p className="text-sm text-neutral-500">Avg Match Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'opportunities'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Opportunities ({fundingOpportunities.length})
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              My Applications ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tracker'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Funding Tracker
            </button>
          </nav>
        </div>

        {/* Search and Filter for Opportunities */}
        {activeTab === 'opportunities' && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Grant">Grants</option>
                <option value="VC">VC Funding</option>
                <option value="Angel">Angel Investment</option>
                <option value="Competition">Competitions</option>
                <option value="Accelerator">Accelerators</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'opportunities' && (
          <div className="p-6">
            <div className="space-y-4">
              {filteredOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{opportunity.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(opportunity.status)}`}>
                          {opportunity.status.replace('-', ' ')}
                        </span>
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium">
                          {opportunity.type}
                        </span>
                      </div>
                      <p className="text-neutral-600 mb-3">{opportunity.description}</p>
                      <div className="flex items-center gap-6 text-sm text-neutral-500">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {opportunity.amount}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Target className="h-4 w-4 mr-1" />
                          {opportunity.matchScore}% match
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {opportunity.status === 'eligible' && (
                        <button className="btn-primary py-2 px-4 text-sm">
                          Apply Now
                        </button>
                      )}
                      <button className="btn-outline py-2 px-4 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="p-6">
            <div className="space-y-4">
              {applications.map((application) => (
                <div key={application.id} className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{application.opportunityTitle}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                          {application.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-neutral-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Applied: {new Date(application.appliedDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {application.amount}
                        </div>
                      </div>
                      {application.nextStep && (
                        <div className="bg-neutral-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-neutral-700">Next Step:</p>
                          <p className="text-sm text-neutral-600">{application.nextStep}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center">
                      {getStatusIcon(application.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tracker' && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Funding Progress</h3>
                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Funding Goal</span>
                      <span className="text-sm text-neutral-500">$500,000</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-3">
                      <div className="bg-primary-600 h-3 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-500 mt-1">
                      <span>$175,000 raised</span>
                      <span>35%</span>
                    </div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Funding Sources</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Grants</span>
                        <span className="text-sm font-medium">$25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Angel Investment</span>
                        <span className="text-sm font-medium">$150,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Personal Investment</span>
                        <span className="text-sm font-medium">$0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Upcoming Deadlines</h3>
                <div className="space-y-3">
                  {fundingOpportunities
                    .filter(opp => opp.status === 'eligible')
                    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
                    .map((opp) => (
                      <div key={opp.id} className="border border-neutral-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{opp.title}</h4>
                            <p className="text-sm text-neutral-600">{opp.amount}</p>
                          </div>
                          <span className="text-sm text-neutral-500">
                            {new Date(opp.deadline).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardFunding;