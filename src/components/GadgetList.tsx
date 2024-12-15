import React from 'react';
import { Camera, Laptop, Gamepad, Plus } from 'lucide-react';

const gadgets = [
  {
    name: 'Professional Cameras',
    price: '49',
    features: ['4K Video Recording', 'Multiple Lenses', '32GB SD Card Included', 'Carrying Case'],
    icon: Camera,
  },
  {
    name: 'Premium Laptops',
    price: '79',
    features: ['Latest Processors', '16GB RAM', 'SSD Storage', 'Professional Software'],
    icon: Laptop,
    popular: true,
  },
  {
    name: 'Gaming Consoles',
    price: '39',
    features: ['Latest Gen Console', '2 Controllers', '3 Game Titles', 'Online Gaming Access'],
    icon: Gamepad,
  },
];

export const GadgetList = () => {
  return (
    <div id="gadgets" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Gadgets
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our wide selection of premium gadgets
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gadgets.map((gadget) => (
            <div
              key={gadget.name}
              className={`relative rounded-lg border ${
                gadget.popular ? 'border-red-600' : 'border-gray-200'
              } p-8 shadow-sm hover:shadow-lg transition-shadow`}
            >
              {gadget.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 transform">
                  <span className="inline-flex rounded-full bg-red-600 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex items-center justify-center">
                <gadget.icon className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="mt-4 text-center text-2xl font-bold text-gray-900">{gadget.name}</h3>
              <p className="mt-4 text-center text-5xl font-extrabold text-gray-900">${gadget.price}</p>
              <p className="mt-2 text-center text-gray-500">/day</p>
              <ul className="mt-8 space-y-4">
                {gadget.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Plus className="h-5 w-5 text-red-600" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-md bg-red-600 py-3 text-white hover:bg-red-700">
                Rent Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center rounded-md border-2 border-red-600 px-6 py-3 text-lg font-medium text-red-600 hover:bg-red-50">
            List Your Gadget
            <Plus className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};