import React from 'react';
import { BookOpen, Film, Clock, ArrowRight } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  duration: string;
  category: string;
  author: string;
  image: string;
}

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
          {resource.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-neutral-500 text-sm mb-2">
          {resource.type === 'video' ? (
            <Film className="h-4 w-4 mr-1" />
          ) : (
            <BookOpen className="h-4 w-4 mr-1" />
          )}
          <span className="capitalize mr-2">{resource.type}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{resource.duration}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
        <p className="text-neutral-600 mb-4">{resource.description}</p>
        <div className="mt-auto">
          <p className="text-sm text-neutral-500 mb-3">By {resource.author}</p>
          <a 
            href="#" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
          >
            Read more <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;