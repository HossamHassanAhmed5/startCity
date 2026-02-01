import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

// Wizard step components
import IdeaStep from '../components/startup-builder/IdeaStep';
import ValidationStep from '../components/startup-builder/ValidationStep';
import TeamStep from '../components/startup-builder/TeamStep';
import BusinessModelStep from '../components/startup-builder/BusinessModelStep';
import MVPStep from '../components/startup-builder/MVPStep';
import FundingStep from '../components/startup-builder/FundingStep';

const steps = [
  { id: 'idea', name: 'Idea', component: IdeaStep },
  { id: 'validation', name: 'Validation', component: ValidationStep },
  { id: 'team', name: 'Team', component: TeamStep },
  { id: 'business-model', name: 'Business Model', component: BusinessModelStep },
  { id: 'mvp', name: 'MVP', component: MVPStep },
  { id: 'funding', name: 'Funding', component: FundingStep },
];

const StartupBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 1) / (steps.length - 1)) * 100);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgress(((currentStep - 1) / (steps.length - 1)) * 100);
    }
  };

  const handleSave = () => {
    // In a real app, this would save to a database or localStorage
    alert('Progress saved! You can return to this later.');
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Startup Builder</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Step-by-step guidance to develop, validate, and launch your startup
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-neutral-700">Your progress</span>
              <span className="text-sm font-medium text-neutral-700">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-neutral-200 rounded-full">
              <motion.div
                className="h-2 bg-primary-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </div>

          {/* Steps navigation */}
          <div className="flex justify-between mb-8 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => {
                  setCurrentStep(index);
                  setProgress((index / (steps.length - 1)) * 100);
                }}
                className={`flex flex-col items-center px-4 py-2 ${
                  index === currentStep
                    ? 'text-primary-700'
                    : index < currentStep
                    ? 'text-primary-500'
                    : 'text-neutral-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                    index === currentStep
                      ? 'bg-primary-600 text-white'
                      : index < currentStep
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-neutral-100 text-neutral-400'
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="text-sm whitespace-nowrap">{step.name}</span>
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <CurrentStepComponent
              formData={formData}
              updateFormData={(newData) => setFormData({ ...formData, ...newData })}
            />
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center ${
                currentStep === 0
                  ? 'btn bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  : 'btn bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Previous
            </button>
            <div className="flex space-x-4">
              <button onClick={handleSave} className="btn-outline">
                Save Progress
              </button>
              {currentStep === steps.length - 1 ? (
                <button className="btn-primary">
                  Complete
                  <CheckCircle className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <button onClick={handleNext} className="btn-primary">
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupBuilder;