import React from 'react';

interface FundingStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const FundingStep: React.FC<FundingStepProps> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Funding Plan</h2>
      <p className="text-neutral-600 mb-8">
        Develop a strategy for financing your startup through different stages of growth.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="fundingStrategy" className="block text-sm font-medium text-neutral-700 mb-1">
            Funding Strategy
          </label>
          <select
            id="fundingStrategy"
            name="fundingStrategy"
            value={formData.fundingStrategy || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select primary funding strategy</option>
            <option value="bootstrap">Bootstrap (self-funded)</option>
            <option value="friends">Friends & Family</option>
            <option value="angel">Angel Investment</option>
            <option value="vc">Venture Capital</option>
            <option value="accelerator">Accelerator/Incubator</option>
            <option value="crowdfunding">Crowdfunding</option>
            <option value="grants">Grants</option>
            <option value="revenue">Revenue-based</option>
            <option value="mixed">Mixed strategy</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Funding Sources of Interest
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="interestedVC"
                name="interestedVC"
                checked={formData.interestedVC || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="interestedVC" className="ml-2 block text-sm text-neutral-700">
                Venture Capital
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="interestedAngel"
                name="interestedAngel"
                checked={formData.interestedAngel || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="interestedAngel" className="ml-2 block text-sm text-neutral-700">
                Angel Investors
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="interestedAccelerator"
                name="interestedAccelerator"
                checked={formData.interestedAccelerator || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="interestedAccelerator" className="ml-2 block text-sm text-neutral-700">
                Accelerators/Incubators
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="interestedGrants"
                name="interestedGrants"
                checked={formData.interestedGrants || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="interestedGrants" className="ml-2 block text-sm text-neutral-700">
                Grants
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="interestedCrowdfunding"
                name="interestedCrowdfunding"
                checked={formData.interestedCrowdfunding || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="interestedCrowdfunding" className="ml-2 block text-sm text-neutral-700">
                Crowdfunding
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="interestedSBIR"
                name="interestedSBIR"
                checked={formData.interestedSBIR || false}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="interestedSBIR" className="ml-2 block text-sm text-neutral-700">
                SBIR/STTR Programs
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="initialFunding" className="block text-sm font-medium text-neutral-700 mb-1">
              Initial Funding Needed
            </label>
            <input
              type="text"
              id="initialFunding"
              name="initialFunding"
              value={formData.initialFunding || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., $50,000"
            />
          </div>

          <div>
            <label htmlFor="runwayMonths" className="block text-sm font-medium text-neutral-700 mb-1">
              Runway (months)
            </label>
            <input
              type="text"
              id="runwayMonths"
              name="runwayMonths"
              value={formData.runwayMonths || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., 12 months"
            />
          </div>
        </div>

        <div>
          <label htmlFor="fundingUse" className="block text-sm font-medium text-neutral-700 mb-1">
            Use of Funds
          </label>
          <textarea
            id="fundingUse"
            name="fundingUse"
            value={formData.fundingUse || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="How will you use the initial funding? Be specific about allocations."
          ></textarea>
        </div>

        <div>
          <label htmlFor="milestones" className="block text-sm font-medium text-neutral-700 mb-1">
            Key Milestones
          </label>
          <textarea
            id="milestones"
            name="milestones"
            value={formData.milestones || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="What milestones do you plan to achieve with this funding?"
          ></textarea>
        </div>

        <div>
          <label htmlFor="equityStrategy" className="block text-sm font-medium text-neutral-700 mb-1">
            Equity Strategy
          </label>
          <textarea
            id="equityStrategy"
            name="equityStrategy"
            value={formData.equityStrategy || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="What is your approach to giving up equity? How much are you willing to part with at different stages?"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FundingStep;