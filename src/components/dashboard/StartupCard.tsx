import React from 'react';
import { Rocket } from 'lucide-react';

interface StartupCardProps {
  name: string;
  description: string;
  founder: string;
  days: number;
}

const StartupCard: React.FC<StartupCardProps> = ({ name, description, founder, days }) => {
  return (
    <div className="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
      <div className="flex items-start">
        <div className="bg-accent-100 p-2 rounded-full mr-3">
          <Rocket className="h-5 w-5 text-accent-600" />
        </div>
        <div>
          <h3 className="font-medium text-neutral-900">{name}</h3>
          <p className="text-sm text-neutral-600">{description}</p>
          <div className="flex justify-between mt-2">
            <p className="text-xs text-neutral-500">By {founder}</p>
            <p className="text-xs text-neutral-500">Launched {days} days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;