import React from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for exploring and getting started',
    features: [
      { name: 'Basic startup builder tools', included: true },
      { name: 'Community access (read-only)', included: true },
      { name: 'Knowledge center (limited)', included: true },
      { name: '1 active project', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Email support', included: true },
      { name: 'Advanced startup tools', included: false },
      { name: 'Full community access', included: false },
      { name: 'Unlimited projects', included: false },
      { name: 'Priority support', included: false },
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Everything you need to build your startup',
    features: [
      { name: 'Basic startup builder tools', included: true },
      { name: 'Community access (read-only)', included: true },
      { name: 'Knowledge center (limited)', included: true },
      { name: '5 active projects', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Advanced startup tools', included: true },
      { name: 'Full community access', included: true },
      { name: 'AI-powered insights', included: false },
      { name: 'Dedicated success manager', included: false },
    ],
    buttonText: 'Subscribe Now',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'Advanced features for serious founders',
    features: [
      { name: 'Basic startup builder tools', included: true },
      { name: 'Community access (read-only)', included: true },
      { name: 'Knowledge center (unlimited)', included: true },
      { name: 'Unlimited projects', included: true },
      { name: 'Advanced analytics & reporting', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Advanced startup tools', included: true },
      { name: 'Full community access', included: true },
      { name: 'AI-powered insights', included: true },
      { name: 'Dedicated success manager', included: true },
    ],
    buttonText: 'Contact Sales',
  },
];

const Subscription: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg text-neutral-600">
            Select the perfect plan to help you build and grow your startup
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl shadow-md overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-xl">
                  Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-neutral-500 ml-1">/month</span>
                </div>
                <p className="text-neutral-600 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-2 px-4 rounded-md font-medium ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
              <div className="border-t border-neutral-200 p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-neutral-300 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included ? 'text-neutral-700' : 'text-neutral-400'
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">Can I change plans later?</h3>
              <p className="text-neutral-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-neutral-600">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is there a contract or commitment?</h3>
              <p className="text-neutral-600">
                No, all plans are month-to-month with no long-term commitment required.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Do you offer refunds?</h3>
              <p className="text-neutral-600">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-neutral-600 mb-6">
            Our team is here to help you find the perfect plan for your needs
          </p>
          <button className="btn-outline">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;