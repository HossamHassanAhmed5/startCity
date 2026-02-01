import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Users, Plus, 
  Filter, Search, Video, Building, Star
} from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'networking' | 'webinar' | 'conference' | 'pitch';
  isVirtual: boolean;
  attendees: number;
  maxAttendees?: number;
  description: string;
  organizer: string;
  status: 'registered' | 'interested' | 'available';
  price?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Startup Pitch Night',
    date: '2025-03-25',
    time: '6:00 PM - 9:00 PM',
    location: 'Innovation Hub, San Francisco',
    type: 'pitch',
    isVirtual: false,
    attendees: 45,
    maxAttendees: 50,
    description: 'Present your startup to investors and get valuable feedback',
    organizer: 'SF Startup Community',
    status: 'registered'
  },
  {
    id: 2,
    title: 'Fundraising Strategies Webinar',
    date: '2025-03-28',
    time: '12:00 PM - 1:30 PM',
    location: 'Online',
    type: 'webinar',
    isVirtual: true,
    attendees: 156,
    description: 'Learn effective strategies for approaching investors',
    organizer: 'Venture Academy',
    status: 'interested'
  },
  {
    id: 3,
    title: 'Product Development Workshop',
    date: '2025-04-02',
    time: '9:00 AM - 4:00 PM',
    location: 'Tech Campus, Austin',
    type: 'workshop',
    isVirtual: false,
    attendees: 28,
    maxAttendees: 30,
    description: 'Hands-on workshop on iterative product development',
    organizer: 'Product Masters',
    status: 'available',
    price: '$99'
  },
  {
    id: 4,
    title: 'Founder Networking Mixer',
    date: '2025-04-05',
    time: '7:00 PM - 10:00 PM',
    location: 'The Grand Hotel, New York',
    type: 'networking',
    isVirtual: false,
    attendees: 67,
    maxAttendees: 100,
    description: 'Connect with fellow founders and industry experts',
    organizer: 'NYC Entrepreneurs',
    status: 'available'
  }
];

const DashboardEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || event.type === typeFilter;
    const matchesLocation = locationFilter === 'all' || 
                           (locationFilter === 'virtual' && event.isVirtual) ||
                           (locationFilter === 'in-person' && !event.isVirtual);
    return matchesSearch && matchesType && matchesLocation;
  });

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop':
        return <Building className="h-5 w-5" />;
      case 'networking':
        return <Users className="h-5 w-5" />;
      case 'webinar':
        return <Video className="h-5 w-5" />;
      case 'conference':
        return <Star className="h-5 w-5" />;
      case 'pitch':
        return <Star className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'registered':
        return 'bg-success-100 text-success-700';
      case 'interested':
        return 'bg-accent-100 text-accent-700';
      case 'available':
        return 'bg-primary-100 text-primary-700';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  const registeredEvents = events.filter(event => event.status === 'registered');
  const interestedEvents = events.filter(event => event.status === 'interested');

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Events</h1>
          <p className="text-neutral-500">Discover and manage startup events</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-5 w-5 mr-2" />
          Create Event
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{registeredEvents.length}</p>
              <p className="text-sm text-neutral-500">Registered</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-accent-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{interestedEvents.length}</p>
              <p className="text-sm text-neutral-500">Interested</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-secondary-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-neutral-500">Attended</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <Video className="h-8 w-8 text-success-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-neutral-500">Virtual Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('registered')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'registered'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              My Events ({registeredEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'past'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
            >
              Past Events
            </button>
          </nav>
        </div>

        {/* Search and Filter */}
        {activeTab === 'upcoming' && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search events..."
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <select
                  className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="workshop">Workshops</option>
                  <option value="networking">Networking</option>
                  <option value="webinar">Webinars</option>
                  <option value="conference">Conferences</option>
                  <option value="pitch">Pitch Events</option>
                </select>
                <select
                  className="px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="virtual">Virtual</option>
                  <option value="in-person">In-Person</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">
        {(activeTab === 'upcoming' || activeTab === 'registered') && (
          <div className="p-6">
            <div className="space-y-4">
              {(activeTab === 'upcoming' ? filteredEvents : registeredEvents).map((event) => (
                <div key={event.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary-100 p-2 rounded-full">
                          {getEventTypeIcon(event.type)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{event.title}</h3>
                          <p className="text-sm text-neutral-500">by {event.organizer}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                        {event.isVirtual && (
                          <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                            Virtual
                          </span>
                        )}
                      </div>
                      <p className="text-neutral-600 mb-3">{event.description}</p>
                      <div className="flex items-center gap-6 text-sm text-neutral-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees}{event.maxAttendees && `/${event.maxAttendees}`} attendees
                        </div>
                        {event.price && (
                          <div className="flex items-center font-medium">
                            {event.price}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {event.status === 'available' && (
                        <button className="btn-primary py-2 px-4 text-sm">
                          Register
                        </button>
                      )}
                      {event.status === 'interested' && (
                        <button className="btn-primary py-2 px-4 text-sm">
                          Register
                        </button>
                      )}
                      {event.status === 'registered' && (
                        <button className="btn-outline py-2 px-4 text-sm">
                          View Details
                        </button>
                      )}
                      <button className="btn-outline py-2 px-4 text-sm">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'past' && (
          <div className="p-6">
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-neutral-400" />
              <h3 className="mt-2 text-sm font-medium text-neutral-900">No past events</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Events you've attended will appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardEvents;