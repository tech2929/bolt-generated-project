import React from 'react';
import { Calendar, DollarSign, Users, BarChart, Clock, Bell, Phone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Smart Scheduling',
      description: 'Efficiently manage appointments with our intelligent scheduling system.',
      icon: Calendar,
    },
    {
      name: 'Payment Processing',
      description: 'Accept payments instantly with integrated payment solutions.',
      icon: DollarSign,
    },
    {
      name: 'Team Management',
      description: 'Track and manage your team\'s performance in real-time.',
      icon: Users,
    },
    {
      name: 'Business Analytics',
      description: 'Make data-driven decisions with comprehensive reporting.',
      icon: BarChart,
    },
    {
      name: 'Time Tracking',
      description: 'Monitor work hours and optimize productivity.',
      icon: Clock,
    },
    {
      name: 'Smart Notifications',
      description: 'Automated reminders for appointments and follow-ups.',
      icon: Bell,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to run your service business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive platform helps you manage every aspect of your business from one place.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
