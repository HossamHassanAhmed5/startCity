import React, { useState } from 'react';
import { 
  Users, Plus, Search, Filter, Mail, MessageSquare, 
  UserPlus, Crown, Star, Bot, CheckCircle, Clock, X
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  type: 'founder' | 'advisor' | 'employee' | 'ai-agent';
  status: 'active' | 'invited' | 'pending';
  email?: string;
  skills: string[];
  joinDate: string;
  avatar?: string;
  isOwner?: boolean;
}

interface Invitation {
  id: string;
  email: string;
  role: string;
  type: 'founder' | 'advisor' | 'employee';
  sentDate: string;
  status: 'pending' | 'accepted' | 'declined';
}

const TeamBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showInviteModal, setShowInviteModal] = useState(false);

  const [teamMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'John Doe',
      role: 'CEO & Founder',
      type: 'founder',
      status: 'active',
      email: 'john@startup.com',
      skills: ['Leadership', 'Strategy', 'Fundraising'],
      joinDate: '2025-01-01',
      isOwner: true
    },
    {
      id: '2',
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      type: 'founder',
      status: 'active',
      email: 'sarah@startup.com',
      skills: ['Full-Stack Development', 'AI/ML', 'System Architecture'],
      joinDate: '2025-01-01'
    },
    {
      id: '3',
      name: 'Dr. Michael Rodriguez',
      role: 'Technical Advisor',
      type: 'advisor',
      status: 'active',
      email: 'michael@advisor.com',
      skills: ['AI Research', 'Product Strategy', 'Mentoring'],
      joinDate: '2025-01-15'
    },
    {
      id: '4',
      name: 'AI Marketing Assistant',
      role: 'Marketing Automation',
      type: 'ai-agent',
      status: 'active',
      skills: ['Content Creation', 'Social Media', 'Analytics'],
      joinDate: '2025-02-01'
    }
  ]);

  const [invitations] = useState<Invitation[]>([
    {
      id: '1',
      email: 'alex@designer.com',
      role: 'Lead Designer',
      type: 'employee',
      sentDate: '2025-03-10',
      status: 'pending'
    },
    {
      id: '2',
      email: 'maria@marketing.com',
      role: 'Marketing Director',
      type: 'employee',
      sentDate: '2025-03-08',
      status: 'pending'
    }
  ]);

  const filteredTeamMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.type === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'invited':
        return <Clock className="h-5 w-5 text-accent-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-neutral-400" />;
      default:
        return <Clock className="h-5 w-5 text-neutral-400" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'founder':
        return <Crown className="h-5 w-5 text-accent-500" />;
      case 'advisor':
        return <Star className="h-5 w-5 text-secondary-500" />;
      case 'ai-agent':
        return <Bot className="h-5 w-5 text-primary-500" />;
      default:
        return <Users className="h-5 w-5 text-neutral-400" />;
    }
  };

  const InviteModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Invite Team Member</h3>
          <button onClick={() => setShowInviteModal(false)}>
            <X className="h-5 w-5 text-neutral-400" />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="colleague@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Role
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., Lead Developer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Type
            </label>
            <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500">
              <option value="employee">Employee</option>
              <option value="founder">Co-Founder</option>
              <option value="advisor">Advisor</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="Personal message to include with the invitation..."
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowInviteModal(false)}
              className="flex-1 btn-outline"
            >
              Cancel
            </button>
            <button type="submit" className="flex-1 btn-primary">
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Team Builder</h1>
          <p className="text-neutral-500">Build and manage your startup team</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline">
            <Bot className="h-5 w-5 mr-2" />
            Add AI Agent
          </button>
          <button 
            onClick={() => setShowInviteModal(true)}
            className="btn-primary"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Invite Member
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{teamMembers.length}</p>
              <p className="text-sm text-neutral-500">Team Members</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Crown className="h-8 w-8 text-accent-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{teamMembers.filter(m => m.type === 'founder').length}</p>
              <p className="text-sm text-neutral-500">Founders</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-secondary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{teamMembers.filter(m => m.type === 'advisor').length}</p>
              <p className="text-sm text-neutral-500">Advisors</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-success-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{teamMembers.filter(m => m.type === 'ai-agent').length}</p>
              <p className="text-sm text-neutral-500">AI Agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('team')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'team'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Team Members ({teamMembers.length})
            </button>
            <button
              onClick={() => setActiveTab('invitations')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'invitations'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Pending Invitations ({invitations.length})
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'roles'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Role Management
            </button>
          </nav>
        </div>

        {/* Search and Filter */}
        {activeTab === 'team' && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search team members..."
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="founder">Founders</option>
                <option value="advisor">Advisors</option>
                <option value="employee">Employees</option>
                <option value="ai-agent">AI Agents</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'team' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeamMembers.map((member) => (
                <div key={member.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        {member.type === 'ai-agent' ? (
                          <Bot className="h-6 w-6 text-primary-600" />
                        ) : (
                          <Users className="h-6 w-6 text-primary-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-neutral-900">{member.name}</h3>
                          {member.isOwner && (
                            <Crown className="h-4 w-4 text-accent-500 ml-1" />
                          )}
                        </div>
                        <p className="text-sm text-neutral-500">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {getTypeIcon(member.type)}
                      <div className="ml-2">
                        {getStatusIcon(member.status)}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-neutral-500 mb-4">
                    Joined {new Date(member.joinDate).toLocaleDateString()}
                  </div>

                  <div className="flex gap-2">
                    {member.email && (
                      <button className="flex-1 btn-outline py-2 px-3 text-sm">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </button>
                    )}
                    <button className="flex-1 btn-outline py-2 px-3 text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Chat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'invitations' && (
          <div className="p-6">
            <div className="space-y-4">
              {invitations.map((invitation) => (
                <div key={invitation.id} className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-neutral-900">{invitation.email}</h3>
                      <p className="text-sm text-neutral-500">{invitation.role}</p>
                      <div className="flex items-center mt-2">
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs mr-2">
                          {invitation.type}
                        </span>
                        <span className="text-xs text-neutral-500">
                          Sent {new Date(invitation.sentDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-outline py-2 px-3 text-sm">
                        Resend
                      </button>
                      <button className="btn-outline py-2 px-3 text-sm text-error-600 border-error-300">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {invitations.length === 0 && (
                <div className="text-center py-12">
                  <UserPlus className="mx-auto h-12 w-12 text-neutral-400" />
                  <h3 className="mt-2 text-sm font-medium text-neutral-900">No pending invitations</h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Invite team members to start collaborating.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Role Permissions</h3>
                <div className="space-y-4">
                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Founder</h4>
                      <Crown className="h-5 w-5 text-accent-500" />
                    </div>
                    <p className="text-sm text-neutral-600 mb-3">Full access to all features and settings</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-success-100 text-success-700 rounded-full text-xs">All Permissions</span>
                    </div>
                  </div>

                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Advisor</h4>
                      <Star className="h-5 w-5 text-secondary-500" />
                    </div>
                    <p className="text-sm text-neutral-600 mb-3">Read access and advisory capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">View Projects</span>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Provide Feedback</span>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Access Network</span>
                    </div>
                  </div>

                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Employee</h4>
                      <Users className="h-5 w-5 text-neutral-400" />
                    </div>
                    <p className="text-sm text-neutral-600 mb-3">Project-specific access and collaboration</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">Assigned Projects</span>
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">Team Chat</span>
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">File Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showInviteModal && <InviteModal />}
    </div>
  );
};

export default TeamBuilder;