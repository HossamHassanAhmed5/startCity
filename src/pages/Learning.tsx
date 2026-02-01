import React, { useState } from 'react';
import { 
  BookOpen, Play, Clock, CheckCircle, Star, 
  Award, TrendingUp, Filter, Search, BarChart3
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  rating: number;
  students: number;
  progress?: number;
  completed?: boolean;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Startup Fundamentals',
    description: 'Learn the basics of starting and running a successful startup',
    instructor: 'Sarah Johnson',
    duration: '4 hours',
    level: 'Beginner',
    category: 'Entrepreneurship',
    rating: 4.8,
    students: 1250,
    progress: 75,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
  },
  {
    id: 2,
    title: 'Fundraising Masterclass',
    description: 'Complete guide to raising capital for your startup',
    instructor: 'Michael Chen',
    duration: '6 hours',
    level: 'Intermediate',
    category: 'Funding',
    rating: 4.9,
    students: 890,
    progress: 30,
    image: 'https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg'
  },
  {
    id: 3,
    title: 'Product Management for Startups',
    description: 'Build products that customers love and drive business growth',
    instructor: 'Emily Rodriguez',
    duration: '5 hours',
    level: 'Intermediate',
    category: 'Product',
    rating: 4.7,
    students: 650,
    completed: true,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    description: 'Master digital marketing to grow your startup',
    instructor: 'David Kim',
    duration: '3 hours',
    level: 'Beginner',
    category: 'Marketing',
    rating: 4.6,
    students: 1100,
    image: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg'
  }
];

const achievements = [
  { id: 1, title: 'First Course Completed', description: 'Completed your first learning module', earned: true },
  { id: 2, title: 'Quick Learner', description: 'Completed 3 courses in one week', earned: true },
  { id: 3, title: 'Knowledge Seeker', description: 'Completed 10 courses', earned: false },
  { id: 4, title: 'Expert Level', description: 'Completed 5 advanced courses', earned: false },
];

const Learning: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [activeTab, setActiveTab] = useState('courses');

  const categories = ['Entrepreneurship', 'Funding', 'Product', 'Marketing', 'Technology', 'Legal'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const completedCourses = courses.filter(course => course.completed).length;
  const inProgressCourses = courses.filter(course => course.progress && course.progress > 0 && !course.completed).length;
  const totalHours = courses.reduce((acc, course) => acc + parseInt(course.duration), 0);

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Learning Center</h1>
          <p className="text-neutral-500">Expand your knowledge and skills</p>
        </div>
        <button className="btn-primary">
          <BookOpen className="h-5 w-5 mr-2" />
          Browse Catalog
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-success-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{completedCourses}</p>
              <p className="text-sm text-neutral-500">Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Play className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{inProgressCourses}</p>
              <p className="text-sm text-neutral-500">In Progress</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-accent-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{totalHours}</p>
              <p className="text-sm text-neutral-500">Hours Learned</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-secondary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{achievements.filter(a => a.earned).length}</p>
              <p className="text-sm text-neutral-500">Achievements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('courses')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'courses'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              My Courses
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'progress'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Progress
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'achievements'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Achievements
            </button>
          </nav>
        </div>

        {/* Search and Filter */}
        {activeTab === 'courses' && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
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
                <select
                  className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {activeTab === 'courses' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Beginner' ? 'bg-success-100 text-success-700' :
                        course.level === 'Intermediate' ? 'bg-accent-100 text-accent-700' :
                        'bg-error-100 text-error-700'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                        {course.category}
                      </span>
                      {course.completed && (
                        <CheckCircle className="h-5 w-5 text-success-500" />
                      )}
                    </div>
                    <h3 className="font-bold mb-2">{course.title}</h3>
                    <p className="text-sm text-neutral-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center text-sm text-neutral-500 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="mr-4">{course.duration}</span>
                      <Star className="h-4 w-4 mr-1 text-accent-500" />
                      <span className="mr-1">{course.rating}</span>
                      <span>({course.students})</span>
                    </div>

                    {course.progress && !course.completed && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <button className={`w-full py-2 px-4 rounded-md font-medium ${
                      course.completed 
                        ? 'bg-success-100 text-success-700'
                        : course.progress 
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}>
                      {course.completed ? 'Completed' : course.progress ? 'Continue' : 'Start Course'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Learning Progress</h3>
                <div className="space-y-4">
                  {courses.filter(course => course.progress || course.completed).map((course) => (
                    <div key={course.id} className="border border-neutral-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{course.title}</h4>
                        {course.completed && <CheckCircle className="h-5 w-5 text-success-500" />}
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.completed ? 100 : course.progress}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${course.completed ? 'bg-success-500' : 'bg-primary-600'}`}
                          style={{ width: `${course.completed ? 100 : course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Learning Stats</h3>
                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <BarChart3 className="h-6 w-6 text-primary-600 mr-3" />
                      <div>
                        <p className="font-medium">Weekly Goal</p>
                        <p className="text-sm text-neutral-600">3 hours completed this week</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-success-600 mr-3" />
                      <div>
                        <p className="font-medium">Learning Streak</p>
                        <p className="text-sm text-neutral-600">7 days in a row</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`border rounded-lg p-6 ${
                  achievement.earned ? 'border-success-200 bg-success-50' : 'border-neutral-200'
                }`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full mr-4 ${
                      achievement.earned ? 'bg-success-100' : 'bg-neutral-100'
                    }`}>
                      <Award className={`h-6 w-6 ${
                        achievement.earned ? 'text-success-600' : 'text-neutral-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-bold mb-1 ${
                        achievement.earned ? 'text-success-900' : 'text-neutral-700'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-success-700' : 'text-neutral-500'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && (
                        <span className="inline-block mt-2 px-2 py-1 bg-success-100 text-success-700 rounded-full text-xs">
                          Earned
                        </span>
                      )}
                    </div>
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

export default Learning;