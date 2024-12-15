import React from 'react';
import { Package, Clock, Truck, Shield } from 'lucide-react';

const features = [
  {
    name: 'Wide Variety',
    description: 'Choose from hundreds of premium gadgets including laptops, cameras, and gaming consoles.',
    icon: Package,
  },
  {
    name: 'Quick Delivery',
    description: 'Get your rented gadgets delivered to your doorstep within 24 hours.',
    icon: Truck,
  },
  {
    name: 'Flexible Duration',
    description: 'Rent for a day, week, or month. Extend or return early as needed.',
    icon: Clock,
  },
  {
    name: 'Damage Protection',
    description: 'All rentals come with comprehensive damage protection for peace of mind.',
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose QuickRent?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience hassle-free gadget rentals with our premium service
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-4">
                <span className="inline-flex items-center justify-center p-3 bg-red-600 rounded-md">
                  <feature.icon className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};