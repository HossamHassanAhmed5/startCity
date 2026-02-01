import React from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard, Twitter, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <CircuitBoard className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">Velora</span>
            </Link>
            <p className="mt-4 text-neutral-400 text-sm">
              The digital city empowering entrepreneurs to build, learn, and connect.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/startup-builder" className="text-neutral-400 hover:text-white transition-colors">
                  Startup Builder
                </Link>
              </li>
              <li>
                <Link to="/knowledge-center" className="text-neutral-400 hover:text-white transition-colors">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-neutral-400 hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/funding" className="text-neutral-400 hover:text-white transition-colors">
                  Funding Opportunities
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-neutral-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 rounded-r-md flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Velora. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-neutral-500 text-sm">
              Designed with ❤️ for entrepreneurs everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;