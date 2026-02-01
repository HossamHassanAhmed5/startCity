import React, { useState } from 'react';
import { 
  Crown, Star, Users, Zap, Lock, Unlock, 
  TrendingUp, Award, Globe, MessageSquare,
  Calendar, DollarSign, Building, ArrowRight
} from 'lucide-react';

interface NetworkTier {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  benefits: string[];
  memberCount: number;
  unlocked: boolean;
  icon: React.ReactNode;
  color: string;
}

interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  tier: string;
  rating: number;
  sessions: number;
  available: boolean;
}

interface FundingPool {
  id: string;
  name: string;
  description: string;
  amount: string;
  tier: string;
  applications: number;
  deadline: string;
  requirements: string[];
}

const VeloraNetwork: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tiers');

  const networkTiers: NetworkTier[] = [
    {
      id: 'explorer',
      name: 'Explorer',
      description: 'Entry-level access to the Velora ecosystem',
      requirements: ['Complete profile', 'Verify email'],
      benefits: ['Basic community access', 'Standard resources', 'Peer networking'],
      memberCount: 15420,
      unlocked: true,
      icon: <Users className="h-6 w-6" />,
      color: 'bg-neutral-100 text-neutral-700'
    },
    {
      id: 'builder',
      name: 'Builder',
      description: 'Enhanced access for active entrepreneurs',
      requirements: ['Complete startup profile', '30 days active', 'Community participation'],
      benefits: ['Priority support', 'Advanced tools', 'Mentor matching', 'Exclusive events'],
      memberCount: 3240,
      unlocked: true,
      icon: <Star className="h-6 w-6" />,
      color: 'bg-primary-100 text-primary-700'
    },
    {
      id: 'innovator',
      name: 'Innovator',
      description: 'Premium tier for validated startups',
      requirements: ['Validated MVP', 'Revenue or funding', 'Community contributions'],
      benefits: ['Top-tier mentors', 'Funding pools', 'Strategic partnerships', 'VIP events'],
      memberCount: 890,
      unlocked: false,
      icon: <Crown className="h-6 w-6" />,
      color: 'bg-accent-100 text-accent-700'
    },
    {
      id: 'visionary',
      name: 'Visionary',
      description: 'Elite tier for industry leaders',
      requirements: ['Proven track record', 'Significant impact', 'Invitation only'],
      benefits: ['Exclusive access', 'Direct investor connections', 'Advisory opportunities', 'Global summits'],
      memberCount: 156,
      unlocked: false,
      icon: <Zap className="h-6 w-6" />,
      color: 'bg-secondary-100 text-secondary-700'
    }
  ];

  const mentors: Mentor[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Former VP of Product',
      company: 'Google',
      expertise: ['Product Strategy', 'AI/ML', 'Team Building'],
      tier: 'innovator',
      rating: 4.9,
      sessions: 156,
      available: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Serial Entrepreneur',
      company: '3x Successful Exits',
      expertise: ['Fundraising', 'Scaling', 'Exit Strategy'],
      tier: 'visionary',
      rating: 5.0,
      sessions: 89,
      available: false
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      title: 'Innovation Director',
      company: 'MIT',
      expertise: ['Deep Tech', 'Research', 'IP Strategy'],
      tier: 'innovator',
      rating: 4.8,
      sessions: 124,
      available: true
    }
  ];

  const fundingPools: FundingPool[] = [
    {
      id: '1',
      name: 'Velora Innovation Fund',
      description: 'Seed funding for breakthrough technologies',
      amount: '$50K - $250K',
      tier: 'innovator',
      applications: 45,
      deadline: '2025-04-30',
      requirements: ['Validated MVP', 'Clear market opportunity', 'Strong team']
    },
    {
      id: '2',
      name: 'Visionary Ventures Pool',
      description: 'Series A funding for scaling startups',
      amount: '$500K - $2M',
      tier: 'visionary',
      applications: 12,
      deadline: '2025-05-15',
      requirements: ['Proven traction', 'Scalable business model', 'Market leadership potential']
    }
  ];

  const currentTier = networkTiers.find(tier => tier.unlocked) || networkTiers[0];

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Velora Network</h1>
          <p className="text-neutral-500">Unlock exclusive access to mentors, funding, and opportunities</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-full ${currentTier.color} font-medium`}>
            {currentTier.icon}
            <span className="ml-2">{currentTier.name}</span>
          </div>
        </div>
      </div>

      {/* Current Tier Overview */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 mb-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Your Network Status</h2>
            <p className="opacity-90">You're currently a {currentTier.name} member</p>
            <p className="text-sm opacity-75 mt-1">
              {currentTier.memberCount.toLocaleString()} members in your tier
            </p>
          </div>
          <div className="text-right">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              {currentTier.icon}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('tiers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tiers'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Network Tiers
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'mentors'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Elite Mentors
            </button>
            <button
              onClick={() => setActiveTab('funding')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'funding'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Funding Pools
            </button>
            <button
              onClick={() => setActiveTab('districts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'districts'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Sponsored Districts
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'tiers' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {networkTiers.map((tier) => (
                <div key={tier.id} className={`border-2 rounded-xl p-6 ${
                  tier.unlocked ? 'border-primary-200 bg-primary-50' : 'border-neutral-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full ${tier.color} mr-3`}>
                        {tier.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{tier.name}</h3>
                        <p className="text-sm text-neutral-600">{tier.memberCount.toLocaleString()} members</p>
                      </div>
                    </div>
                    {tier.unlocked ? (
                      <Unlock className="h-6 w-6 text-success-500" />
                    ) : (
                      <Lock className="h-6 w-6 text-neutral-400" />
                    )}
                  </div>

                  <p className="text-neutral-600 mb-4">{tier.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      {tier.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Benefits:</h4>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!tier.unlocked && (
                    <button className="w-full btn-primary">
                      Unlock {tier.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mentors' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Elite Mentors</h3>
              <p className="text-neutral-600">Connect with industry leaders and successful entrepreneurs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold">{mentor.name}</h4>
                      <p className="text-sm text-neutral-600">{mentor.title}</p>
                      <p className="text-sm text-neutral-500">{mentor.company}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-accent-500 mr-1" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <span>{mentor.sessions} sessions</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      mentor.available ? 'bg-success-100 text-success-700' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {mentor.available ? 'Available' : 'Busy'}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button className={`flex-1 py-2 px-3 text-sm rounded-md font-medium ${
                      mentor.tier === 'visionary' && !networkTiers.find(t => t.id === 'visionary')?.unlocked
                        ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                        : 'btn-primary'
                    }`}>
                      {mentor.tier === 'visionary' && !networkTiers.find(t => t.id === 'visionary')?.unlocked
                        ? 'Unlock Required'
                        : 'Book Session'
                      }
                    </button>
                    <button className="btn-outline py-2 px-3 text-sm">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'funding' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Exclusive Funding Pools</h3>
              <p className="text-neutral-600">Access tier-exclusive funding opportunities</p>
            </div>

            <div className="space-y-6">
              {fundingPools.map((pool) => (
                <div key={pool.id} className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{pool.name}</h4>
                      <p className="text-neutral-600">{pool.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{pool.amount}</p>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        pool.tier === 'innovator' ? 'bg-accent-100 text-accent-700' : 'bg-secondary-100 text-secondary-700'
                      }`}>
                        {pool.tier} tier
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-neutral-400 mr-2" />
                      <span className="text-sm">{pool.applications} applications</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-neutral-400 mr-2" />
                      <span className="text-sm">Due {new Date(pool.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-neutral-400 mr-2" />
                      <span className="text-sm">Tier exclusive</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Requirements:</h5>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      {pool.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`btn-primary ${
                    !networkTiers.find(t => t.id === pool.tier)?.unlocked
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}>
                    {!networkTiers.find(t => t.id === pool.tier)?.unlocked
                      ? `Unlock ${pool.tier} tier required`
                      : 'Apply Now'
                    }
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'districts' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Sponsored Districts</h3>
              <p className="text-neutral-600">Premium co-working and collaboration spaces</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Silicon Valley Hub</h4>
                  <p className="text-neutral-600 mb-4">Premium co-working space in the heart of Silicon Valley</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-neutral-400 mr-2" />
                      <span className="text-sm">50 desks available</span>
                    </div>
                    <span className="px-2 py-1 bg-accent-100 text-accent-700 rounded-full text-xs">
                      Innovator+
                    </span>
                  </div>
                  <button className="w-full btn-primary">
                    Request Access
                  </button>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-secondary-500 to-accent-500"></div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">NYC Innovation Center</h4>
                  <p className="text-neutral-600 mb-4">Collaborative workspace in Manhattan's tech district</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-neutral-400 mr-2" />
                      <span className="text-sm">30 desks available</span>
                    </div>
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                      Visionary
                    </span>
                  </div>
                  <button className="w-full btn-outline">
                    Unlock Required
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VeloraNetwork;