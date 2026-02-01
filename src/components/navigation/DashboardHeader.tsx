import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, Bell, Search, X, User, Settings, LogOut 
} from 'lucide-react';

const DashboardHeader: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              type="button"
              className="md:hidden px-4 text-neutral-500 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-start">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-1 rounded-full text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 relative"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-accent-600 ring-2 ring-white"></span>
              </button>
            </div>

            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-primary-700 flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                </button>
              </div>

              {isProfileOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                  <Link
                    to="/dashboard/profile"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/dashboard/settings"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Settings
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>

            {/* Notifications dropdown */}
            {isNotificationsOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 top-16">
                <div className="px-4 py-2 border-b border-neutral-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-neutral-900">Notifications</h3>
                    <button
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-neutral-400 hover:text-neutral-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100">
                    <p className="text-sm font-medium text-neutral-900">New message from John</p>
                    <p className="text-xs text-neutral-500 mt-1">5 minutes ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100">
                    <p className="text-sm font-medium text-neutral-900">Your startup progress is at 65%</p>
                    <p className="text-xs text-neutral-500 mt-1">1 hour ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100">
                    <p className="text-sm font-medium text-neutral-900">New funding opportunity matches your profile</p>
                    <p className="text-xs text-neutral-500 mt-1">3 hours ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-neutral-50">
                    <p className="text-sm font-medium text-neutral-900">Upcoming event: Virtual Pitch Session</p>
                    <p className="text-xs text-neutral-500 mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-neutral-200">
                  <Link
                    to="/dashboard/notifications"
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium"
                    onClick={() => setIsNotificationsOpen(false)}
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;