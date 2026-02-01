import React, { useState } from 'react';
import { Search, Filter, CalendarClock, DollarSign, ArrowRight, Globe } from 'lucide-react';

// Components
import FundingCard from '../components/funding/FundingCard';
import SubmissionForm from '../components/funding/SubmissionForm';

// Sample data
const fundingOpportunities = [
  {
    id: 1,
    title: 'Velora Innovation Grant',
    description: 'Non-dilutive funding for early-stage tech startups with innovative solutions',
    type: 'Grant',
    amount: 'Up to $25,000',
    deadline: '2025-06-15',
    eligibility: 'Pre-seed startups, less than 2 years old',
    organization: 'Velora Foundation',
    location: 'Global',
  },
  {
    id: 2,
    title: 'Seed Accelerator Program',
    description: 'Three-month program with funding, mentorship, and resources for early-stage startups',
    type: 'Accelerator',
    amount: '$150,000 for 7% equity',
    deadline: '2025-05-01',
    eligibility: 'Pre-seed to seed stage startups with MVP',
    organization: 'TechStars',
    location: 'United States',
  },
  {
    id: 3,
    title: 'Green Technology Fund',
    description: 'Investment fund focused on sustainable and environmental technology solutions',
    type: 'VC Funding',
    amount: '$500,000 - $2,000,000',
    deadline: 'Rolling applications',
    eligibility: 'Seed to Series A startups in green tech',
    organization: 'EcoVentures Capital',
    location: 'Europe, North America',
  },
  {
    id: 4,
    title: 'Female Founders Competition',
    description: 'Pitch competition for women-led startups with prizes and investment opportunities',
    type: 'Competition',
    amount: 'Grand prize: $100,000',
    deadline: '2025-07-30',
    eligibility: 'Startups with at least one female founder',
    organization: 'Women in Tech Alliance',
    location: 'Global',
  },
  {
    id: 5,
    title: 'Healthcare Innovation Fund',
    description: 'Venture capital for startups revolutionizing healthcare delivery and technology',
    type: 'VC Funding',
    amount: '$1,000,000 - $5,000,000',
    deadline: 'Rolling applications',
    eligibility: 'Series A-ready healthcare startups',
    organization: 'MedTech Ventures',
    location: 'United States, Canada',
  },
  {
    id: 6,
    title: 'Social Impact Challenge',
    description: 'Funding and support for startups addressing significant social challenges',
    type: 'Competition',
    amount: 'Up to $50,000',
    deadline: '2025-08-15',
    eligibility: 'Startups with clear social impact mission',
    organization: 'Impact Hub',
    location: 'Global',
  },
];

const FundingOpportunities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const types = ['Grant', 'Accelerator', 'VC Funding', 'Competition'];

  // Filter opportunities based on search term and type
  const filteredOpportunities = fundingOpportunities.filter((opportunity) => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || opportunity.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Funding Opportunities</h1>
          <p className="text-lg text-neutral-600">
            Discover grants, investors, accelerators, and competitions for your startup
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
                placeholder="Search opportunities..."
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Express Interest Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="btn-primary py-3 px-8 text-center"
          >
            Express Interest in Funding
          </button>
        </div>

        {/* Submission Form (conditionally rendered) */}
        {showSubmissionForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold mb-6">Funding Interest Form</h2>
            <SubmissionForm onClose={() => setShowSubmissionForm(false)} />
          </div>
        )}

        {/* Upcoming Deadlines */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Upcoming Deadlines</h2>
            <a href="#" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
              View calendar <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Opportunity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Deadline
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {fundingOpportunities
                    .filter(opp => opp.deadline !== 'Rolling applications')
                    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
                    .slice(0, 3)
                    .map((opportunity) => (
                      <tr key={opportunity.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-neutral-900">{opportunity.title}</div>
                          <div className="text-sm text-neutral-500">{opportunity.organization}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                            {opportunity.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-neutral-700">
                            <CalendarClock className="h-4 w-4 mr-1 text-neutral-400" />
                            {new Date(opportunity.deadline).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1 text-neutral-400" />
                            {opportunity.amount}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* All Opportunities */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Funding Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <FundingCard key={opportunity.id} opportunity={opportunity} />
            ))}
            
            {filteredOpportunities.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-neutral-500">
                  No funding opportunities found matching your criteria. Try adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingOpportunities;