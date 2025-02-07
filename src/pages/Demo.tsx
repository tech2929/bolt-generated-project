import React, { useState } from 'react';
import { Calendar, Clock, Users, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Demo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
    teamSize: '',
    industry: '',
    demoDate: '',
    demoTime: '',
  });

  const timeSlots = [
    '9:00 AM EST',
    '10:00 AM EST',
    '11:00 AM EST',
    '1:00 PM EST',
    '2:00 PM EST',
    '3:00 PM EST',
  ];

  const benefits = [
    {
      icon: Video,
      title: 'Live Product Tour',
      description: 'Get a personalized walkthrough of ServicePro tailored to your business needs'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Speak with our product specialists about your specific requirements'
    },
    {
      icon: Clock,
      title: '30-Minute Session',
      description: 'Efficient demonstration covering all key features and your questions'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            See ServicePro in Action
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Schedule a personalized demo with our product specialists and discover how ServicePro can transform your business
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{benefit.title}</h3>
              <p className="mt-2 text-gray-500 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Main Form Content */}
        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Progress Steps */}
          <div className="border-b border-gray-200">
            <div className="px-8 py-4">
              <nav className="flex items-center justify-center">
                <ol className="flex items-center space-x-4">
                  {[1, 2, 3].map((num) => (
                    <li key={num} className="flex items-center">
                      <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                        step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                      }`}>
                        {step > num ? <CheckCircle className="h-5 w-5" /> : num}
                      </div>
                      {num < 3 && (
                        <div className={`ml-4 w-24 h-0.5 ${
                          step > num ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>

          {/* Form Steps */}
          <div className="px-8 py-12">
            {step === 1 && (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Add other form fields here */}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Select a Date & Time</h3>
                {/* Date and time selection content */}
              </div>
            )}

            {step === 3 && (
              <div className="max-w-2xl mx-auto text-center">
                <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Demo Successfully Scheduled!</h3>
                {/* Confirmation content */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
