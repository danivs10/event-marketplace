import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<'buyer' | 'provider'>('buyer');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-text">EventMarket</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/events" className="text-text hover:text-primary transition duration-300">Explore</Link>
            {userType === 'provider' && (
              <Link to="/provider/dashboard" className="text-text hover:text-primary transition duration-300">Dashboard</Link>
            )}
            <Link to="/profile" className="text-text hover:text-primary transition duration-300">
              <User className="w-5 h-5 inline-block" />
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-text">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link to="/events" className="block py-2 text-text hover:text-primary">Explore</Link>
            {userType === 'provider' && (
              <Link to="/provider/dashboard" className="block py-2 text-text hover:text-primary">Dashboard</Link>
            )}
            <Link to="/profile" className="block py-2 text-text hover:text-primary">Profile</Link>
          </div>
        )}
      </div>
      <div className="bg-primary py-2 text-center">
        <button
          onClick={() => setUserType(userType === 'buyer' ? 'provider' : 'buyer')}
          className="text-white font-semibold text-sm"
        >
          Switch to {userType === 'buyer' ? 'Provider' : 'Buyer'} View
        </button>
      </div>
    </header>
  );
};

export default Header;