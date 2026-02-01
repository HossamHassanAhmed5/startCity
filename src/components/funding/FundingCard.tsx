import React from 'react';
import { CalendarClock, DollarSign, Award, Globe } from 'lucide-react';

interface FundingOpportunity {
  id: number;
  title: string;
  description: string;
  type: string;
  amount: string;
  deadline: string;
  eligibility: string;
  organization: string;
  location: string;
}

interface FundingCardProps {
  opportunity: FundingOpportunity;
}

const FundingCard: React.FC<FundingCardProps> = ({ opportunity }) => {
  // Set background color based on opportunity type
  const getBgColor = (type: string) => {
    switch (type) {
      case 'Grant':
        return 'bg-success-50 text-success-700 border-success-100';
      case 'Accelerator':
        return 'bg-primary-50 text-primary-700 border-primary-100';
      case 'VC Funding':
        return 'bg-secondary-50 text-secondary-700 border-secondary-100';
      case 'Competition':
        return 'bg-accent-50 text-accent-700 border-accent-100';
      default:
        return 'bg-neutral-50 text-neutral-700 border-neutral-100';
    }
  };

  return (
    <div className="card h-full flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBgColor(opportunity.type)}`}>
            {opportunity.type}
          </span>
          {opportunity.deadline !== 'Rolling applications' ? (
            <div className="flex items-center text-sm text-neutral-600">
              <CalendarClock className="h-4 w-4 mr-1" />
              {new Date(opportunity.deadline).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          ) : (
            <div className="flex items-center text-sm text-neutral-600">
              <CalendarClock className="h-4 w-4 mr-1" />
              Rolling
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{opportunity.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start">
            <DollarSign className="h-5 w-5 text-neutral-400 mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Amount</p>
              <p className="text-sm text-neutral-600">{opportunity.amount}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Award className="h-5 w-5 text-neutral-400 mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Eligibility</p>
              <p className="text-sm text-neutral-600">{opportunity.eligibility}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Globe className="h-5 w-5 text-neutral-400 mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-neutral-600">{opportunity.location}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <p className="text-sm mb-4">By <span className="font-medium">{opportunity.organization}</span></p>
          <button className="btn-primary w-full justify-center">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundingCard;