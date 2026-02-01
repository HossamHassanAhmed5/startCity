import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, description }) => {
  return (
    <div className="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
      <div className="flex items-start">
        <div className="bg-primary-100 p-2 rounded-full mr-3">
          <Calendar className="h-5 w-5 text-primary-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-neutral-900">{title}</h3>
          <p className="text-sm text-primary-600 font-medium">{date} • {time}</p>
          <p className="text-sm text-neutral-600 mt-1">{description}</p>
          <div className="mt-3 flex justify-between items-center">
            <button className="text-sm text-primary-600 font-medium hover:text-primary-700">
              Register
            </button>
            <button className="text-sm text-neutral-500 hover:text-neutral-700">
              Add to calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;