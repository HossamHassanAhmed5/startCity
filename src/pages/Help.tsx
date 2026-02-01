import React, { useState } from 'react';
import { 
  HelpCircle, Search, MessageSquare, Book, 
  Video, Mail, Phone, ChevronDown, ChevronRight
} from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do I get started with the Startup Builder?',
    answer: 'The Startup Builder is a step-by-step guide that helps you develop your business idea. Start by clicking on "Startup Builder" in the main navigation, then follow the guided process through idea validation, team building, business model development, and more.',
    category: 'Getting Started'
  },
  {
    id: 2,
    question: 'What funding opportunities are available?',
    answer: 'Velora provides access to various funding sources including grants, angel investors, venture capital, accelerators, and competitions. Visit the Funding section to browse opportunities that match your startup profile and stage.',
    category: 'Funding'
  },
  {
    id: 3,
    question: 'How can I connect with other entrepreneurs?',
    answer: 'Use the Community Hub to join discussions, the Network section to find and connect with other founders, and attend events listed in the Events section. You can also participate in pitch showcases and networking mixers.',
    category: 'Networking'
  },
  {
    id: 4,
    question: 'What services are available in the marketplace?',
    answer: 'The marketplace offers various services including logo design, MVP development, legal setup, marketing campaigns, and business plan writing. All service providers are vetted to ensure quality.',
    category: 'Services'
  },
  {
    id: 5,
    question: 'How do I upgrade my subscription?',
    answer: 'Go to Settings > Billing to view your current plan and upgrade options. You can switch between Free, Pro, and Enterprise plans at any time. Changes take effect immediately.',
    category: 'Account'
  }
];

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('faq');

  const categories = ['Getting Started', 'Funding', 'Networking', 'Services', 'Account'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Help & Support</h1>
          <p className="text-neutral-500">Get help and find answers to your questions</p>
        </div>
        <button className="btn-primary">
          <MessageSquare className="h-5 w-5 mr-2" />
          Contact Support
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-primary-100 rounded-full p-3 w-fit mx-auto mb-4">
            <Book className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="font-bold mb-2">Documentation</h3>
          <p className="text-sm text-neutral-600 mb-4">
            Comprehensive guides and tutorials
          </p>
          <button className="btn-outline w-full">
            Browse Docs
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-secondary-100 rounded-full p-3 w-fit mx-auto mb-4">
            <Video className="h-6 w-6 text-secondary-600" />
          </div>
          <h3 className="font-bold mb-2">Video Tutorials</h3>
          <p className="text-sm text-neutral-600 mb-4">
            Step-by-step video guides
          </p>
          <button className="btn-outline w-full">
            Watch Videos
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-accent-100 rounded-full p-3 w-fit mx-auto mb-4">
            <MessageSquare className="h-6 w-6 text-accent-600" />
          </div>
          <h3 className="font-bold mb-2">Live Chat</h3>
          <p className="text-sm text-neutral-600 mb-4">
            Get instant help from our team
          </p>
          <button className="btn-outline w-full">
            Start Chat
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'faq'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contact'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resources'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Resources
            </button>
          </nav>
        </div>

        {/* Search and Filter for FAQ */}
        {activeTab === 'faq' && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'faq' && (
          <div className="p-6">
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="border border-neutral-200 rounded-lg">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50"
                  >
                    <div>
                      <h3 className="font-medium">{faq.question}</h3>
                      <span className="text-xs text-neutral-500 mt-1">{faq.category}</span>
                    </div>
                    {expandedFAQ === faq.id ? (
                      <ChevronDown className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-neutral-400" />
                    )}
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="mx-auto h-12 w-12 text-neutral-400" />
                  <h3 className="mt-2 text-sm font-medium text-neutral-900">No FAQs found</h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Try adjusting your search or contact support for help.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-neutral-400 mr-3" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-neutral-600">support@velora.com</p>
                      <p className="text-xs text-neutral-500">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-neutral-400 mr-3" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-neutral-600">+1 (555) 123-4567</p>
                      <p className="text-xs text-neutral-500">Mon-Fri, 9 AM - 6 PM PST</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-neutral-400 mr-3" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-neutral-600">Available 24/7</p>
                      <p className="text-xs text-neutral-500">Instant responses</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Select a topic</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Describe your question or issue..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-neutral-200 rounded-lg p-6">
                <Book className="h-8 w-8 text-primary-600 mb-4" />
                <h3 className="font-bold mb-2">User Guide</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Complete guide to using all Velora features
                </p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  Read Guide →
                </button>
              </div>

              <div className="border border-neutral-200 rounded-lg p-6">
                <Video className="h-8 w-8 text-secondary-600 mb-4" />
                <h3 className="font-bold mb-2">Video Tutorials</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Step-by-step video walkthroughs
                </p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  Watch Videos →
                </button>
              </div>

              <div className="border border-neutral-200 rounded-lg p-6">
                <HelpCircle className="h-8 w-8 text-accent-600 mb-4" />
                <h3 className="font-bold mb-2">API Documentation</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Technical documentation for developers
                </p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  View Docs →
                </button>
              </div>

              <div className="border border-neutral-200 rounded-lg p-6">
                <MessageSquare className="h-8 w-8 text-success-600 mb-4" />
                <h3 className="font-bold mb-2">Community Forum</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Connect with other users and get help
                </p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  Join Forum →
                </button>
              </div>

              <div className="border border-neutral-200 rounded-lg p-6">
                <Mail className="h-8 w-8 text-neutral-600 mb-4" />
                <h3 className="font-bold mb-2">Release Notes</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Latest updates and new features
                </p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  View Updates →
                </button>
              </div>

              <div className="border border-neutral-200 rounded-lg p-6">
                <Phone className="h-8 w-8 text-error-600 mb-4" />
                <h3 className="font-bold mb-2">Status Page</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Check system status and uptime
                </p>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  Check Status →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Help;