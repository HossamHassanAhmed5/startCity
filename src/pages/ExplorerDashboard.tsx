import React, { useState } from 'react';
import { 
  BookOpen, Heart, TrendingUp, Star, Play, 
  CheckCircle, ArrowRight, Bookmark, Eye,
  Users, Calendar, Award, Target
} from 'lucide-react';

interface IdeaWishlistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  savedDate: string;
  trending: boolean;
}

interface StartupStory {
  id: string;
  companyName: string;
  founder: string;
  story: string;
  category: string;
  stage: string;
  image: string;
  likes: number;
  views: number;
}

const ExplorerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [progress] = useState(35); // Progress towards Dream Builder

  const wishlistItems: IdeaWishlistItem[] = [
    {
      id: '1',
      title: 'Sustainable Food Packaging',
      description: 'Develop eco-friendly alternatives to plastic food packaging',
      category: 'Sustainability',
      difficulty: 'Medium',
      savedDate: '2025-03-10',
      trending: true
    },
    {
      id: '2',
      title: 'AI-Powered Learning Assistant',
      description: 'Create personalized learning experiences using AI',
      category: 'Education',
      difficulty: 'Hard',
      savedDate: '2025-03-08',
      trending: false
    }
  ];

  const startupStories: StartupStory[] = [
    {
      id: '1',
      companyName: 'EcoFlow',
      founder: 'Sarah Chen',
      story: 'Started with a simple idea to reduce plastic waste. Now processing 10M+ packages monthly with biodegradable alternatives.',
      category: 'Sustainability',
      stage: 'Series A',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
      likes: 234,
      views: 1520
    },
    {
      id: '2',
      companyName: 'MindBridge AI',
      founder: 'Alex Rodriguez',
      story: 'From struggling student to AI education pioneer. Our platform now helps 50K+ students learn more effectively.',
      category: 'EdTech',
      stage: 'Seed',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      likes: 189,
      views: 980
    }
  ];

  const learningModules = [
    { title: 'Startup Fundamentals', completed: true, duration: '30 min' },
    { title: 'Market Research Basics', completed: true, duration: '45 min' },
    { title: 'Building Your First MVP', completed: false, duration: '60 min' },
    { title: 'Finding Co-founders', completed: false, duration: '40 min' },
  ];

  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Explorer Dashboard</h1>
        <p className="text-neutral-500">Discover, learn, and get inspired by the startup ecosystem</p>
      </div>

      {/* Progress to Dream Builder */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-6 border border-primary-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-primary-800">Your Journey to Dream Builder</h2>
            <p className="text-primary-600">Complete activities to unlock full startup building tools</p>
          </div>
          <Target className="h-8 w-8 text-primary-600" />
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-primary-700">Progress</span>
          <span className="font-medium text-primary-700">{progress}%</span>
        </div>
        <div className="w-full bg-primary-200 rounded-full h-3">
          <div 
            className="bg-primary-600 h-3 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="btn-primary py-2 px-4 text-sm">
            Continue Learning
          </button>
          <button className="btn-outline py-2 px-4 text-sm">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-neutral-500">Lessons Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-accent-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{wishlistItems.length}</p>
              <p className="text-sm text-neutral-500">Ideas Saved</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-success-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-neutral-500">Trending Followed</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-secondary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">150</p>
              <p className="text-sm text-neutral-500">Points Earned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('feed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'feed'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Inspiration Feed
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'wishlist'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Idea Wishlist ({wishlistItems.length})
            </button>
            <button
              onClick={() => setActiveTab('learning')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'learning'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Learning Path
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'feed' && (
          <div className="p-6">
            <div className="space-y-6">
              {startupStories.map((story) => (
                <div key={story.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <img 
                      src={story.image} 
                      alt={story.companyName}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{story.companyName}</h3>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                          {story.category}
                        </span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                          {story.stage}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">by {story.founder}</p>
                      <p className="text-neutral-700 mb-4">{story.story}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {story.likes}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {story.views}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="btn-outline py-2 px-3 text-sm">
                            <Heart className="h-4 w-4 mr-1" />
                            Save
                          </button>
                          <button className="btn-primary py-2 px-3 text-sm">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{item.title}</h3>
                      {item.trending && (
                        <TrendingUp className="h-4 w-4 text-accent-500" />
                      )}
                    </div>
                    <Bookmark className="h-5 w-5 text-primary-500" />
                  </div>
                  <p className="text-neutral-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                        {item.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.difficulty === 'Easy' ? 'bg-success-100 text-success-700' :
                        item.difficulty === 'Medium' ? 'bg-accent-100 text-accent-700' :
                        'bg-error-100 text-error-700'
                      }`}>
                        {item.difficulty}
                      </span>
                    </div>
                    <button className="btn-primary py-2 px-3 text-sm">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="p-6">
            <div className="space-y-4">
              {learningModules.map((module, index) => (
                <div key={index} className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-4 ${
                        module.completed ? 'bg-success-100' : 'bg-neutral-100'
                      }`}>
                        {module.completed ? (
                          <CheckCircle className="h-5 w-5 text-success-600" />
                        ) : (
                          <Play className="h-5 w-5 text-neutral-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{module.title}</h3>
                        <p className="text-sm text-neutral-500">{module.duration}</p>
                      </div>
                    </div>
                    <button className={`py-2 px-4 text-sm rounded-md font-medium ${
                      module.completed 
                        ? 'bg-success-100 text-success-700'
                        : 'btn-primary'
                    }`}>
                      {module.completed ? 'Completed' : 'Start'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorerDashboard;