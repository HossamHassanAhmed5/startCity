import React, { useState } from 'react';
import { 
  Rocket, Edit, Save, Plus, Target, Users, 
  TrendingUp, Calendar, DollarSign, CheckCircle,
  AlertCircle, Clock, BarChart3
} from 'lucide-react';

const MyStartup: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [startupData, setStartupData] = useState({
    name: 'TechFlow AI',
    tagline: 'AI-powered workflow automation for modern teams',
    description: 'We help businesses automate repetitive tasks using advanced AI, saving time and reducing errors while improving productivity.',
    industry: 'Artificial Intelligence',
    stage: 'Seed',
    founded: '2025-01-15',
    employees: '8',
    location: 'San Francisco, CA',
    website: 'https://techflow.ai',
    funding: '$150,000',
    valuation: '$2,000,000'
  });

  const milestones = [
    { id: 1, title: 'MVP Launch', date: '2025-02-15', status: 'completed', description: 'Successfully launched our minimum viable product' },
    { id: 2, title: 'First 100 Users', date: '2025-03-01', status: 'completed', description: 'Reached our first 100 active users' },
    { id: 3, title: 'Seed Funding', date: '2025-03-15', status: 'in-progress', description: 'Raising $500K seed round' },
    { id: 4, title: 'Team Expansion', date: '2025-04-01', status: 'planned', description: 'Hire 3 additional engineers' },
  ];

  const metrics = [
    { label: 'Monthly Revenue', value: '$12,500', change: '+23%', trend: 'up' },
    { label: 'Active Users', value: '1,247', change: '+18%', trend: 'up' },
    { label: 'Customer Acquisition Cost', value: '$45', change: '-12%', trend: 'down' },
    { label: 'Monthly Churn Rate', value: '3.2%', change: '+0.5%', trend: 'up' },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to a database
    alert('Startup information saved successfully!');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-accent-500" />;
      case 'planned':
        return <AlertCircle className="h-5 w-5 text-neutral-400" />;
      default:
        return <Clock className="h-5 w-5 text-neutral-400" />;
    }
  };

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">My Startup</h1>
          <p className="text-neutral-500">Manage your startup profile and track progress</p>
        </div>
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="btn-primary"
        >
          {isEditing ? (
            <>
              <Save className="h-5 w-5 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="h-5 w-5 mr-2" />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-6">
              <Rocket className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-lg font-bold">Startup Profile</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Company Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={startupData.name}
                    onChange={(e) => setStartupData({ ...startupData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-neutral-900">{startupData.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Industry
                </label>
                {isEditing ? (
                  <select
                    value={startupData.industry}
                    onChange={(e) => setStartupData({ ...startupData, industry: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="FinTech">FinTech</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Education">Education</option>
                  </select>
                ) : (
                  <p className="text-neutral-900">{startupData.industry}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Tagline
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={startupData.tagline}
                    onChange={(e) => setStartupData({ ...startupData, tagline: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-neutral-900">{startupData.tagline}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Description
                </label>
                {isEditing ? (
                  <textarea
                    value={startupData.description}
                    onChange={(e) => setStartupData({ ...startupData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-neutral-900">{startupData.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-lg font-bold">Key Metrics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-neutral-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium text-neutral-700">{metric.label}</p>
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-success-600' : 'text-error-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-neutral-900">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Target className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-lg font-bold">Milestones</h2>
              </div>
              <button className="btn-outline py-2 px-4 text-sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Milestone
              </button>
            </div>

            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start p-4 border border-neutral-200 rounded-lg">
                  <div className="mr-3 mt-1">
                    {getStatusIcon(milestone.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-neutral-900">{milestone.title}</h3>
                      <span className="text-sm text-neutral-500">{milestone.date}</span>
                    </div>
                    <p className="text-sm text-neutral-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Company Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-neutral-700">Stage</p>
                <p className="text-neutral-900">{startupData.stage}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Founded</p>
                <p className="text-neutral-900">{new Date(startupData.founded).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Team Size</p>
                <p className="text-neutral-900">{startupData.employees} employees</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Location</p>
                <p className="text-neutral-900">{startupData.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Website</p>
                <a href={startupData.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                  {startupData.website}
                </a>
              </div>
            </div>
          </div>

          {/* Funding Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="text-lg font-bold">Funding</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-neutral-700">Total Raised</p>
                <p className="text-2xl font-bold text-neutral-900">{startupData.funding}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Valuation</p>
                <p className="text-lg font-medium text-neutral-900">{startupData.valuation}</p>
              </div>
              <button className="btn-primary w-full justify-center">
                Update Funding
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-neutral-400 mr-3" />
                  <span>Invite Team Members</span>
                </div>
              </button>
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-neutral-400 mr-3" />
                  <span>Update Metrics</span>
                </div>
              </button>
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-neutral-400 mr-3" />
                  <span>Schedule Pitch</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStartup;