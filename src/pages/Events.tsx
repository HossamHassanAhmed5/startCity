import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Filter, Search, Users, ExternalLink } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  description: string;
  attendees: number;
  type: string;
  image: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: 'Startup Pitch Night',
    date: '2025-05-15',
    time: '6:00 PM - 9:00 PM',
    location: 'Innovation Hub, San Francisco',
    isVirtual: false,
    description: 'Present your startup to a panel of investors and receive valuable feedback.',
    attendees: 120,
    type: 'Competition',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Fundraising Strategies Webinar',
    date: '2025-05-22',
    time: '12:00 PM - 1:30 PM',
    location: 'Online',
    isVirtual: true,
    description: 'Learn effective strategies for approaching investors and securing funding.',
    attendees: 250,
    type: 'Webinar',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Founder Networking Mixer',
    date: '2025-06-03',
    time: '7:00 PM - 10:00 PM',
    location: 'The Grand Hotel, New York',
    isVirtual: false,
    description: 'Connect with fellow founders, investors, and industry experts in a casual setting.',
    attendees: 75,
    type: 'Networking',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Product Development Workshop',
    date: '2025-06-10',
    time: '9:00 AM - 4:00 PM',
    location: 'Tech Campus, Austin',
    isVirtual: false,
    description: 'Hands-on workshop on iterative product development and user testing.',
    attendees: 40,
    type: 'Workshop',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'AI for Startups Conference',
    date: '2025-06-17',
    time: '10:00 AM - 6:00 PM',
    location: 'Convention Center, Boston',
    isVirtual: false,
    description: 'Explore how AI can enhance your startup\'s products and operations.',
    attendees: 300,
    type: 'Conference',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Legal Essentials for Startups',
    date: '2025-06-24',
    time: '2:00 PM - 3:30 PM',
    location: 'Online',
    isVirtual: true,
    description: 'Learn about the legal foundations every startup needs to have in place.',
    attendees: 180,
    type: 'Webinar',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 7,
    title: 'Marketing Growth Hacking Summit',
    date: '2025-07-08',
    time: '9:00 AM - 5:00 PM',
    location: 'Innovation Center, Chicago',
    isVirtual: false,
    description: 'Discover cost-effective strategies to acquire and retain customers.',
    attendees: 220,
    type: 'Conference',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 8,
    title: '48-Hour Hackathon Challenge',
    date: '2025-07-18',
    time: '6:00 PM - 6:00 PM (48 hours)',
    location: 'Tech Hub, Seattle',
    isVirtual: false,
    description: 'Build an MVP in 48 hours and compete for prizes and investor attention.',
    attendees: 150,
    type: 'Hackathon',
    image: 'https://images.pexels.com/photos/7192137/pexels-photo-7192137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showVirtualOnly, setShowVirtualOnly] = useState(false);

  const eventTypes = ['Conference', 'Webinar', 'Networking', 'Workshop', 'Hackathon', 'Competition'];

  // Filter events based on search term, type, and virtual filter
  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || event.type === selectedType;
    const matchesVirtual = !showVirtualOnly || event.isVirtual;
    
    return matchesSearch && matchesType && matchesVirtual;
  });

  // Format date string to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg text-neutral-600">
            Join workshops, webinars, and networking events to learn and connect
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
                placeholder="Search events..."
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <select
                  className="appearance-none pl-8 pr-10 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">All Event Types</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-4 w-4 text-neutral-400" />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="virtualOnly"
                  type="checkbox"
                  checked={showVirtualOnly}
                  onChange={() => setShowVirtualOnly(!showVirtualOnly)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <label htmlFor="virtualOnly" className="ml-2 block text-sm text-neutral-700">
                  Virtual events only
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Event */}
        {filteredEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Event</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={filteredEvents[0].image} 
                    alt={filteredEvents[0].title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                      {filteredEvents[0].type}
                    </span>
                    {filteredEvents[0].isVirtual && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-700">
                        Virtual
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{filteredEvents[0].title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-neutral-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{formatDate(filteredEvents[0].date)}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{filteredEvents[0].time}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{filteredEvents[0].location}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{filteredEvents[0].attendees} attending</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-6">{filteredEvents[0].description}</p>
                  <div className="flex gap-4">
                    <button className="btn-primary">
                      Register Now
                    </button>
                    <button className="btn-outline">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="card overflow-hidden flex flex-col">
                <div className="h-48 relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-neutral-800">
                      {event.type}
                    </span>
                    {event.isVirtual && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 bg-opacity-90 text-secondary-800">
                        Virtual
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-neutral-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-4 flex-grow">{event.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-neutral-500 flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees} attending
                    </span>
                    <button className="btn-primary py-2 px-4 text-sm">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredEvents.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-neutral-500">
                  No events found matching your criteria. Try adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;