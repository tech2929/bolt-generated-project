import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to grow your business?</span>
          <span className="block text-blue-200">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/trial"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Get started
              <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
            >
              Schedule demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
