import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SubmissionFormProps {
  onClose: () => void;
}

const SubmissionForm: React.FC<SubmissionFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    fundingAmount: '',
    fundingType: '',
    stage: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    alert('Your funding interest has been submitted. Our team will be in touch shortly!');
    onClose();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Tell us about your funding needs</h3>
        <button onClick={onClose} className="text-neutral-400 hover:text-neutral-500">
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="fundingAmount" className="block text-sm font-medium text-neutral-700 mb-1">
              Funding Amount Needed
            </label>
            <input
              type="text"
              id="fundingAmount"
              name="fundingAmount"
              required
              value={formData.fundingAmount}
              onChange={handleChange}
              placeholder="e.g., $50,000"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="fundingType" className="block text-sm font-medium text-neutral-700 mb-1">
              Preferred Funding Type
            </label>
            <select
              id="fundingType"
              name="fundingType"
              required
              value={formData.fundingType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select type</option>
              <option value="equity">Equity</option>
              <option value="debt">Debt</option>
              <option value="grant">Grant</option>
              <option value="accelerator">Accelerator</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          <div>
            <label htmlFor="stage" className="block text-sm font-medium text-neutral-700 mb-1">
              Company Stage
            </label>
            <select
              id="stage"
              name="stage"
              required
              value={formData.stage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select stage</option>
              <option value="idea">Idea Stage</option>
              <option value="mvp">MVP</option>
              <option value="pre-seed">Pre-Seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="series-b+">Series B+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
            Brief Description of Your Startup
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="What does your startup do? What problem are you solving? What stage are you at?"
          ></textarea>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="btn bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;