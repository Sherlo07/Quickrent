import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Tech devices"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Rent Premium Gadgets<br />
          <span className="text-red-500">Without Breaking the Bank</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Access the latest tech without the commitment. Rent laptops, cameras, gaming consoles, and more at affordable prices.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
            Explore Rentals
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};