import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Calendar, DollarSign, MapPin, Clock } from 'lucide-react';

const mockEvent = {
  id: 1,
  title: 'Luxury Wedding Planning Services',
  category: 'Wedding',
  rating: 4.8,
  price: '$1000-$5000',
  image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  description: 'Our luxury wedding planning services cover everything from venue selection to day-of coordination. We specialize in creating unforgettable, personalized wedding experiences.',
  features: [
    'Full-service wedding planning',
    'Vendor coordination and management',
    'Custom design and decor',
    'Timeline creation and management',
    'On-site coordination on the wedding day'
  ],
  location: 'Available nationwide',
  duration: 'Varies (typically 6-12 months of planning)',
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you would fetch the event details based on the id
  const event = mockEvent;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h1>
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="text-gray-700 mr-4">{event.rating}</span>
          <span className="text-gray-600">{event.category}</span>
        </div>
        <p className="text-gray-600 mb-6">{event.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 text-indigo-600 mr-2" />
            <span>{event.price}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-indigo-600 mr-2" />
            <span>{event.duration}</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Features</h2>
        <ul className="list-disc list-inside mb-6">
          {event.features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
        <Link
          to={`/booking/${event.id}`}
          className="block w-full bg-indigo-600 text-white text-center font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;