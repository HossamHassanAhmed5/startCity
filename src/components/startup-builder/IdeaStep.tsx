import React from 'react';

interface IdeaStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const IdeaStep: React.FC<IdeaStepProps> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Define Your Idea</h2>
      <p className="text-neutral-600 mb-8">
        Start by clearly defining your startup idea. Be specific about the problem you're solving and who you're solving it for.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-neutral-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="e.g., Velora Technologies"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-neutral-700 mb-1">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select an industry</option>
            <option value="tech">Technology</option>
            <option value="health">Healthcare</option>
            <option value="finance">Financial Services</option>
            <option value="education">Education</option>
            <option value="ecommerce">E-commerce</option>
            <option value="food">Food & Beverage</option>
            <option value="transportation">Transportation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-neutral-700 mb-1">
            Problem Statement
          </label>
          <textarea
            id="problem"
            name="problem"
            value={formData.problem || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="What specific problem are you solving?"
          ></textarea>
        </div>

        <div>
          <label htmlFor="solution" className="block text-sm font-medium text-neutral-700 mb-1">
            Your Solution
          </label>
          <textarea
            id="solution"
            name="solution"
            value={formData.solution || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="How does your product or service solve this problem?"
          ></textarea>
        </div>

        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-neutral-700 mb-1">
            Target Audience
          </label>
          <textarea
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Who will benefit from your solution? Be specific about demographics, behaviors, and needs."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default IdeaStep;