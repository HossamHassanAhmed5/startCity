import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Briefcase, 
  Calendar, MoreVertical, Archive, Edit, Trash2 
} from 'lucide-react';
import { format } from 'date-fns';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
  progress: number;
  startDate: Date;
  lastUpdated: Date;
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showArchived, setShowArchived] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'AI-Powered Healthcare Platform',
      description: 'Developing an AI system for early disease detection',
      status: 'active',
      progress: 65,
      startDate: new Date('2025-01-15'),
      lastUpdated: new Date('2025-03-10'),
    },
    {
      id: '2',
      name: 'Sustainable Energy Marketplace',
      description: 'Platform connecting green energy providers with consumers',
      status: 'completed',
      progress: 100,
      startDate: new Date('2024-11-01'),
      lastUpdated: new Date('2025-02-28'),
    },
    {
      id: '3',
      name: 'EdTech Learning System',
      description: 'Personalized learning platform for K-12 students',
      status: 'archived',
      progress: 30,
      startDate: new Date('2024-09-20'),
      lastUpdated: new Date('2024-12-15'),
    },
  ]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesArchived = showArchived ? true : project.status !== 'archived';
    
    return matchesSearch && matchesStatus && matchesArchived;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-primary-100 text-primary-700';
      case 'completed':
        return 'bg-success-100 text-success-700';
      case 'archived':
        return 'bg-neutral-100 text-neutral-700';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-neutral-500">Manage your startup projects and ideas</p>
        </div>
        <button className="btn-primary mt-4 md:mt-0">
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <select
                className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-neutral-400" />
              </div>
            </div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showArchived}
                onChange={(e) => setShowArchived(e.target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
              />
              <span className="ml-2 text-sm text-neutral-700">Show archived</span>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Project
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-neutral-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-900">{project.name}</div>
                        <div className="text-sm text-neutral-500">{project.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-neutral-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-primary-600 h-2.5 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-neutral-500">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-neutral-400" />
                      {format(project.startDate, 'MMM d, yyyy')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    {format(project.lastUpdated, 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="relative group">
                      <button className="text-neutral-400 hover:text-neutral-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                      <div className="hidden group-hover:block absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu">
                          <button className="flex items-center w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Project
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                            <Archive className="h-4 w-4 mr-2" />
                            Archive
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-sm text-error-600 hover:bg-neutral-100">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="mx-auto h-12 w-12 text-neutral-400" />
              <h3 className="mt-2 text-sm font-medium text-neutral-900">No projects found</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Get started by creating a new project.
              </p>
              <div className="mt-6">
                <button className="btn-primary">
                  <Plus className="h-5 w-5 mr-2" />
                  New Project
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;