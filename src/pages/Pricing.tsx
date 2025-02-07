import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  const plans = [
    {
      name: 'Basic',
      price: billingPeriod === 'monthly' ? 59 : 49,
      description: 'Perfect for small businesses just getting started',
      features: [
        'Mobile app for iOS & Android',
        'GPS tracking & routing',
        'Digital work orders',
        'Basic scheduling',
        'Customer notifications',
        'Payment processing',
        'Basic reporting',
        'Email support',
        'Up to 5 team members',
        'Customer management',
        'Job scheduling & tracking',
        'Basic inventory tracking',
        'Standard integrations'
      ]
    },
    {
      name: 'Essentials',
      price: billingPeriod === 'monthly' ? 149 : 129,
      description: 'Best for growing service businesses',
      features: [
        'Everything in Basic, plus:',
        'Advanced scheduling',
        'Custom forms & checklists',
        'Team chat & messaging',
        'Time tracking',
        'Advanced reporting',
        'QuickBooks integration',
        'Priority email support',
        'Up to 15 team members',
        'Custom notifications',
        'Inventory management',
        'Asset tracking',
        'API access'
      ]
    },
    {
      name: 'MAX',
      price: 'Contact Us',
      description: 'For large operations needing maximum flexibility',
      features: [
        'Everything in Essentials, plus:',
        'Enterprise scheduling',
        'Custom workflows',
        'Advanced analytics',
        'Dedicated account manager',
        'White-label mobile app',
        'Custom integrations',
        '24/7 premium support',
        'Unlimited team members',
        'Advanced security features',
        'Multi-location management',
        'Custom reporting',
        'SLA guarantees'
      ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Invest in easy to use solutions
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Choose the plan that best fits your needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex items-center">
            <span className={`mr-3 text-sm ${billingPeriod === 'monthly' ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                billingPeriod === 'annually' ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  billingPeriod === 'annually' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm ${billingPeriod === 'annually' ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Annual billing
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                      <span className="text-base font-medium text-gray-500">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  )}
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-blue-600 text-white text-center rounded-md py-2 font-medium hover:bg-blue-700"
                >
                  {plan.name === 'MAX' ? 'Contact Sales' : 'Start free trial'}
                </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Valuable add-ons and integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Add on to get more done</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Advanced reporting tools
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Custom mobile app branding
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Additional storage space
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Integrate with trusted partners</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  QuickBooks Online
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Stripe Payments
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Google Calendar
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-center mb-12">Pricing FAQ</h2>
          <div className="max-w-3xl mx-auto">
            <dl className="space-y-8">
              <div>
                <dt className="text-lg font-semibold text-gray-900">
                  How much does ServicePro cost per month?
                </dt>
                <dd className="mt-2 text-gray-600">
                  Our plans start at $59/month for the Basic plan, with flexible options for growing businesses.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-semibold text-gray-900">
                  Is ServicePro free to try?
                </dt>
                <dd className="mt-2 text-gray-600">
                  Yes! We offer a 14-day free trial on all our plans with no credit card required.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
