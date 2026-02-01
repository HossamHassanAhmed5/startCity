import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, rating }) => {
  return (
    <div className="card p-6">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-accent-500 fill-accent-500' : 'text-neutral-300'}`}
          />
        ))}
      </div>
      <p className="text-neutral-700 mb-6 italic">"{quote}"</p>
      <div className="mt-auto">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-neutral-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;