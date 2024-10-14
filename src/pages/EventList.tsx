import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, Search } from 'lucide-react';

const mockEvents = [
  { id: 1, title: 'Luxury Wedding Planning', category: 'Wedding', rating: 4.8, price: '$1000-$5000', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, title: 'Birthday Party Extravaganza', category: 'Birthday', rating: 4.5, price: '$300-$1000', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, title: 'Corporate Summit Management', category: 'Corporate', rating: 4.7, price: '$2000-$10000', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 4, title: 'Intimate Wedding Coordination', category: 'Wedding', rating: 4.9, price: '$500-$2000', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 5, title: 'Kids Birthday Party Magic', category: 'Birthday', rating: 4.6, price: '$200-$800', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 6, title: 'Tech Conference Organization', category: 'Corporate', rating: 4.8, price: '$5000-$20000', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const EventList: React.FC = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredEvents = mockEvents.filter(event => {
    return (
      (filters.category === '' || event.category === filters.category) &&
      (filters.priceRange === '' || event.price.includes(filters.priceRange)) &&
      (filters.rating === 0 || event.rating >= filters.rating) &&
      (searchTerm === '' || event.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text mb-8">Discover Event Services</h1>
      
      <div className="mb-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex items-center space-x-4">
          <Filter className="text-gray-500" />
          <select
            name="category"
            onChange={handleFilterChange}
            className="border rounded-md px-2 py-1"
          >
            <option value="">All Categories</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
          </select>
          <select
            name="priceRange"
            onChange={handleFilterChange}
            className="border rounded-md px-2 py-1"
          >
            <option value="">All Prices</option>
            <option value="$">$ (Budget)</option>
            <option value="$$">$$ (Standard)</option>
            <option value="$$$">$$$ (Premium)</option>
          </select>
          <select
            name="rating"
            onChange={handleFilterChange}
            className="border rounded-md px-2 py-1"
          >
            <option value="0">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map(event => (
          <Link key={event.id} to={`/events/${event.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="relative">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm font-semibold text-primary">
                {event.category}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-text mb-2">{event.title}</h2>
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-gray-700 font-semibold">{event.rating}</span>
              </div>
              <p className="text-primary font-semibold">{event.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;