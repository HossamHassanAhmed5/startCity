import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  User, Mail, Globe, Twitter, Linkedin, Github,
  MapPin, Building, Calendar, BookOpen, Users,
  Briefcase, Award, Star
} from 'lucide-react';

const Profile: React.FC = () => {
  const { id } = useParams();

  // In a real app, this would fetch user data based on the ID
  const userData = {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'TechFlow AI',
    location: 'San Francisco, CA',
    bio: 'Building the future of AI-powered workflow automation. Previously Product Lead at Google and early engineer at Stripe.',
    website: 'https://techflow.ai',
    email: 'sarah@techflow.ai',
    twitter: '@sarahchen',
    linkedin: 'sarahchen',
    github: 'sarahchen',
    joinDate: 'March 2025',
    followers: 245,
    following: 182,
    achievements: [
      { name: 'Early Adopter', description: 'Joined during beta phase' },
      { name: 'Pitch Champion', description: 'Won monthly pitch competition' },
      { name: 'Community Leader', description: '100+ helpful responses' },
    ],
    skills: ['Artificial Intelligence', 'Product Strategy', 'Team Leadership', 'Fundraising'],
    interests: ['AI/ML', 'SaaS', 'Future of Work', 'Climate Tech'],
    education: 'MS Computer Science, Stanford University',
    experience: '10+ years in tech and startups',
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="h-32 bg-primary-600"></div>
            <div className="px-6 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-12 mb-4">
                <div className="h-24 w-24 rounded-full border-4 border-white bg-white shadow-md overflow-hidden mb-4 sm:mb-0">
                  <div className="h-full w-full bg-primary-100 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary-600" />
                  </div>
                </div>
                <div className="sm:ml-6 text-center sm:text-left">
                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  <p className="text-neutral-600">{userData.role} at {userData.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {userData.location}
                </div>
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-1" />
                  {userData.company}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Joined {userData.joinDate}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Contact</h2>
                <div className="space-y-3">
                  <a href={`mailto:${userData.email}`} className="flex items-center text-neutral-600 hover:text-primary-600">
                    <Mail className="h-5 w-5 mr-2" />
                    {userData.email}
                  </a>
                  <a href={userData.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-primary-600">
                    <Globe className="h-5 w-5 mr-2" />
                    {userData.website}
                  </a>
                  <a href={`https://twitter.com/${userData.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-primary-600">
                    <Twitter className="h-5 w-5 mr-2" />
                    {userData.twitter}
                  </a>
                  <a href={`https://linkedin.com/in/${userData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-primary-600">
                    <Linkedin className="h-5 w-5 mr-2" />
                    {userData.linkedin}
                  </a>
                  <a href={`https://github.com/${userData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-primary-600">
                    <Github className="h-5 w-5 mr-2" />
                    {userData.github}
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {userData.interests.map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">About</h2>
                <p className="text-neutral-600 mb-4">{userData.bio}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-neutral-400 mr-2" />
                    <div>
                      <p className="font-medium">Education</p>
                      <p className="text-neutral-600">{userData.education}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-neutral-400 mr-2" />
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-neutral-600">{userData.experience}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Network</h2>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <p className="font-bold">{userData.followers}</p>
                      <p className="text-sm text-neutral-600">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{userData.following}</p>
                      <p className="text-sm text-neutral-600">Following</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="btn-primary py-2 px-4">
                    <Users className="h-5 w-5 mr-2" />
                    Follow
                  </button>
                  <button className="btn-outline py-2 px-4">
                    <Mail className="h-5 w-5 mr-2" />
                    Message
                  </button>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Achievements</h2>
                <div className="space-y-4">
                  {userData.achievements.map((achievement) => (
                    <div key={achievement.name} className="flex items-start">
                      <div className="bg-accent-100 p-2 rounded-full mr-3">
                        <Award className="h-5 w-5 text-accent-600" />
                      </div>
                      <div>
                        <p className="font-medium">{achievement.name}</p>
                        <p className="text-sm text-neutral-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      <Star className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-neutral-900">Started a new project: AI Sales Assistant</p>
                      <p className="text-sm text-neutral-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-secondary-100 p-2 rounded-full mr-3">
                      <Users className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div>
                      <p className="text-neutral-900">Connected with 3 new founders</p>
                      <p className="text-sm text-neutral-500">4 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-accent-100 p-2 rounded-full mr-3">
                      <Award className="h-5 w-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-neutral-900">Earned the "Pitch Champion" achievement</p>
                      <p className="text-sm text-neutral-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;