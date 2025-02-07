import React from 'react';
import {
  Calendar,
  DollarSign,
  Users,
  BarChart,
  Clock,
  Bell,
  Smartphone,
  FileText,
  MessageCircle,
  Settings,
  Truck,
  CreditCard
} from 'lucide-react';

const features = [
  {
    category: "Scheduling & Dispatch",
    description: "Powerful tools to manage your team and jobs efficiently",
    items: [
      {
        title: "Smart Scheduling",
        description: "AI-powered scheduling system that optimizes technician routes and job assignments",
        icon: Calendar
      },
      {
        title: "Real-time Dispatch",
        description: "Instantly assign and track jobs with live GPS tracking and status updates",
        icon: Truck
      },
      {
        title: "Mobile App",
        description: "Full-featured mobile app for technicians to manage jobs on the go",
        icon: Smartphone
      }
    ]
  },
  {
    category: "Business Management",
    description: "Everything you need to run your service business efficiently",
    items: [
      {
        title: "Invoicing & Payments",
        description: "Create professional invoices and accept payments instantly",
        icon: DollarSign
      },
      {
        title: "Team Management",
        description: "Track performance, manage schedules, and handle payroll",
        icon: Users
      },
      {
        title: "Analytics Dashboard",
        description: "Comprehensive reporting and insights to grow your business",
        icon: BarChart
      }
    ]
  },
  {
    category: "Customer Experience",
    description: "Tools to deliver exceptional service and grow your customer base",
    items: [
      {
        title: "Customer Portal",
        description: "Self-service portal for customers to book appointments and view history",
        icon: MessageCircle
      },
      {
        title: "Automated Notifications",
        description: "Keep customers informed with automated SMS and email updates",
        icon: Bell
      },
      {
        title: "Digital Forms",
        description: "Custom forms for estimates, work orders, and customer feedback",
        icon: FileText
      }
    ]
  },
  {
    category: "Advanced Tools",
    description: "Powerful features to take your business to the next level",
    items: [
      {
        title: "Time Tracking",
        description: "Accurate time tracking for jobs, travel, and breaks",
        icon: Clock
      },
      {
        title: "Payment Processing",
        description: "Accept credit cards, ACH, and other payment methods",
        icon: CreditCard
      },
      {
        title: "Integrations",
        description: "Connect with your favorite accounting and business tools",
        icon: Settings
      }
    ]
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Everything you need to run your service business
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-500">
            Powerful features designed specifically for field service businesses. Streamline your operations, delight your customers, and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          {features.map((category) => (
            <div key={category.category} className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900">{category.category}</h2>
                <p className="mt-4 text-lg text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {category.items.map((feature) => (
                  <div
                    key={feature.title}
                    className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="absolute -top-4 left-8">
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-xl shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold text-gray-900 mt-4">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Schedule a Demo
            </a>
          </div>
          <div className="mt-3 inline-flex rounded-md shadow ml-4">
            <a
              href="/trial"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
