import React from 'react';
import { Wrench, Droplet, Zap, Brush, TreePine, Truck } from 'lucide-react';

const industries = [
  {
    name: 'HVAC',
    icon: Wrench,
    description: 'Streamline your HVAC business with smart scheduling, dispatching, and invoicing tools designed for temperature control professionals.',
    benefits: [
      'Real-time technician tracking',
      'Equipment service history',
      'Maintenance contract management',
      'Digital HVAC inspection forms'
    ]
  },
  {
    name: 'Plumbing',
    icon: Droplet,
    description: 'Manage your plumbing service business efficiently with tools for emergency dispatch, inventory tracking, and customer communication.',
    benefits: [
      'Emergency job scheduling',
      'Parts inventory management',
      'Digital estimates and invoices',
      'Customer history tracking'
    ]
  },
  {
    name: 'Electrical',
    icon: Zap,
    description: 'Keep your electrical service business organized with professional tools for job scheduling, estimating, and customer management.',
    benefits: [
      'Electrical code compliance forms',
      'Project timeline tracking',
      'Digital safety checklists',
      'Customer portal access'
    ]
  },
  {
    name: 'Cleaning Services',
    icon: Brush,
    description: 'Optimize your cleaning business operations with recurring scheduling, team management, and quality control tools.',
    benefits: [
      'Recurring schedule management',
      'Cleaning checklist automation',
      'Team task assignment',
      'Quality inspection forms'
    ]
  },
  {
    name: 'Landscaping',
    icon: TreePine,
    description: 'Grow your landscaping business with tools for route optimization, crew management, and seasonal service scheduling.',
    benefits: [
      'Route optimization',
      'Weather-based scheduling',
      'Equipment tracking',
      'Maintenance contracts'
    ]
  },
  {
    name: 'General Contractors',
    icon: Truck,
    description: 'Manage multiple projects and teams efficiently with comprehensive project management and scheduling tools.',
    benefits: [
      'Project timeline tracking',
      'Subcontractor management',
      'Material ordering system',
      'Progress photo sharing'
    ]
  }
];

const Industries = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Solutions for Every Service Industry
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tailored features for your specific industry needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-center">
                <industry.icon className="h-8 w-8 text-blue-600" />
                <h3 className="ml-4 text-2xl font-bold text-gray-900">
                  {industry.name}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">{industry.description}</p>
              <ul className="mt-6 space-y-3">
                {industry.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <span className="h-6 w-6 text-green-500 flex-shrink-0">•</span>
                    <span className="ml-3 text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="/demo"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more about {industry.name} solutions
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
