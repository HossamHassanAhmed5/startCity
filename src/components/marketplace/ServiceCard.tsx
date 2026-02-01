import React from 'react';
import { Star } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  provider: string;
  rating: number;
  reviewCount: number;
  price: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
          {service.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{service.description}</p>
        <div className="flex items-center mb-2">
          <p className="text-sm font-medium">{service.provider}</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-accent-500 fill-accent-500" />
            <span className="ml-1 text-sm font-medium">{service.rating}</span>
          </div>
          <span className="mx-2 text-neutral-300">•</span>
          <span className="text-sm text-neutral-500">{service.reviewCount} reviews</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-lg">{service.price}</span>
          <button className="btn-primary py-2 px-4 text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;