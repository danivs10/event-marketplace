import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, DollarSign, Users, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const popularCategories = [
    { name: 'Weddings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Birthday Parties', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Corporate Events', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Concerts', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <h1 className="text-5xl font-bold mb-6">Find the Perfect Service for Your Event</h1>
        <p className="text-xl mb-8">Weddings, Parties, Birthdays, and more!</p>
        <div className="flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for services..."
              className="w-96 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Search className="absolute right-4 top-3.5 text-gray-400" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Calendar className="w-16 h-16 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text">Choose Your Event</h3>
            <p className="text-gray-600">Browse through our wide range of event services</p>
          </div>
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text">Connect with Providers</h3>
            <p className="text-gray-600">Find the perfect match for your event needs</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-16 h-16 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text">Book Securely</h3>
            <p className="text-gray-600">Easy booking and payment process</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text mb-8 text-center">Popular Event Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularCategories.map((category) => (
            <Link
              key={category.name}
              to="/events"
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                <h3 className="text-white text-xl font-semibold text-center">{category.name}</h3>
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;