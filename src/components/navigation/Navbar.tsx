import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CircuitBoard, User, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import PersonaSelector from '../auth/PersonaSelector';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showPersonaSelector, setShowPersonaSelector] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout, persona } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Startup Builder', href: '/startup-builder' },
    { name: 'Knowledge Center', href: '/knowledge-center' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Funding', href: '/funding' },
    { name: 'Events', href: '/events' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

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
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <CircuitBoard className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-xl font-bold text-primary-800">Velora</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-primary-700'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              {isAuthenticated && user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-neutral-500">{getPersonaName()}</p>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          setShowPersonaSelector(true);
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Switch Persona
                      </button>
                      <Link
                        to="/dashboard/settings"
                        className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button className="btn-outline text-sm px-4 py-2">
                    Log In
                  </button>
                  <button className="btn-primary text-sm px-4 py-2">
                    Join Now
                  </button>
                </div>
              )}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-neutral-100 p-2 rounded-md inline-flex items-center justify-center text-neutral-800 hover:bg-neutral-200"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated && user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setShowPersonaSelector(true);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600"
                >
                  Switch Persona
                </button>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600"
                >
                  Sign out
                </button>
              </>
            ) : (
              <div className="pt-4 pb-3 border-t border-neutral-200">
                <div className="flex items-center px-3 space-x-3">
                  <button className="btn-outline w-full justify-center">
                    Log In
                  </button>
                  <button className="btn-primary w-full justify-center">
                    Join Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Persona Selector Modal */}
      {showPersonaSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Switch Persona</h2>
              <button
                onClick={() => setShowPersonaSelector(false)}
                className="text-neutral-400 hover:text-neutral-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <PersonaSelector 
              onSelect={() => setShowPersonaSelector(false)}
              showCurrent={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;