import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../config/constants';

export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Truck size={32} />
            <span className="text-2xl font-bold">24/7 Towing</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/services" className="hover:text-blue-200">Services</Link>
            <Link to="/about" className="hover:text-blue-200">About</Link>
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800">
              <Phone size={20} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}