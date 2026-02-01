import React from 'react';

interface MVPStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const MVPStep: React.FC<MVPStepProps> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Minimum Viable Product (MVP)</h2>
      <p className="text-neutral-600 mb-8">
        Define the smallest version of your product that delivers value and helps you learn from users.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="mvpDescription" className="block text-sm font-medium text-neutral-700 mb-1">
            MVP Description
          </label>
          <textarea
            id="mvpDescription"
            name="mvpDescription"
            value={formData.mvpDescription || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Describe the core features and functionality of your MVP"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Core Features
          </label>
          <p className="text-sm text-neutral-500 mb-2">List 3-5 essential features for your MVP:</p>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num}>
                <input
                  type="text"
                  name={`coreFeature${num}`}
                  value={formData[`coreFeature${num}`] || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder={`Feature ${num}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="successCriteria" className="block text-sm font-medium text-neutral-700 mb-1">
            Success Criteria
          </label>
          <textarea
            id="successCriteria"
            name="successCriteria"
            value={formData.successCriteria || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="How will you measure if your MVP is successful? What metrics matter?"
          ></textarea>
        </div>

        <div>
          <label htmlFor="developmentApproach" className="block text-sm font-medium text-neutral-700 mb-1">
            Development Approach
          </label>
          <select
            id="developmentApproach"
            name="developmentApproach"
            value={formData.developmentApproach || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select an approach</option>
            <option value="inHouse">In-house development</option>
            <option value="agency">Development agency</option>
            <option value="freelance">Freelance developers</option>
            <option value="noCode">No-code tools</option>
            <option value="hybrid">Hybrid approach</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timelineEstimate" className="block text-sm font-medium text-neutral-700 mb-1">
              Timeline Estimate
            </label>
            <input
              type="text"
              id="timelineEstimate"
              name="timelineEstimate"
              value={formData.timelineEstimate || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., 3 months"
            />
          </div>

          <div>
            <label htmlFor="budgetEstimate" className="block text-sm font-medium text-neutral-700 mb-1">
              Budget Estimate
            </label>
            <input
              type="text"
              id="budgetEstimate"
              name="budgetEstimate"
              value={formData.budgetEstimate || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., $15,000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            MVP Resources
          </label>
          <div className="space-y-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="needDesigner"
                name="needDesigner"
                checked={formData.needDesigner || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="needDesigner" className="ml-2 block text-sm text-neutral-700">
                I need a designer
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="needDeveloper"
                name="needDeveloper"
                checked={formData.needDeveloper || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="needDeveloper" className="ml-2 block text-sm text-neutral-700">
                I need a developer
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="needProductManager"
                name="needProductManager"
                checked={formData.needProductManager || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="needProductManager" className="ml-2 block text-sm text-neutral-700">
                I need a product manager
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="needTesting"
                name="needTesting"
                checked={formData.needTesting || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="needTesting" className="ml-2 block text-sm text-neutral-700">
                I need help with user testing
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPStep;