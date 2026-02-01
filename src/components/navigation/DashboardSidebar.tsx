import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  CircuitBoard, LayoutDashboard, Rocket, BookOpen, 
  ShoppingBag, DollarSign, Calendar, Settings, Users, 
  HelpCircle, Map, MessageSquare, Lightbulb, Briefcase,
  Home, Crown, UserPlus, Search, Building, TrendingUp,
  Award, Target, BarChart3, Zap
} from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const { persona, user } = useAuth();
  
  // Base navigation for all personas
  const baseNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  ];

  // Persona-specific navigation
  const getPersonaNavigation = () => {
    switch (persona) {
      case 'explorer':
        return [
          { name: 'Learning Path', href: '/dashboard/learning', icon: BookOpen },
          { name: 'Idea Wishlist', href: '/dashboard/wishlist', icon: Lightbulb },
          { name: 'Inspiration Feed', href: '/dashboard/inspiration', icon: Search },
          { name: 'Progress', href: '/dashboard/progress', icon: Target },
        ];

      case 'dream-builder':
        return [
          { name: 'My Projects', href: '/dashboard/projects', icon: Briefcase },
          { name: 'Startup Builder', href: '/startup-builder', icon: Rocket },
          { name: 'Learning', href: '/dashboard/learning', icon: BookOpen },
          { name: 'Services', href: '/dashboard/services', icon: ShoppingBag },
          { name: 'Funding', href: '/dashboard/funding', icon: DollarSign },
          { name: 'Events', href: '/dashboard/events', icon: Calendar },
          { name: 'Network', href: '/dashboard/network', icon: Users },
        ];

      case 'city-creator':
        return [
          { name: 'My Projects', href: '/dashboard/projects', icon: Briefcase },
          { name: 'My Startup', href: '/dashboard/startup', icon: Rocket },
          { name: 'Team Builder', href: '/dashboard/team-builder', icon: UserPlus },
          { name: 'Velora Network', href: '/dashboard/velora-network', icon: Crown },
          { name: 'Learning', href: '/dashboard/learning', icon: BookOpen },
          { name: 'Services', href: '/dashboard/services', icon: ShoppingBag },
          { name: 'Funding', href: '/dashboard/funding', icon: DollarSign },
          { name: 'Events', href: '/dashboard/events', icon: Calendar },
          { name: 'Network', href: '/dashboard/network', icon: Users },
        ];

      case 'enterprise-citizen':
        return [
          { name: 'Company Profile', href: '/dashboard/company-profile', icon: Building },
          { name: 'Innovation Challenges', href: '/dashboard/challenges', icon: Award },
          { name: 'Startup Directory', href: '/dashboard/startup-directory', icon: Users },
          { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
          { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
        ];

      case 'investor':
        return [
          { name: 'Deal Flow', href: '/dashboard/deal-flow', icon: TrendingUp },
          { name: 'Portfolio', href: '/dashboard/portfolio', icon: Briefcase },
          { name: 'Startup Directory', href: '/dashboard/startup-directory', icon: Users },
          { name: 'Bookmarks', href: '/dashboard/bookmarks', icon: Lightbulb },
          { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
          { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
        ];

      default:
        return [];
    }
  };

  const navigation = [...baseNavigation, ...getPersonaNavigation()];

  const communityNavigation = [
    { name: 'Community Hub', href: '/community', icon: MessageSquare },
    { name: 'Pitch Showcase', href: '/pitch', icon: Lightbulb },
    { name: 'Startup Map', href: '/map', icon: Map },
  ];

  const mainSiteNavigation = [
    { name: 'Back to Home', href: '/', icon: Home },
    { name: 'Knowledge Center', href: '/knowledge-center', icon: BookOpen },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
    { name: 'Funding', href: '/funding', icon: DollarSign },
    { name: 'Events', href: '/events', icon: Calendar },
  ];

  const secondaryNavigation = [
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Help & Support', href: '/dashboard/help', icon: HelpCircle },
  ];

  const getPersonaIcon = () => {
    switch (persona) {
      case 'explorer':
        return <Search className="h-5 w-5 text-neutral-300" />;
      case 'dream-builder':
        return <Rocket className="h-5 w-5 text-primary-300" />;
      case 'city-creator':
        return <Crown className="h-5 w-5 text-accent-300" />;
      case 'enterprise-citizen':
        return <Building className="h-5 w-5 text-secondary-300" />;
      case 'investor':
        return <TrendingUp className="h-5 w-5 text-success-300" />;
      default:
        return <Users className="h-5 w-5 text-neutral-300" />;
    }
  };

  const getPersonaName = () => {
    switch (persona) {
      case 'explorer':
        return 'Explorer';
      case 'dream-builder':
        return 'Dream Builder';
      case 'city-creator':
        return 'City Creator';
      case 'enterprise-citizen':
        return 'Enterprise Citizen';
      case 'investor':
        return 'Investor';
      default:
        return 'User';
    }
  };

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 bg-primary-900 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Link to="/" className="flex items-center">
            <CircuitBoard className="h-8 w-8 text-primary-400" />
            <span className="ml-2 text-xl font-bold text-white">Velora</span>
          </Link>
        </div>

        {/* User Persona Badge */}
        <div className="mx-4 mt-4 p-3 bg-primary-800 rounded-lg">
          <div className="flex items-center">
            {getPersonaIcon()}
            <div className="ml-2">
              <p className="text-sm font-medium text-white">{user?.name}</p>
              <p className="text-xs text-primary-200">{getPersonaName()}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  location.pathname === item.href
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                }`}
              >
                <item.icon
                  className={`mr-3 flex-shrink-0 h-6 w-6 ${
                    location.pathname === item.href
                      ? 'text-primary-300'
                      : 'text-primary-300'
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="px-2 py-4 border-t border-primary-800">
            <h3 className="px-3 text-xs font-semibold text-primary-200 uppercase tracking-wider">
              Community
            </h3>
            <nav className="mt-2 space-y-1">
              {communityNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'bg-primary-800 text-white'
                      : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6 ${
                      location.pathname === item.href
                        ? 'text-primary-300'
                        : 'text-primary-300'
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="px-2 py-4 border-t border-primary-800">
            <h3 className="px-3 text-xs font-semibold text-primary-200 uppercase tracking-wider">
              Main Site
            </h3>
            <nav className="mt-2 space-y-1">
              {mainSiteNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-primary-100 hover:bg-primary-800 hover:text-white"
                >
                  <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-primary-300" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-primary-800 pt-4">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'bg-primary-800 text-white'
                      : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6 ${
                      location.pathname === item.href
                        ? 'text-primary-300'
                        : 'text-primary-300'
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;