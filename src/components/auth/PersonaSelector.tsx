import React, { useState } from 'react';
import { useAuth, UserPersona } from '../../contexts/AuthContext';
import { 
  Search, Rocket, Crown, Building, TrendingUp, 
  ArrowRight, Check, Star, Users, Briefcase 
} from 'lucide-react';

interface PersonaOption {
  id: UserPersona;
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  popular?: boolean;
  color: string;
}

const personaOptions: PersonaOption[] = [
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'Discover and learn about entrepreneurship',
    icon: <Search className="h-8 w-8" />,
    features: [
      'Browse educational content',
      'Save interesting ideas',
      'Follow startup stories',
      'Basic community access'
    ],
    price: 'Free',
    color: 'border-neutral-200 hover:border-neutral-300'
  },
  {
    id: 'dream-builder',
    name: 'Dream Builder',
    description: 'Build and validate your startup idea',
    icon: <Rocket className="h-8 w-8" />,
    features: [
      'Startup builder tools',
      'Business model canvas',
      'MVP planning',
      'Community participation',
      'Basic mentor matching'
    ],
    price: '$29/month',
    popular: true,
    color: 'border-primary-200 hover:border-primary-300'
  },
  {
    id: 'city-creator',
    name: 'City Creator',
    description: 'Scale multiple projects and build teams',
    icon: <Crown className="h-8 w-8" />,
    features: [
      'Multi-project management',
      'Team collaboration tools',
      'Premium mentor access',
      'Velora Network unlocks',
      'Advanced analytics'
    ],
    price: '$99/month',
    color: 'border-accent-200 hover:border-accent-300'
  },
  {
    id: 'enterprise-citizen',
    name: 'Enterprise Citizen',
    description: 'Corporate innovation and partnerships',
    icon: <Building className="h-8 w-8" />,
    features: [
      'Company profile management',
      'Innovation challenges',
      'Startup partnerships',
      'Analytics dashboard',
      'Internal messaging'
    ],
    price: 'Custom',
    color: 'border-secondary-200 hover:border-secondary-300'
  },
  {
    id: 'investor',
    name: 'Investor',
    description: 'Discover and invest in startups',
    icon: <TrendingUp className="h-8 w-8" />,
    features: [
      'Curated startup listings',
      'Investment tracking',
      'Private notes & bookmarks',
      'Verified investor status',
      'Direct founder communication'
    ],
    price: '$199/month',
    color: 'border-success-200 hover:border-success-300'
  }
];

interface PersonaSelectorProps {
  onSelect?: (persona: UserPersona) => void;
  showCurrent?: boolean;
}

const PersonaSelector: React.FC<PersonaSelectorProps> = ({ onSelect, showCurrent = false }) => {
  const { persona: currentPersona, switchPersona } = useAuth();
  const [selectedPersona, setSelectedPersona] = useState<UserPersona>(currentPersona);

  const handleSelect = (persona: UserPersona) => {
    setSelectedPersona(persona);
  };

  const handleConfirmSwitch = () => {
    switchPersona(selectedPersona);
    if (onSelect) {
      onSelect(selectedPersona);
    }
    // Show success message
    alert(`Successfully switched to ${personaOptions.find(p => p.id === selectedPersona)?.name}!`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {showCurrent && (
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Choose Your Persona</h2>
          <p className="text-neutral-600">
            Select the persona that best fits your entrepreneurial journey
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Current:</strong> {personaOptions.find(p => p.id === currentPersona)?.name}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personaOptions.map((option) => (
          <div
            key={option.id}
            className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
              selectedPersona === option.id
                ? 'border-primary-500 bg-primary-50'
                : option.color
            } ${option.popular ? 'ring-2 ring-primary-200' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            {option.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full ${
                selectedPersona === option.id ? 'bg-primary-100 text-primary-600' : 'bg-neutral-100 text-neutral-600'
              }`}>
                {option.icon}
              </div>
              {selectedPersona === option.id && (
                <div className="bg-primary-500 text-white rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2">{option.name}</h3>
            <p className="text-neutral-600 mb-4">{option.description}</p>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Features:</span>
                <span className="font-bold text-lg">{option.price}</span>
              </div>
              <ul className="space-y-1">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {currentPersona === option.id && (
              <div className="bg-success-100 text-success-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                Current Persona
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleConfirmSwitch}
          disabled={selectedPersona === currentPersona}
          className={`px-8 py-3 rounded-md font-medium transition-all ${
            selectedPersona === currentPersona
              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
              : 'btn-primary'
          }`}
        >
          {selectedPersona === currentPersona 
            ? 'Already Selected' 
            : `Switch to ${personaOptions.find(p => p.id === selectedPersona)?.name}`
          }
          {selectedPersona !== currentPersona && <ArrowRight className="ml-2 h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};

export default PersonaSelector;