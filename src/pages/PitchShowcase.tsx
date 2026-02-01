import React from 'react';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';

interface Pitch {
  id: number;
  companyName: string;
  tagline: string;
  description: string;
  industry: string;
  stage: string;
  founder: string;
  date: string;
  views: number;
  likes: number;
  image: string;
}

const pitches: Pitch[] = [
  {
    id: 1,
    companyName: 'HealthTech AI',
    tagline: 'AI-powered early disease detection',
    description: 'Using advanced machine learning to revolutionize preventive healthcare through early disease detection and personalized health recommendations.',
    industry: 'Healthcare',
    stage: 'Seed',
    founder: 'Dr. Sarah Chen',
    date: '2025-03-15',
    views: 1250,
    likes: 89,
    image: 'https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg'
  },
  {
    id: 2,
    companyName: 'EcoLogistics',
    tagline: 'Sustainable last-mile delivery',
    description: 'Revolutionizing urban delivery with zero-emission vehicles and AI-optimized routes for sustainable last-mile logistics.',
    industry: 'Logistics',
    stage: 'Pre-seed',
    founder: 'Michael Wong',
    date: '2025-03-14',
    views: 980,
    likes: 67,
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg'
  },
  {
    id: 3,
    companyName: 'FinEdu',
    tagline: 'Making financial education accessible',
    description: 'Gamified financial education platform helping young adults build wealth through personalized learning and investment guidance.',
    industry: 'FinTech',
    stage: 'Seed',
    founder: 'Emma Thompson',
    date: '2025-03-13',
    views: 1560,
    likes: 124,
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg'
  }
];

const PitchShowcase: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Pitch Showcase</h1>
          <p className="text-lg text-neutral-600">
            Discover innovative startups and connect with founders
          </p>
        </div>

        {/* Featured Pitch */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Pitch</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={pitches[0].image}
                  alt={pitches[0].companyName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {pitches[0].industry}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-700">
                    {pitches[0].stage}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{pitches[0].companyName}</h3>
                <p className="text-lg text-neutral-600 mb-4">{pitches[0].tagline}</p>
                <p className="text-neutral-600 mb-6">{pitches[0].description}</p>
                <div className="flex items-center text-sm text-neutral-500 mb-6">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(pitches[0].date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>{pitches[0].views} views</span>
                  <span className="mx-2">•</span>
                  <Star className="h-4 w-4 mr-1" />
                  <span>{pitches[0].likes} likes</span>
                </div>
                <div className="flex gap-4">
                  <button className="btn-primary">
                    Watch Pitch
                  </button>
                  <button className="btn-outline">
                    Contact Founder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Pitches */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Pitches</h2>
            <button className="text-primary-600 font-medium flex items-center hover:text-primary-700">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pitches.slice(1).map((pitch) => (
              <div key={pitch.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48">
                  <img 
                    src={pitch.image}
                    alt={pitch.companyName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                      {pitch.industry}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-700">
                      {pitch.stage}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pitch.companyName}</h3>
                  <p className="text-neutral-600 mb-4">{pitch.tagline}</p>
                  <div className="flex items-center text-sm text-neutral-500 mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{pitch.views} views</span>
                    <span className="mx-2">•</span>
                    <Star className="h-4 w-4 mr-1" />
                    <span>{pitch.likes} likes</span>
                  </div>
                  <button className="btn-primary w-full justify-center">
                    Watch Pitch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchShowcase;