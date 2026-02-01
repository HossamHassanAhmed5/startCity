import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Users, ThumbsUp, Hash } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  likes: number;
  comments: number;
}

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Looking for technical co-founder in fintech space',
    content: 'Building a revolutionary payment platform and seeking a technical co-founder with experience in blockchain and financial systems.',
    author: 'Sarah Chen',
    date: '2025-03-15',
    category: 'Partnerships',
    tags: ['fintech', 'blockchain', 'co-founder'],
    likes: 24,
    comments: 12
  },
  {
    id: 2,
    title: 'Feedback needed: AI-powered healthcare scheduling system',
    content: 'Would love to get community feedback on our new healthcare scheduling system that uses AI to optimize appointment scheduling.',
    author: 'Dr. James Wilson',
    date: '2025-03-14',
    category: 'Feedback',
    tags: ['healthcare', 'AI', 'scheduling'],
    likes: 18,
    comments: 8
  },
  {
    id: 3,
    title: 'Upcoming pitch event in San Francisco',
    content: 'Organizing a pitch event for early-stage startups in the Bay Area. Limited spots available.',
    author: 'Michael Rodriguez',
    date: '2025-03-13',
    category: 'Events',
    tags: ['pitch', 'networking', 'san-francisco'],
    likes: 45,
    comments: 15
  }
];

const categories = ['All', 'Announcements', 'Feedback', 'Partnerships', 'Events', 'Resources'];
const popularTags = ['#startup', '#funding', '#tech', '#AI', '#networking', '#growth'];

const CommunityHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Community Hub</h1>
          <p className="text-lg text-neutral-600">
            Connect, collaborate, and grow with fellow entrepreneurs
          </p>
        </div>

        {/* Search and filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search discussions..."
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">Recent Discussions</h2>
              <button className="btn-primary">
                Start Discussion
              </button>
            </div>

            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                      <p className="text-sm text-neutral-500">
                        Posted by {post.author} • {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-4">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-neutral-500">
                    <button className="flex items-center hover:text-primary-600">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {post.likes}
                    </button>
                    <button className="flex items-center hover:text-primary-600">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {post.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Members</span>
                  </div>
                  <span className="font-medium">2,547</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Discussions</span>
                  </div>
                  <span className="font-medium">1,283</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ThumbsUp className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Connections Made</span>
                  </div>
                  <span className="font-medium">856</span>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <Hash className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-bold">Popular Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm hover:bg-neutral-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Be respectful and constructive</li>
                <li>• No self-promotion without context</li>
                <li>• Keep discussions on topic</li>
                <li>• Share knowledge freely</li>
                <li>• Report inappropriate content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;