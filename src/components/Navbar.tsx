import React from 'react';
import { Menu, X, Laptop } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Laptop className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">QuickRent</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-red-600">Features</a>
            <a href="#gadgets" className="text-gray-600 hover:text-red-600">Gadgets</a>
            <a href="#contact" className="text-gray-600 hover:text-red-600">Contact</a>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Sign Up
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-red-600">Features</a>
            <a href="#gadgets" className="block px-3 py-2 text-gray-600 hover:text-red-600">Gadgets</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-red-600">Contact</a>
            <button className="w-full text-left px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};