import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const StartupProgress: React.FC = () => {
  // Progress data
  const sections = [
    { name: 'Idea', completed: true, steps: [
      { name: 'Define Problem', completed: true },
      { name: 'Identify Solution', completed: true },
      { name: 'Target Audience', completed: true },
    ]},
    { name: 'Validation', completed: true, steps: [
      { name: 'Market Research', completed: true },
      { name: 'Competitor Analysis', completed: true },
      { name: 'Customer Interviews', completed: true },
    ]},
    { name: 'Team', completed: true, steps: [
      { name: 'Founder Assessment', completed: true },
      { name: 'Skill Gap Analysis', completed: true },
      { name: 'Team Structure', completed: true },
    ]},
    { name: 'Business Model', completed: false, steps: [
      { name: 'Revenue Streams', completed: true },
      { name: 'Pricing Strategy', completed: true },
      { name: 'Cost Structure', completed: false },
    ]},
    { name: 'MVP', completed: false, steps: [
      { name: 'Feature Definition', completed: false },
      { name: 'Development Plan', completed: false },
      { name: 'Testing Strategy', completed: false },
    ]},
    { name: 'Funding', completed: false, steps: [
      { name: 'Funding Strategy', completed: false },
      { name: 'Financial Projections', completed: false },
      { name: 'Investor Pitch', completed: false },
    ]},
  ];

  // Calculate overall progress
  const totalSteps = sections.reduce((acc, section) => acc + section.steps.length, 0);
  const completedSteps = sections.reduce((acc, section) => 
    acc + section.steps.filter(step => step.completed).length, 0);
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-neutral-700">Overall Progress</span>
          <span className="text-sm font-medium text-neutral-700">{progressPercentage}%</span>
        </div>
        <div className="w-full h-2 bg-neutral-200 rounded-full">
          <div 
            className="h-2 bg-primary-600 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="flex items-center mb-2">
              {section.completed ? (
                <CheckCircle className="h-5 w-5 text-success-500 mr-2" />
              ) : (
                <Circle className="h-5 w-5 text-neutral-400 mr-2" />
              )}
              <h3 className="font-medium">{section.name}</h3>
            </div>
            <div className="ml-7 space-y-2">
              {section.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-center">
                  {step.completed ? (
                    <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  ) : (
                    <Circle className="h-4 w-4 text-neutral-400 mr-2" />
                  )}
                  <p className={`text-sm ${step.completed ? 'text-neutral-700' : 'text-neutral-500'}`}>
                    {step.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupProgress;