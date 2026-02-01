import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, href }) => {
  return (
    <div className="card">
      <div className="p-6">
        <div className="text-primary-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <Link
          to={href}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;