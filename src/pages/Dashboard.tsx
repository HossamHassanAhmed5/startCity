import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ExplorerDashboard from './ExplorerDashboard';
import InvestorDashboard from './InvestorDashboard';
import CompanyProfile from './CompanyProfile';
import { 
  Rocket, Award, TrendingUp, Users, BookOpen, PieChart,
  BarChart3, ArrowRight, Calendar, Bell, Star, Film
} from 'lucide-react';

// Components
import ProgressCard from '../components/dashboard/ProgressCard';
import StartupProgress from '../components/dashboard/StartupProgress';
import EventCard from '../components/dashboard/EventCard';
import StartupCard from '../components/dashboard/StartupCard';

const DreamBuilderDashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-neutral-500">Welcome back! Here's an overview of your startup journey.</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <ProgressCard 
          title="Startup Builder" 
          value={65} 
          description="Your progress through the builder" 
          icon={<Rocket className="h-5 w-5" />} 
          color="primary"
        />
        <ProgressCard 
          title="Learning" 
          value={42} 
          description="9 of 21 resources completed" 
          icon={<BookOpen className="h-5 w-5" />}
          color="success" 
        />
        <ProgressCard 
          title="Points Earned" 
          value="580" 
          description="Level 3 Founder" 
          icon={<Award className="h-5 w-5" />}
          color="accent" 
        />
        <ProgressCard 
          title="Network" 
          value="28" 
          description="Connections made" 
          icon={<Users className="h-5 w-5" />}
          color="secondary" 
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Startup Progress */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Startup Progress</h2>
              <a href="#" className="text-primary-600 text-sm font-medium flex items-center hover:text-primary-700">
                Continue <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <StartupProgress />
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Upcoming Events</h2>
              <a href="#" className="text-primary-600 text-sm font-medium flex items-center hover:text-primary-700">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              <EventCard 
                title="Virtual Pitch Session"
                date="May 15, 2025"
                time="2:00 PM - 4:00 PM"
                description="Practice your pitch and get feedback from investors and peers"
              />
              <EventCard 
                title="Fundraising Workshop"
                date="May 22, 2025"
                time="11:00 AM - 12:30 PM"
                description="Learn effective strategies for approaching investors"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <div className="flex items-center">
                  <Rocket className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Continue Startup Builder</span>
                </div>
              </button>
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-secondary-600 mr-3" />
                  <span>Find Co-founders</span>
                </div>
              </button>
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-accent-600 mr-3" />
                  <span>Browse Learning Resources</span>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <Rocket className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-neutral-900">You completed the Business Model section</p>
                  <p className="text-sm text-neutral-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary-100 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-secondary-600" />
                </div>
                <div>
                  <p className="text-neutral-900">Connected with Maria Lopez (UX Designer)</p>
                  <p className="text-sm text-neutral-500">Yesterday at 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CityCreatorDashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">City Creator Dashboard</h1>
        <p className="text-neutral-500">Manage your portfolio of projects and teams.</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <ProgressCard 
          title="Active Projects" 
          value="3" 
          description="Projects in development" 
          icon={<Rocket className="h-5 w-5" />} 
          color="primary"
        />
        <ProgressCard 
          title="Team Members" 
          value="12" 
          description="Across all projects" 
          icon={<Users className="h-5 w-5" />}
          color="secondary" 
        />
        <ProgressCard 
          title="Network Tier" 
          value="Innovator" 
          description="Premium access unlocked" 
          icon={<Award className="h-5 w-5" />}
          color="accent" 
        />
        <ProgressCard 
          title="Total Funding" 
          value="$250K" 
          description="Raised across projects" 
          icon={<TrendingUp className="h-5 w-5" />}
          color="success" 
        />
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-lg font-bold mb-6">Project Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-neutral-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">AI Healthcare Platform</h3>
            <p className="text-sm text-neutral-600 mb-3">Early disease detection using ML</p>
            <div className="flex justify-between items-center">
              <span className="px-2 py-1 bg-success-100 text-success-700 rounded-full text-xs">Active</span>
              <span className="text-sm font-medium">65% Complete</span>
            </div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">Sustainable Energy Marketplace</h3>
            <p className="text-sm text-neutral-600 mb-3">Green energy trading platform</p>
            <div className="flex justify-between items-center">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Planning</span>
              <span className="text-sm font-medium">25% Complete</span>
            </div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">EdTech Learning System</h3>
            <p className="text-sm text-neutral-600 mb-3">Personalized learning for K-12</p>
            <div className="flex justify-between items-center">
              <span className="px-2 py-1 bg-accent-100 text-accent-700 rounded-full text-xs">Research</span>
              <span className="text-sm font-medium">10% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { persona } = useAuth();

  switch (persona) {
    case 'explorer':
      return <ExplorerDashboard />;
    case 'city-creator':
      return <CityCreatorDashboard />;
    case 'enterprise-citizen':
      return <CompanyProfile />;
    case 'investor':
      return <InvestorDashboard />;
    case 'dream-builder':
    default:
      return <DreamBuilderDashboard />;
  }
};

export default Dashboard;