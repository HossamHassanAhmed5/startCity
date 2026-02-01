import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ValidationStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const ValidationStep: React.FC<ValidationStepProps> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Validate Your Idea</h2>
      <p className="text-neutral-600 mb-8">
        Before investing significant time and resources, validate that your solution meets a real market need.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="marketSize" className="block text-sm font-medium text-neutral-700 mb-1">
            Market Size Estimation
          </label>
          <input
            type="text"
            id="marketSize"
            name="marketSize"
            value={formData.marketSize || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="e.g., $10 billion annually"
          />
          <p className="mt-1 text-sm text-neutral-500">
            What is the total addressable market for your solution?
          </p>
        </div>

        <div>
          <label htmlFor="competitorAnalysis" className="block text-sm font-medium text-neutral-700 mb-1">
            Competitor Analysis
          </label>
          <textarea
            id="competitorAnalysis"
            name="competitorAnalysis"
            value={formData.competitorAnalysis || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="List your main competitors and how your solution differs"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Validation Methods Used
          </label>
          <div className="space-y-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="customerInterviews"
                name="customerInterviews"
                checked={formData.customerInterviews || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="customerInterviews" className="ml-2 block text-sm text-neutral-700">
                Customer interviews (recommended: at least 10)
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="surveyData"
                name="surveyData"
                checked={formData.surveyData || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="surveyData" className="ml-2 block text-sm text-neutral-700">
                Survey data
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="landingPage"
                name="landingPage"
                checked={formData.landingPage || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="landingPage" className="ml-2 block text-sm text-neutral-700">
                Landing page with sign-up form
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="prototype"
                name="prototype"
                checked={formData.prototype || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="prototype" className="ml-2 block text-sm text-neutral-700">
                Prototype or MVP testing
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="marketResearch"
                name="marketResearch"
                checked={formData.marketResearch || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="marketResearch" className="ml-2 block text-sm text-neutral-700">
                Industry/market research
              </label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="validationInsights" className="block text-sm font-medium text-neutral-700 mb-1">
            Key Validation Insights
          </label>
          <textarea
            id="validationInsights"
            name="validationInsights"
            value={formData.validationInsights || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="What have you learned from your validation efforts? How has this shaped your idea?"
          ></textarea>
        </div>

        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-primary-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-primary-800">Validation Tip</h3>
              <p className="mt-1 text-sm text-primary-700">
                Remember, validation is an ongoing process. Be prepared to pivot your idea based on customer feedback and market research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationStep;