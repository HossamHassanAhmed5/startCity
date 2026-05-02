import React, { useState } from 'react';
import RecommendationBadge from '../ai-assistant/RecommendationBadge';

interface BusinessModelStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const BusinessModelStep: React.FC<BusinessModelStepProps> = ({ formData, updateFormData }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleRecommendation = (fieldName: string, value: string) => {
    updateFormData({ [fieldName]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Business Model</h2>
      <p className="text-neutral-600 mb-8">
        Define how your business will create, deliver, and capture value.
      </p>

      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-1">
            <label htmlFor="revenueModel" className="block text-sm font-medium text-neutral-700">
              Revenue Model
            </label>
            {Object.keys(formData).length > 0 && formData.industry && (
              <RecommendationBadge
                fieldName="revenueModel"
                formData={formData}
                onRecommendation={(value) => handleRecommendation('revenueModel', value)}
              />
            )}
          </div>
          <select
            id="revenueModel"
            name="revenueModel"
            value={formData.revenueModel || ''}
            onChange={handleChange}
            onFocus={() => setFocusedField('revenueModel')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select a revenue model</option>
            <option value="subscription">Subscription</option>
            <option value="freemium">Freemium</option>
            <option value="usage">Usage-based</option>
            <option value="transactional">Transactional</option>
            <option value="advertising">Advertising</option>
            <option value="marketplace">Marketplace / Commission</option>
            <option value="licensing">Licensing / Royalties</option>
            <option value="hardware">Hardware Sales</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="pricingStrategy" className="block text-sm font-medium text-neutral-700 mb-1">
            Pricing Strategy
          </label>
          <textarea
            id="pricingStrategy"
            name="pricingStrategy"
            value={formData.pricingStrategy || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Describe your pricing structure, packages, and pricing strategy"
          ></textarea>
        </div>

        <div>
          <label htmlFor="customerAcquisition" className="block text-sm font-medium text-neutral-700 mb-1">
            Customer Acquisition Strategy
          </label>
          <textarea
            id="customerAcquisition"
            name="customerAcquisition"
            value={formData.customerAcquisition || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="How will you acquire customers? What channels will you use?"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cac" className="block text-sm font-medium text-neutral-700 mb-1">
              Customer Acquisition Cost (CAC)
            </label>
            <input
              type="text"
              id="cac"
              name="cac"
              value={formData.cac || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., $50 per customer"
            />
          </div>

          <div>
            <label htmlFor="ltv" className="block text-sm font-medium text-neutral-700 mb-1">
              Lifetime Value (LTV)
            </label>
            <input
              type="text"
              id="ltv"
              name="ltv"
              value={formData.ltv || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., $500 per customer"
            />
          </div>
        </div>

        <div>
          <label htmlFor="keyMetrics" className="block text-sm font-medium text-neutral-700 mb-1">
            Key Business Metrics
          </label>
          <textarea
            id="keyMetrics"
            name="keyMetrics"
            value={formData.keyMetrics || ''}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="What metrics will you track to measure success? (e.g., MRR, Churn Rate, etc.)"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="grossMargin" className="block text-sm font-medium text-neutral-700 mb-1">
              Gross Margin (%)
            </label>
            <input
              type="text"
              id="grossMargin"
              name="grossMargin"
              value={formData.grossMargin || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., 80%"
            />
          </div>

          <div>
            <label htmlFor="breakeven" className="block text-sm font-medium text-neutral-700 mb-1">
              Estimated Break-even Point
            </label>
            <input
              type="text"
              id="breakeven"
              name="breakeven"
              value={formData.breakeven || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., 18 months, 500 customers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelStep;