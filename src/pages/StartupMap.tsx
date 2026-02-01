import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { MapPin, Building, Users, ExternalLink, ArrowRight } from 'lucide-react';

interface Startup {
  id: number;
  name: string;
  description: string;
  industry: string;
  stage: string;
  employees: string;
  location: {
    name: string;
    coordinates: [number, number];
  };
  website: string;
}

const startups: Startup[] = [
  {
    id: 1,
    name: 'TechFlow AI',
    description: 'AI-powered workflow automation platform',
    industry: 'Artificial Intelligence',
    stage: 'Seed',
    employees: '10-50',
    location: {
      name: 'San Francisco, CA',
      coordinates: [-122.4194, 37.7749]
    },
    website: 'https://techflow.ai'
  },
  {
    id: 2,
    name: 'GreenCommerce',
    description: 'Sustainable e-commerce platform',
    industry: 'E-commerce',
    stage: 'Series A',
    employees: '50-100',
    location: {
      name: 'New York, NY',
      coordinates: [-74.0060, 40.7128]
    },
    website: 'https://greencommerce.co'
  },
  {
    id: 3,
    name: 'HealthTech Solutions',
    description: 'Digital health monitoring systems',
    industry: 'Healthcare',
    stage: 'Pre-seed',
    employees: '1-10',
    location: {
      name: 'Boston, MA',
      coordinates: [-71.0589, 42.3601]
    },
    website: 'https://healthtech.io'
  }
];

const StartupMap: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 3
  });

  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [filter, setFilter] = useState('all');

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Startup Ecosystem Map</h1>
          <p className="text-lg text-neutral-600">
            Discover startups, investors, and support organizations in your area
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'all' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'startups' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              onClick={() => setFilter('startups')}
            >
              Startups
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'investors' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              onClick={() => setFilter('investors')}
            >
              Investors
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'support' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              onClick={() => setFilter('support')}
            >
              Support Organizations
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="h-[600px]">
            <Map
              {...viewport}
              onMove={evt => setViewport(evt.viewState)}
              mapStyle="mapbox://styles/mapbox/light-v11"
              mapboxAccessToken="YOUR_MAPBOX_TOKEN"
            >
              {startups.map((startup) => (
                <Marker
                  key={startup.id}
                  latitude={startup.location.coordinates[1]}
                  longitude={startup.location.coordinates[0]}
                >
                  <button
                    className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                    onClick={() => setSelectedStartup(startup)}
                  >
                    <MapPin className="h-5 w-5" />
                  </button>
                </Marker>
              ))}

              {selectedStartup && (
                <Popup
                  latitude={selectedStartup.location.coordinates[1]}
                  longitude={selectedStartup.location.coordinates[0]}
                  onClose={() => setSelectedStartup(null)}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="bottom"
                >
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{selectedStartup.name}</h3>
                    <p className="text-sm text-neutral-600 mb-2">{selectedStartup.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                        {selectedStartup.industry}
                      </span>
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                        {selectedStartup.stage}
                      </span>
                    </div>
                    <div className="text-sm text-neutral-600">
                      <div className="flex items-center mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {selectedStartup.location.name}
                      </div>
                      <div className="flex items-center mb-1">
                        <Users className="h-4 w-4 mr-1" />
                        {selectedStartup.employees} employees
                      </div>
                      <a 
                        href={selectedStartup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-600 hover:text-primary-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visit website
                      </a>
                    </div>
                  </div>
                </Popup>
              )}
            </Map>
          </div>
        </div>

        {/* List View */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Startup Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups.map((startup) => (
              <div key={startup.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold mb-1">{startup.name}</h3>
                    <p className="text-sm text-neutral-600">{startup.description}</p>
                  </div>
                  <Building className="h-6 w-6 text-neutral-400" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                    {startup.industry}
                  </span>
                  <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                    {startup.stage}
                  </span>
                </div>
                <div className="text-sm text-neutral-600">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {startup.location.name}
                  </div>
                  <div className="flex items-center mb-2">
                    <Users className="h-4 w-4 mr-1" />
                    {startup.employees} employees
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 text-sm font-medium flex items-center hover:text-primary-700"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupMap;